// State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = new Set(); // to track which questions have been evaluated
let userSelections = {}; // mapping questionIndex -> Set of selected options
let isAnswerRevealed = false;
let currentMode = '';

// DOM Elements
const appDiv = document.getElementById('app');

// Utility to shuffle array
function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Prepare questions (shuffle options and remap correct indices)
function prepareQuestions(questions) {
    return questions.map(q => {
        // create array of object { text, isCorrect }
        let opts = q.options.map((opt, idx) => ({
            text: opt,
            isCorrect: q.correctIndices.includes(idx)
        }));
        // shuffle
        opts = shuffleArray(opts);
        
        return {
            ...q,
            shuffledOptions: opts
        };
    });
}

// Screens
function renderHome() {
    appDiv.innerHTML = `
        <div class="home-screen">
            <h1>AWS Cloud Quiz</h1>
            <p>Luyện thi trắc nghiệm Điện Toán Đám Mây - Tiếng Việt</p>
            <div class="mode-buttons">
                <button class="mode-btn" onclick="renderModuleSelection()">📚 Luyện Theo Module</button>
                <button class="mode-btn" onclick="startTotalQuiz()">🎯 Luyện Tổng Hợp (120 câu)</button>
            </div>
        </div>
    `;
}

function renderModuleSelection() {
    let modulesHtml = '';
    for (let mod in ALL_MODULES) {
        let m = ALL_MODULES[mod];
        modulesHtml += `
            <div class="module-card" onclick="startModuleQuiz(${mod})">
                <h3>Module ${mod}</h3>
                <p>${m.questions.length} câu hỏi</p>
            </div>
        `;
    }
    
    appDiv.innerHTML = `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Chọn Module</h2>
                <button class="btn" onclick="renderHome()">Quay lại</button>
            </div>
            <div class="module-grid">
                ${modulesHtml}
            </div>
        </div>
    `;
}

function startModuleQuiz(moduleNum) {
    let m = ALL_MODULES[moduleNum];
    currentMode = `Module ${moduleNum}`;
    let qs = prepareQuestions(m.questions);
    qs = shuffleArray(qs);
    startQuiz(qs);
}

function startTotalQuiz() {
    currentMode = "Luyện Tổng Hợp";
    let allQs = [];
    for (let mod in ALL_MODULES) {
        allQs = allQs.concat(ALL_MODULES[mod].questions);
    }
    let qs = prepareQuestions(allQs);
    qs = shuffleArray(qs);
    startQuiz(qs);
}

function startQuiz(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = new Set();
    userSelections = {};
    renderQuestion();
}

function handleOptionClick(index) {
    if (isAnswerRevealed) return;
    
    let q = currentQuestions[currentQuestionIndex];
    let selectedOptions = userSelections[currentQuestionIndex];
    if (q.type === 'single') {
        selectedOptions.clear();
        selectedOptions.add(index);
    } else {
        if (selectedOptions.has(index)) {
            selectedOptions.delete(index);
        } else {
            if (selectedOptions.size >= q.selectCount) {
                alert(`Câu này chỉ cho phép chọn tối đa ${q.selectCount} đáp án!`);
            } else {
                selectedOptions.add(index);
            }
        }
    }
    renderQuestion();
}

function revealAnswer() {
    if (isAnswerRevealed) return;
    
    let q = currentQuestions[currentQuestionIndex];
    let selectedOptions = userSelections[currentQuestionIndex];
    
    // Evaluate score
    let isCorrect = false;
    let correctCountInSelection = 0;
    
    selectedOptions.forEach(idx => {
        if (q.shuffledOptions[idx].isCorrect) {
            correctCountInSelection++;
        }
    });
    
    let totalCorrectInQuestion = q.shuffledOptions.filter(o => o.isCorrect).length;
    
    // Rule: must select all correct ones, and no wrong ones
    if (selectedOptions.size === totalCorrectInQuestion && correctCountInSelection === totalCorrectInQuestion) {
        isCorrect = true;
        score++;
    }
    
    answeredQuestions.add(currentQuestionIndex);
    isAnswerRevealed = true;
    renderQuestion();
}

