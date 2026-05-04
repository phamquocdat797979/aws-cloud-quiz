const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'ban-dich');
const files = fs.readdirSync(dir).filter(f => f.startsWith('module') && f.endsWith('.md'));

const allModules = {};

files.forEach(file => {
    const match = file.match(/^module(\d+)_/);
    if (!match) return;
    const moduleNum = parseInt(match[1]);
    
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    
    // Lấy tiêu đề module
    let titleMatch = content.match(/^#\s+(.*)/m);
    let title = titleMatch ? titleMatch[1].trim() : `Module ${moduleNum}`;
    
    // Tách các câu hỏi bằng regex (bắt đầu bằng **Câu X:**)
    const qBlocks = content.split(/\*\*Câu \d+:\*\*/).slice(1);
    
    const questions = [];
    
    qBlocks.forEach((block, index) => {
        // Tách phần nội dung câu hỏi+đáp án và phần kết quả
        const ansSplit = block.split(/\*\*Đáp án:/);
        if (ansSplit.length < 2) return;
        
        let qTextAndOptions = ansSplit[0].trim();
        let answerTextRaw = ansSplit[1].split('**')[0].trim();
        
        // Tìm các đáp án (A., B., C., D., ...)
        const optionRegex = /^[A-Z]\.\s/gm;
        let optionMatches = [...qTextAndOptions.matchAll(optionRegex)];
        
        if (optionMatches.length === 0) return;
        
        let questionText = qTextAndOptions.substring(0, optionMatches[0].index).trim();
        
        let options = [];
        let optionLetters = [];
        
        for (let i = 0; i < optionMatches.length; i++) {
            let start = optionMatches[i].index;
            let end = i + 1 < optionMatches.length ? optionMatches[i+1].index : qTextAndOptions.length;
            let optText = qTextAndOptions.substring(start, end).trim();
            
            let letter = optText.charAt(0);
            let textWithoutLetter = optText.substring(3).trim(); // Bỏ "A. "
            
            options.push(textWithoutLetter);
            optionLetters.push(letter);
        }
        
        // Tìm số lượng đáp án cần chọn
        let selectCount = 1;
        if (questionText.includes('Chọn HAI') || questionText.includes('Chọn hai')) selectCount = 2;
        if (questionText.includes('Chọn BA') || questionText.includes('Chọn ba')) selectCount = 3;
        
        // Xác định đáp án đúng từ answerTextRaw
        let correctIndices = [];
        optionLetters.forEach((letter, idx) => {
            // Kiểm tra xem chuỗi đáp án có chứa "A." hay "và A." hay không
            let regex1 = new RegExp(`^${letter}\\.\\s`);
            let regex2 = new RegExp(`\\s${letter}\\.\\s`);
            let regex3 = new RegExp(`; ${letter}\\.\\s`);
            let regex4 = new RegExp(`và ${letter}\\.\\s`);
            
            if (regex1.test(answerTextRaw) || regex2.test(answerTextRaw) || 
                regex3.test(answerTextRaw) || regex4.test(answerTextRaw) ||
                answerTextRaw.includes(`${letter}. `)) {
                correctIndices.push(idx);
            }
        });
        
        questions.push({
            id: `m${moduleNum}_q${index+1}`,
            question: questionText,
            options: options,
            correctIndices: correctIndices,
            type: selectCount > 1 ? "multiple" : "single",
            selectCount: selectCount
        });
    });
    
    allModules[moduleNum] = {
        title: title,
        questions: questions
    };
});

const output = `// Dữ liệu được sinh tự động từ file markdown
const ALL_MODULES = ${JSON.stringify(allModules, null, 2)};

// Hỗ trợ cả browser và Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALL_MODULES;
}
`;

fs.writeFileSync(path.join(__dirname, 'data.js'), output);
console.log('Successfully generated data.js with ' + Object.keys(allModules).length + ' modules.');