function renderQuestion() {
    isAnswerRevealed = answeredQuestions.has(currentQuestionIndex);
    if (!userSelections[currentQuestionIndex]) {
        userSelections[currentQuestionIndex] = new Set();
    }
    let selectedOptions = userSelections[currentQuestionIndex];
    
    let q = currentQuestions[currentQuestionIndex];
    let total = currentQuestions.length;
    let progress = ((currentQuestionIndex) / total) * 100;
    
    let typeText = q.type === 'single' ? '(Chọn 1 đáp án)' : `(Chọn ${q.selectCount} đáp án)`;
    
    let optionsHtml = q.shuffledOptions.map((opt, idx) => {
        let isSelected = selectedOptions.has(idx);
        let statusClass = '';
        let disabledAttr = isAnswerRevealed ? 'disabled' : '';
        let disabledClass = isAnswerRevealed ? 'disabled' : '';
        
        if (isAnswerRevealed) {
            if (opt.isCorrect) statusClass = 'correct';
            else if (isSelected && !opt.isCorrect) statusClass = 'incorrect';
        }
        
        let inputType = q.type === 'single' ? 'radio' : 'checkbox';
        let checked = isSelected ? 'checked' : '';
        
        return `
            <label class="option ${statusClass} ${disabledClass}">
                <input type="${inputType}" name="q_option" value="${idx}" ${checked} ${disabledAttr} onchange="handleOptionClick(${idx})">
                <span>${opt.text}</span>
            </label>
        `;
    }).join('');
    
    let revealBtn = '';
    if (!isAnswerRevealed) {
        revealBtn = `<button class="btn btn-primary" onclick="revealAnswer()">Xem Đáp Án</button>`;
    } else {
        revealBtn = `<button class="btn" disabled>Đã xem</button>`;
    }
    
    let nextBtn = '';
    if (currentQuestionIndex < total - 1) {
        nextBtn = `<button class="btn" onclick="nextQuestion()">Câu Tiếp Theo →</button>`;
    } else {
        nextBtn = `<button class="btn btn-primary" style="background-color: #4caf50; border-color: #4caf50;" onclick="renderResult()">Xem Kết Quả</button>`;
    }
    
    let prevBtn = currentQuestionIndex > 0 ? `<button class="btn" onclick="prevQuestion()">← Câu Trước</button>` : `<div style="width: 110px;"></div>`;
    
    appDiv.innerHTML = `
        <div>
            <div class="quiz-header">
                <div>
                    <h2>${currentMode}</h2>
                    <div style="font-size: 14px; color: var(--text-secondary); margin-top: 5px;">
                        Câu ${currentQuestionIndex + 1} / ${total}
                    </div>
                </div>
                <div class="score">Điểm: ${score}</div>
            </div>
            
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progress}%"></div>
            </div>
            
            <div class="question-container">
                <div class="question-meta">${typeText}</div>
                <div class="question-text">${q.question}</div>
                <div class="options">
                    ${optionsHtml}
                </div>
            </div>
            
            <div class="quiz-actions" style="display: flex; justify-content: space-between; align-items: center;">
                ${prevBtn}
                ${revealBtn}
                ${nextBtn}
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button class="btn" onclick="confirmExit(this)">Thoát Về Trang Chủ</button>
            </div>
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function renderResult() {
    let total = currentQuestions.length;
    let percentage = Math.round((score / total) * 100);
    
    let remark = "Cần cố gắng thêm";
    if (percentage >= 80) remark = "Xuất sắc!";
    else if (percentage >= 60) remark = "Tốt!";
    
    appDiv.innerHTML = `
        <div class="result-screen">
            <h2>Kết Quả: ${currentMode}</h2>
            <br>
            <div class="score-circle">
                <div class="big">${score}</div>
                <div class="small">/ ${total}</div>
            </div>
            <h3>${percentage}% - ${remark}</h3>
            <br><br>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button class="btn btn-primary" onclick="restartSameQuiz()">Làm Lại</button>
                <button class="btn" onclick="renderHome()">Về Trang Chủ</button>
            </div>
        </div>
    `;
}

function restartSameQuiz() {
    if (currentMode === "Luyện Tổng Hợp") {
        startTotalQuiz();
    } else {
        let modNum = currentMode.split(' ')[1];
        startModuleQuiz(modNum);
    }
}

let exitConfirmTimeout = null;
function confirmExit(btn) {
    if (btn.innerText === "Thoát Về Trang Chủ") {
        btn.innerText = "Chắc chắn thoát? Nhấn lần nữa";
        btn.style.backgroundColor = "var(--incorrect)";
        btn.style.color = "#fff";
        btn.style.borderColor = "var(--incorrect)";
        
        exitConfirmTimeout = setTimeout(() => {
            btn.innerText = "Thoát Về Trang Chủ";
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.style.borderColor = "";
        }, 3000);
    } else {
        clearTimeout(exitConfirmTimeout);
        renderHome();
    }
}

// Init
window.onload = () => {
    renderHome();
};
