// Dữ liệu được sinh tự động từ file markdown
const ALL_MODULES = {
  "2": {
    "title": "Module 2: Giới thiệu Kiến trúc Điện toán Đám mây - AWS",
    "questions": [
      {
        "id": "m2_q1",
        "question": "Định nghĩa nào sau đây mô tả chính xác nhất về kiến trúc đám mây?",
        "options": [
          "Áp dụng các đặc điểm của đám mây vào giải pháp sử dụng các dịch vụ và tính năng đám mây để đáp ứng các yêu cầu kỹ thuật và kinh doanh",
          "Thiết kế ứng dụng trên hạ tầng CNTT dùng chung trên nền đám mây bằng cách sử dụng máy ảo và kho dữ liệu chịu lỗi trong đám mây",
          "Di chuyển các trung tâm dữ liệu truyền thống tại chỗ sang các trung tâm dữ liệu có thể truy cập qua internet do nhà cung cấp quản lý",
          "Kết hợp phần mềm và thành phần frontend và backend để tạo ra các dịch vụ web có tính khả dụng cao và khả năng mở rộng đáp ứng nhu cầu của tổ chức"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q2",
        "question": "Khung Kiến trúc Tốt của AWS (AWS Well-Architected Framework) có sáu trụ cột. Ba trong số đó là bảo mật (security), xuất sắc vận hành (operational excellence) và bền vững (sustainability). Hai trụ cột nào còn lại thuộc Khung Kiến trúc Tốt? (Chọn HAI.)",
        "options": [
          "Tối ưu hóa chi phí (Cost optimization)",
          "Quyền riêng tư (Privacy)",
          "Độ tin cậy (Reliability)",
          "Quản lý rủi ro (Risk management)",
          "Quản trị (Governance)"
        ],
        "correctIndices": [
          0,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m2_q3",
        "question": "Những hành động nào phù hợp với trụ cột xuất sắc vận hành (operational excellence) của Khung Kiến trúc Tốt AWS? (Chọn HAI.)",
        "options": [
          "Lập kế hoạch và quản lý toàn bộ vòng đời của các tài sản phần cứng.",
          "Đảm bảo nhân viên vận hành ghi lại các thay đổi đối với hạ tầng.",
          "Đánh giá cơ cấu tổ chức và vai trò để xác định khoảng cách về kỹ năng.",
          "Xem xét và cải thiện quy trình và thủ tục theo chu kỳ liên tục.",
          "Áp dụng các nguyên tắc và phương pháp kỹ thuật phần mềm vào hạ tầng dưới dạng mã (infrastructure as code)."
        ],
        "correctIndices": [
          3,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m2_q4",
        "question": "Một ứng dụng cụ thể yêu cầu tầng web frontend gồm nhiều máy chủ giao tiếp với tầng ứng dụng backend gồm nhiều máy chủ. Thiết kế nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?",
        "options": [
          "Thiết kế tầng web giao tiếp với tầng ứng dụng thông qua dịch vụ Elastic Load Balancing (ELB).",
          "Tạo mạng lưới đầy đủ (full mesh network) giữa tầng web và tầng ứng dụng, để mỗi máy chủ web có thể giao tiếp trực tiếp với mọi máy chủ ứng dụng.",
          "Tạo nhiều phiên bản (instance) kết hợp cả frontend web và backend ứng dụng trong cùng một instance.",
          "Gán một máy chủ ứng dụng chuyên dụng và một kết nối chuyên dụng cho mỗi máy chủ web."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q5",
        "question": "Một kiến trúc sư giải pháp đang xây dựng quy trình xử lý sự cố máy chủ. Quy trình nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?",
        "options": [
          "Amazon CloudWatch phát hiện sự cố hệ thống. Nó khởi động tự động hóa để cung cấp một máy chủ mới.",
          "Amazon CloudWatch phát hiện sự cố hệ thống. Nó thông báo cho quản trị viên hệ thống, người này sẽ cung cấp máy chủ mới bằng AWS Management Console.",
          "Nhân viên vận hành phát hiện sự cố hệ thống. Họ khởi động tự động hóa để cung cấp một máy chủ mới.",
          "Nhân viên vận hành phát hiện sự cố hệ thống. Họ thông báo cho quản trị viên hệ thống, người này sẽ cung cấp máy chủ mới bằng AWS Management Console."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q6",
        "question": "Một công ty đang cân nhắc chuyển trung tâm dữ liệu tại chỗ lên đám mây. Động lực chính của họ là tăng hiệu quả chi phí. Cách tiếp cận nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?",
        "options": [
          "Cung cấp một số máy chủ trên đám mây và đảm bảo các máy chủ chạy 24/7.",
          "Sao chép lại trung tâm dữ liệu tại chỗ của họ lên đám mây.",
          "Cung cấp các máy chủ khi cần thiết và dừng dịch vụ khi không sử dụng.",
          "Duy trì trung tâm dữ liệu tại chỗ càng lâu càng tốt."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q7",
        "question": "Một công ty lưu trữ dữ liệu chỉ đọc (read-only) trong Amazon S3. Hầu hết người dùng ở cùng quốc gia với trụ sở công ty. Một số người dùng ở khắp nơi trên thế giới. Quyết định thiết kế nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?",
        "options": [
          "Sử dụng bucket ở Region có độ trễ trung bình thấp nhất cho tất cả người dùng.",
          "Sao chép các đối tượng sang các bucket ở các Region AWS trên toàn thế giới. Người dùng truy cập bucket ở Region gần nhất với họ.",
          "Sử dụng bucket ở Region AWS gần trụ sở công ty nhất. Tất cả người dùng truy cập dữ liệu thông qua Amazon CloudFront.",
          "Sử dụng bucket ở Region gần trụ sở công ty nhất."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q8",
        "question": "Một chuyên gia tư vấn cần truy cập một đối tượng lớn trong bucket S3. Họ chỉ cần truy cập file trong một ngày. Phương pháp cấp quyền truy cập nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?",
        "options": [
          "Sao chép đối tượng sang bucket S3 mới. Bật quyền truy cập công khai trên bucket mới. Lấy URL của đối tượng từ bucket mới và cung cấp cho chuyên gia tư vấn.",
          "Tạo tài khoản người dùng cho chuyên gia tư vấn. Cấp quyền truy cập vào bucket S3 qua AWS Management Console.",
          "Tạo URL có chữ ký sẵn (presigned URL) cho đối tượng với thời hạn 24 giờ và cung cấp cho chuyên gia tư vấn.",
          "Bật quyền truy cập công khai trên bucket S3. Cung cấp URL đối tượng cho chuyên gia tư vấn."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m2_q9",
        "question": "Những yếu tố nào là cân nhắc chính ảnh hưởng đến việc lựa chọn AWS Region? (Chọn HAI.)",
        "options": [
          "Khả năng phục hồi ứng dụng trong quá trình xảy ra sự cố hệ thống",
          "Tuân thủ các luật và quy định",
          "Bảo vệ khỏi các thảm họa thiên nhiên cục bộ",
          "Bảo mật và kiểm soát truy cập",
          "Giảm độ trễ cho người dùng cuối"
        ],
        "correctIndices": [
          1,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m2_q10",
        "question": "Những yếu tố nào là cân nhắc chính ảnh hưởng đến việc lựa chọn Vùng sẵn sàng (Availability Zone)? (Chọn HAI.)",
        "options": [
          "Tuân thủ các luật và quy định",
          "Khả năng phục hồi ứng dụng trong quá trình xảy ra sự cố hệ thống",
          "Bảo vệ khỏi các thảm họa thiên nhiên cục bộ",
          "Bảo mật và kiểm soát truy cập",
          "Giảm độ trễ cho người dùng cuối"
        ],
        "correctIndices": [
          1,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      }
    ]
  },
  "3": {
    "title": "Module 3: Bảo mật Quyền Truy cập - AWS",
    "questions": [
      {
        "id": "m3_q1",
        "question": "Phát biểu nào sau đây phản ánh nguyên tắc thiết kế của trụ cột bảo mật (security) trong Khung Kiến trúc Tốt AWS?",
        "options": [
          "Không triển khai giải pháp lên môi trường sản xuất cho đến khi bạn chắc chắn rằng không tồn tại rủi ro bảo mật nào.",
          "Phân cấp quản lý đặc quyền.",
          "Đảm bảo nhân viên chủ động theo dõi các rủi ro tiềm ẩn theo cách thủ công.",
          "Áp dụng bảo mật ở tất cả các tầng của kiến trúc."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q2",
        "question": "Những phát biểu nào về trách nhiệm là chính xác dựa trên mô hình trách nhiệm chung của AWS? (Chọn HAI.)",
        "options": [
          "Khách hàng chịu trách nhiệm quản lý dữ liệu người dùng của họ.",
          "Khách hàng chịu trách nhiệm về việc cài đặt, bảo trì và ngừng sử dụng phần cứng tại trung tâm dữ liệu AWS.",
          "AWS chịu trách nhiệm về bảo mật vật lý của các trung tâm dữ liệu.",
          "AWS chịu trách nhiệm về cấu hình các nhóm bảo mật (security groups).",
          "AWS chịu trách nhiệm về cấu hình tường lửa dựa trên máy chủ (host-based firewall)."
        ],
        "correctIndices": [
          0,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m3_q3",
        "question": "Những tùy chọn nào là đặc điểm của nguyên tắc đặc quyền tối thiểu (principle of least privilege)? (Chọn HAI.)",
        "options": [
          "Xây dựng các chính sách bảo mật giới hạn quyền truy cập vào các tác vụ cụ thể.",
          "Luôn luôn sử dụng nhóm (groups).",
          "Theo dõi các hành động và thay đổi.",
          "Sử dụng mã hóa.",
          "Chỉ cấp quyền truy cập khi thực sự cần thiết."
        ],
        "correctIndices": [
          0,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m3_q4",
        "question": "Phát biểu nào sau đây về AWS Identity and Access Management (IAM) là đúng?",
        "options": [
          "IAM cung cấp nhật ký kiểm tra (audit trail) về ai đã thực hiện hành động, họ thực hiện hành động gì và khi nào.",
          "IAM cung cấp một lớp bảo mật bổ sung bằng cách phát hiện các bất thường trên tài nguyên.",
          "Với IAM, bạn có thể cấp cho các principal quyền truy cập chi tiết vào tài nguyên.",
          "Với IAM, bạn có thể quản lý mã hóa cho các mục yêu cầu mã hóa khi lưu trữ (at rest)."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q5",
        "question": "Những phát biểu nào mô tả đúng về vai trò (roles) trong AWS Identity and Access Management (IAM)? (Chọn HAI.)",
        "options": [
          "Chúng chỉ có thể được sử dụng bởi các tài khoản liên kết với người tạo ra vai trò.",
          "Chúng được liên kết duy nhất với một cá nhân.",
          "Chúng cung cấp thông tin xác thực bảo mật tạm thời.",
          "Chúng cung cấp thông tin xác thực bảo mật vĩnh viễn.",
          "Cá nhân, ứng dụng và dịch vụ đều có thể đảm nhận (assume) các vai trò."
        ],
        "correctIndices": [
          2,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m3_q6",
        "question": "Phát biểu nào phản ánh thực tiễn tốt nhất đối với người dùng root trên tài khoản AWS?",
        "options": [
          "Xóa các quyền không cần thiết khỏi tài khoản người dùng root.",
          "Tạo hai người dùng root với thông tin xác thực riêng biệt và phân phối cho hai cá nhân khác nhau.",
          "Để tránh bị khóa tài khoản, không bật xác thực đa yếu tố (MFA) trên tài khoản root.",
          "Tạo người dùng admin và thực hiện hầu hết các tác vụ quản trị với người dùng này thay vì người dùng root."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q7",
        "question": "AWS Identity and Access Management (IAM) đánh giá chính sách như thế nào?",
        "options": [
          "Nó kiểm tra các câu lệnh cho phép tường minh (explicit allow) trước khi kiểm tra các câu lệnh từ chối tường minh (explicit deny).",
          "Nó kiểm tra các câu lệnh từ chối tường minh trước khi kiểm tra các câu lệnh cho phép tường minh.",
          "Nếu chính sách không có câu lệnh từ chối hoặc cho phép tường minh nào, người dùng có quyền truy cập mặc định.",
          "Câu lệnh từ chối tường minh không ghi đè câu lệnh cho phép tường minh."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q8",
        "question": "Phát biểu nào về chính sách AWS Identity and Access Management (IAM) là chính xác?",
        "options": [
          "Chính sách dựa trên tài nguyên (resource-based policies) được gắn vào người dùng, nhóm hoặc vai trò.",
          "Chính sách dựa trên tài nguyên cho phép truy cập theo mặc định.",
          "Chính sách dựa trên danh tính (identity-based policies) chỉ có thể được gắn vào một thực thể duy nhất.",
          "Chính sách dựa trên danh tính được gắn vào người dùng, nhóm hoặc vai trò."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q9",
        "question": "Phần tử chính sách (policy element) nào trong AWS Identity and Access Management (IAM) chứa thông tin về việc cho phép hay từ chối một yêu cầu?",
        "options": [
          "Effect (Hiệu lực)",
          "Action (Hành động)",
          "Condition (Điều kiện)",
          "Principal (Chủ thể)"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m3_q10",
        "question": "Tùy chọn nào mô tả chính xác phần tử statement (câu lệnh) trong chính sách AWS Identity and Access Management (IAM)?",
        "options": [
          "Một chính sách chỉ có thể có một phần tử statement.",
          "Phần tử statement chứa các phần tử khác cùng nhau xác định những gì được phép hoặc bị từ chối.",
          "Phần tử statement không áp dụng cho các chính sách dựa trên danh tính.",
          "Phần tử statement là phần tùy chọn trong chính sách IAM."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "4": {
    "title": "Module 4: Thêm Tầng Lưu trữ với Amazon S3 - AWS",
    "questions": [
      {
        "id": "m4_q1",
        "question": "Do việc sáp nhập công ty, một kỹ sư dữ liệu cần tăng dung lượng lưu trữ đối tượng. Họ không chắc cần bao nhiêu dung lượng. Họ muốn một dịch vụ có khả năng mở rộng cao có thể lưu trữ dữ liệu phi cấu trúc, bán cấu trúc và có cấu trúc. Dịch vụ nào sau đây sẽ hiệu quả về chi phí nhất để hoàn thành nhiệm vụ này?",
        "options": [
          "Amazon RDS",
          "AWS Storage Gateway",
          "Amazon S3",
          "Amazon Elastic Block Store (Amazon EBS)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q2",
        "question": "Amazon S3 cung cấp giải pháp tốt cho trường hợp sử dụng nào?",
        "options": [
          "Lưu trữ theo giờ các tệp tạm thời được truy cập thường xuyên",
          "Kho dữ liệu (data warehouse) cho business intelligence",
          "Dữ liệu sổ cái được cập nhật và truy cập thường xuyên",
          "Vị trí lưu trữ có thể truy cập qua internet cho các tệp video mà trang web bên ngoài có thể truy cập"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q3",
        "question": "Một công ty muốn sử dụng Amazon S3 để lưu trữ trang web thay vì máy chủ web truyền thống. Những loại nội dung nào Amazon S3 hỗ trợ cho lưu trữ web tĩnh? (Chọn BA.)",
        "options": [
          "Tệp HTML động",
          "Tệp video và âm thanh",
          "Script phía máy khách (client-side scripts)",
          "Script phía máy chủ (server-side scripts)",
          "Tệp HTML và tệp hình ảnh",
          "Công cụ cơ sở dữ liệu"
        ],
        "correctIndices": [
          1,
          2,
          4
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m4_q4",
        "question": "Một công ty muốn sử dụng bucket S3 để lưu trữ dữ liệu nhạy cảm. Những hành động nào có thể bảo vệ dữ liệu của họ? (Chọn HAI.)",
        "options": [
          "Bật mã hóa phía máy chủ (server-side encryption) trên bucket S3 trước khi tải dữ liệu nhạy cảm lên",
          "Bật mã hóa phía máy chủ trên bucket S3 sau khi tải dữ liệu nhạy cảm lên",
          "Tải các tệp chưa mã hóa lên Amazon S3 vì Amazon S3 mã hóa tệp theo mặc định",
          "Sử dụng mã hóa phía máy khách (client-side encryption) để bảo vệ dữ liệu trong quá trình truyền trước khi gửi đến Amazon S3",
          "Sử dụng Giao thức Truyền tệp An toàn (SFTP) để kết nối trực tiếp đến Amazon S3"
        ],
        "correctIndices": [
          0,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m4_q5",
        "question": "Một công ty cần tạo nơi lưu trữ chung cho các tệp dùng chung. Những yêu cầu nào Amazon S3 hỗ trợ? (Chọn HAI.)",
        "options": [
          "Đính kèm bình luận vào tệp.",
          "Khôi phục các tệp đã xóa.",
          "Duy trì các phiên bản khác nhau của tệp.",
          "So sánh nội dung giữa các tệp.",
          "Khóa tệp để chỉ một người có thể chỉnh sửa tại một thời điểm."
        ],
        "correctIndices": [
          1,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m4_q6",
        "question": "Nhóm dịch vụ khách hàng truy cập dữ liệu hồ sơ hàng ngày trong tối đa 30 ngày. Các hồ sơ có thể được mở lại và yêu cầu truy cập ngay lập tức trong 1 năm sau khi đóng. Các hồ sơ được mở lại cần 2 ngày để xử lý. Giải pháp nào đáp ứng yêu cầu và tiết kiệm chi phí nhất?",
        "options": [
          "Lưu dữ liệu hồ sơ trong S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang S3 Standard-Infrequent Access (S3 Standard-IA) sau 30 ngày.",
          "Lưu dữ liệu hồ sơ trong S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang Amazon S3 Glacier Flexible Retrieval sau 30 ngày.",
          "Lưu tất cả dữ liệu hồ sơ trong S3 Standard để luôn sẵn sàng truy cập khi cần.",
          "Lưu dữ liệu hồ sơ trong S3 Intelligent-Tiering để tự động chuyển dữ liệu giữa các tầng dựa trên tần suất truy cập."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q7",
        "question": "Tùy chọn nào tận dụng các edge location trong Amazon CloudFront để truyền tệp qua khoảng cách dài đến bucket S3?",
        "options": [
          "AWS Transfer Family",
          "Amazon S3 REST API",
          "Amazon S3 Transfer Acceleration",
          "AWS SDKs"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q8",
        "question": "Một nhà sản xuất video thường xuyên cần truyền nhiều tệp video lên Amazon S3. Các tệp có dung lượng từ 100–700 MB. Kết nối internet không ổn định, khiến một số lần tải lên thất bại. Giải pháp nào cung cấp cách nhanh nhất, đáng tin cậy nhất và tiết kiệm chi phí nhất để truyền các tệp này lên Amazon S3?",
        "options": [
          "AWS Transfer Family",
          "Amazon S3 Transfer Acceleration",
          "AWS Management Console",
          "Amazon S3 multipart uploads (Tải lên nhiều phần)"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q9",
        "question": "Lớp lưu trữ Amazon S3 nào được thiết kế cho các bản sao lưu dữ liệu tại chỗ hoặc dữ liệu có thể dễ dàng tạo lại?",
        "options": [
          "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
          "S3 Glacier Instant Retrieval",
          "S3 Intelligent-Tiering",
          "S3 Standard-Infrequent Access (S3 Standard-IA)"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m4_q10",
        "question": "Một công ty cần lưu giữ hồ sơ cho mục đích pháp lý trong 7 năm. Các hồ sơ này hiếm khi được truy cập (một hoặc hai lần mỗi năm). Lớp lưu trữ Amazon S3 nào có chi phí thấp nhất?",
        "options": [
          "S3 Glacier Deep Archive",
          "S3 Intelligent-Tiering",
          "S3 Standard-Infrequent Access (S3 Standard-IA)",
          "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "5": {
    "title": "Module 5: Thêm Tầng Tính toán với Amazon EC2 - AWS",
    "questions": [
      {
        "id": "m5_q1",
        "question": "Những thuộc tính nào là lý do để chọn Amazon EC2? (Chọn HAI.)",
        "options": [
          "AWS quản lý các bản vá hệ điều hành (OS)",
          "AWS quản lý bảo mật hệ điều hành (OS)",
          "Khả năng chạy các ứng dụng serverless",
          "Khả năng chạy bất kỳ loại khối lượng công việc nào",
          "Toàn quyền kiểm soát tài nguyên tính toán"
        ],
        "correctIndices": [
          3,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m5_q2",
        "question": "Những lợi ích nào của việc sử dụng Amazon Machine Image (AMI)? (Chọn BA.)",
        "options": [
          "Tự động hóa cài đặt nhóm bảo mật (security group) cho các instance",
          "Sử dụng AMI làm bản sao lưu máy chủ cho các Amazon EC2 instance",
          "Khởi chạy các instance với cùng cấu hình",
          "Bán hoặc chia sẻ các giải pháp phần mềm được đóng gói dưới dạng AMI",
          "Di chuyển dữ liệu từ môi trường tại chỗ sang các Amazon EC2 instance",
          "Cập nhật hệ thống bằng cách vá AMI của chúng"
        ],
        "correctIndices": [
          1,
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m5_q3",
        "question": "Một quản trị viên hệ thống phải thay đổi loại instance của nhiều Amazon EC2 instance đang chạy. Các instance được khởi chạy với hỗn hợp Amazon Machine Image (AMI) được hỗ trợ bởi Amazon Elastic Block Store (Amazon EBS) và AMI được hỗ trợ bởi instance store. Phương pháp nào là cách hợp lệ để thay đổi loại instance?",
        "options": [
          "Dừng instance được hỗ trợ bởi instance store, thay đổi loại instance và khởi động lại instance.",
          "Thay đổi loại instance của instance được hỗ trợ bởi Amazon EBS mà không cần dừng nó.",
          "Dừng instance được hỗ trợ bởi Amazon EBS, thay đổi loại instance và khởi động lại instance.",
          "Thay đổi loại instance của instance được hỗ trợ bởi instance store mà không cần dừng nó."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m5_q4",
        "question": "Một khối lượng công việc yêu cầu truy cập đọc/ghi cao đối với các tập dữ liệu cục bộ lớn. Loại instance nào sẽ hoạt động TỐT NHẤT cho khối lượng công việc này? (Chọn HAI.)",
        "options": [
          "Tối ưu hóa tính toán (Compute optimized)",
          "Mục đích chung (General purpose)",
          "Tối ưu hóa bộ nhớ (Memory optimized)",
          "Tính toán tăng tốc (Accelerated computing)",
          "Tối ưu hóa lưu trữ (Storage optimized)"
        ],
        "correctIndices": [
          2,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m5_q5",
        "question": "Một ứng dụng yêu cầu địa chỉ kiểm soát truy cập phương tiện (MAC) của Amazon EC2 instance máy chủ. Kiến trúc sử dụng nhóm AWS Auto Scaling để khởi chạy và chấm dứt các instance một cách linh hoạt. Cách TỐT NHẤT để ứng dụng lấy địa chỉ MAC là gì?",
        "options": [
          "Đưa địa chỉ MAC vào AMI tùy chỉnh cho mỗi instance trong nhóm AWS Auto Scaling.",
          "Sử dụng dữ liệu người dùng (user data) của mỗi instance để truy cập địa chỉ MAC thông qua metadata của instance.",
          "Ghi địa chỉ MAC vào tệp cấu hình ứng dụng của mỗi instance.",
          "Đưa địa chỉ MAC vào Amazon Machine Image (AMI) được sử dụng để khởi chạy tất cả các instance trong nhóm AWS Auto Scaling."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m5_q6",
        "question": "Những phát biểu nào về dữ liệu người dùng (user data) là đúng? (Chọn HAI.)",
        "options": [
          "Dữ liệu người dùng không thể chạy khi instance đang dừng.",
          "Kiến trúc sư đám mây phải chạy lệnh /var/lib/cloud/instance/scripts/part-001 để script dữ liệu người dùng chạy lại.",
          "Kiến trúc sư đám mây phải xóa tệp config_user_scripts để chạy lại các script dữ liệu người dùng.",
          "Theo mặc định, dữ liệu người dùng chỉ chạy một lần khi instance được khởi chạy.",
          "Theo mặc định, dữ liệu người dùng chạy sau mỗi lần khởi động lại instance."
        ],
        "correctIndices": [
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m5_q7",
        "question": "Một khối lượng công việc giao dịch trên Amazon EC2 instance thực hiện nhiều thao tác đọc và ghi thường xuyên. Loại ổ đĩa Amazon Elastic Block Store (Amazon EBS) nào là TỐT NHẤT cho khối lượng công việc này?",
        "options": [
          "Ổ đĩa cứng tối ưu hóa thông lượng (Throughput Optimized HDD)",
          "Ổ đĩa thể rắn IOPS được cấp phát sẵn (Provisioned IOPS SSD)",
          "Ổ đĩa thể rắn mục đích chung (General Purpose SSD)",
          "Ổ đĩa cứng lạnh (Cold HDD)"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m5_q8",
        "question": "Có thể tạo chia sẻ NFS trên instance Linux được hỗ trợ bởi Amazon Elastic Block Store (Amazon EBS) bằng cách cài đặt và cấu hình máy chủ NFS trên instance. Theo cách này, nhiều hệ thống Linux có thể chia sẻ hệ thống tệp của instance đó. Amazon Elastic File System (Amazon EFS) cung cấp những ưu điểm nào so với giải pháp này? (Chọn HAI.)",
        "options": [
          "Tính sẵn sàng cao (High availability)",
          "Không cần sao lưu",
          "Khóa tệp (File locking)",
          "Tự động mở rộng (Automatic scaling)",
          "Tính nhất quán mạnh (Strong consistency)"
        ],
        "correctIndices": [
          0,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m5_q9",
        "question": "Amazon FSx for Windows File Server cung cấp tính năng nào?",
        "options": [
          "Giải pháp sao lưu cho máy chủ tệp Windows tại chỗ",
          "Tác nhân quản lý Amazon cho máy chủ tệp Windows",
          "Máy chủ Microsoft Active Directory cho máy chủ tệp Windows",
          "Máy chủ tệp Windows được quản lý hoàn toàn"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m5_q10",
        "question": "Những mô tả nào về các tùy chọn định giá Amazon EC2 là đúng? (Chọn HAI.)",
        "options": [
          "Savings Plans là công cụ lập ngân sách giúp khách hàng quản lý chi phí Amazon EC2.",
          "Dedicated Hosts là các máy chủ được dành riêng cho một mục đích, chẳng hạn như tường lửa.",
          "Reserved Instances là các máy chủ vật lý được dành riêng cho khách hàng sử dụng độc quyền.",
          "Với On-Demand Instances, khách hàng có thể trả tiền cho dung lượng tính toán theo thời gian sử dụng mà không cần cam kết dài hạn.",
          "Spot Instances cung cấp dung lượng tính toán dự phòng với giá chiết khấu và có thể bị gián đoạn."
        ],
        "correctIndices": [
          3,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      }
    ]
  },
  "6": {
    "title": "Module 6: Thêm Tầng Cơ sở Dữ liệu - AWS",
    "questions": [
      {
        "id": "m6_q1",
        "question": "Phát biểu nào so sánh dịch vụ cơ sở dữ liệu do AWS quản lý với cơ sở dữ liệu trên Amazon EC2 instance là đúng?",
        "options": [
          "AWS quản lý các bản vá cơ sở dữ liệu cho cơ sở dữ liệu trên dịch vụ cơ sở dữ liệu được quản lý.",
          "AWS quản lý các bản vá hệ điều hành (OS) cho cơ sở dữ liệu trên EC2 instance.",
          "Không cần cấu hình sao lưu cho cơ sở dữ liệu trên EC2 instance.",
          "Không cần cấu hình sao lưu cho cơ sở dữ liệu trên dịch vụ cơ sở dữ liệu được quản lý."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m6_q2",
        "question": "Một công ty khởi nghiệp nhỏ đang quyết định dịch vụ cơ sở dữ liệu nào sẽ sử dụng cho hệ thống đăng ký của trang web đào tạo trực tuyến. Những yêu cầu nào có thể khiến họ chọn Amazon RDS thay vì Amazon DynamoDB? (Chọn HAI.)",
        "options": [
          "Hệ thống đăng ký phải có tính sẵn sàng cao.",
          "Dữ liệu phải được sao lưu trong trường hợp xảy ra thảm họa.",
          "Dữ liệu học viên, khóa học và đăng ký được lưu trữ trong nhiều bảng khác nhau.",
          "Dữ liệu có cấu trúc rõ ràng.",
          "Dữ liệu và giao dịch phải được mã hóa để bảo vệ thông tin cá nhân."
        ],
        "correctIndices": [
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m6_q3",
        "question": "Một công ty khởi nghiệp đang xây dựng hệ thống quản lý đơn hàng với giao diện web và đang tìm kiếm cơ sở dữ liệu giao dịch thời gian thực. Dịch vụ nào đáp ứng tốt nhất nhu cầu của họ?",
        "options": [
          "Amazon DocumentDB (tương thích với MongoDB)",
          "Amazon Redshift",
          "Amazon DynamoDB",
          "Amazon Neptune"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m6_q4",
        "question": "Một công ty game nhỏ đang thiết kế trò chơi trực tuyến, nơi hàng nghìn người chơi có thể tạo các vật phẩm trong game. Thiết kế hiện tại sử dụng cơ sở dữ liệu MySQL trong Amazon RDS để lưu trữ dữ liệu cho các vật phẩm do người chơi tạo ra. Những tính năng vật phẩm trò chơi trực tuyến nào được đề xuất có thể khiến Amazon DynamoDB trở thành giải pháp tốt hơn? (Chọn HAI.)",
        "options": [
          "Các vật phẩm game có thể được sửa đổi bằng dữ liệu chứa trong các bảng khác",
          "Lượng đọc cao đối với các vật phẩm do người chơi tạo ra và lượng ghi thấp",
          "Các thuộc tính vật phẩm không thể đoán trước cho các vật phẩm do người chơi tạo ra",
          "Một tập hợp các thuộc tính vật phẩm chung cho các vật phẩm do người chơi tạo ra",
          "Các mục dữ liệu game bao gồm dữ liệu nhị phân và có thể vượt quá 700 MB"
        ],
        "correctIndices": [
          1,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m6_q5",
        "question": "Một tổ chức lo ngại về sự gia tăng gian lận. Dịch vụ nào có thể giúp xây dựng các truy vấn cơ sở dữ liệu đồ thị (graph database) thời gian thực để phát hiện gian lận?",
        "options": [
          "Amazon Redshift",
          "Amazon RDS",
          "Amazon Neptune",
          "Amazon DynamoDB"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m6_q6",
        "question": "Một kỹ sư dữ liệu phải lưu trữ cơ sở dữ liệu Microsoft SQL Server mới trên AWS cho một dự án. Dịch vụ nào có thể giúp họ hoàn thành nhiệm vụ này?",
        "options": [
          "Amazon DocumentDB (tương thích với MongoDB)",
          "Amazon Aurora",
          "Amazon DynamoDB",
          "Amazon Neptune"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m6_q7",
        "question": "Những kỹ thuật nào nên được sử dụng để bảo mật cơ sở dữ liệu Amazon RDS? (Chọn BA.)",
        "options": [
          "Cổng riêng ảo (Virtual private gateway - VGW) để lọc lưu lượng từ các mạng bị hạn chế",
          "Điểm cuối gateway Amazon Virtual Private Cloud (Amazon VPC) để ngăn lưu lượng đi qua internet",
          "Đám mây riêng ảo (VPC) để cung cấp cách ly instance",
          "Nhóm bảo mật (Security groups) để kiểm soát truy cập mạng vào từng RDS instance",
          "Mã hóa cả khi lưu trữ (at rest) và trong quá trình truyền (in transit) để bảo vệ dữ liệu nhạy cảm",
          "Chính sách AWS Identity and Access Management (IAM) để xác định quyền truy cập ở cấp độ bảng, hàng và cột"
        ],
        "correctIndices": [
          2,
          3,
          4
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m6_q8",
        "question": "Những kỹ thuật nào nên được sử dụng để bảo mật Amazon DynamoDB? (Chọn BA.)",
        "options": [
          "Mã hóa để bảo vệ dữ liệu nhạy cảm",
          "Nhóm bảo mật (Security groups) để kiểm soát truy cập mạng vào từng instance",
          "Điểm cuối gateway Amazon Virtual Private Cloud (Amazon VPC) để ngăn lưu lượng đi qua internet",
          "Chính sách AWS Identity and Access Management (IAM) để xác định quyền truy cập ở cấp độ bảng, mục hoặc thuộc tính",
          "Đám mây riêng ảo (VPC) để cung cấp cách ly instance và bảo vệ tường lửa",
          "Cổng riêng ảo (VGW) để lọc lưu lượng từ các mạng bị hạn chế"
        ],
        "correctIndices": [
          0,
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m6_q9",
        "question": "Một công ty muốn di chuyển cơ sở dữ liệu Oracle tại chỗ sang Amazon Aurora MySQL. Quy trình nào mô tả các bước cấp cao chính xác nhất?",
        "options": [
          "Sử dụng AWS Schema Conversion Tool (AWS SCT) để chuyển đổi schema, sau đó sử dụng AWS Database Migration Service (AWS DMS) để di chuyển dữ liệu.",
          "Sử dụng AWS Schema Conversion Tool (AWS SCT) để đồng thời chuyển đổi schema và di chuyển dữ liệu.",
          "Sử dụng AWS Database Migration Service (AWS DMS) để di chuyển trực tiếp từ cơ sở dữ liệu Oracle sang Amazon Aurora MySQL.",
          "Sử dụng AWS Database Migration Service (AWS DMS) để di chuyển dữ liệu, sau đó sử dụng AWS Schema Conversion Tool (AWS SCT) để chuyển đổi schema."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m6_q10",
        "question": "Một kiến trúc sư đám mây đang thiết lập ứng dụng sử dụng Amazon RDS MySQL DB instance. Cơ sở dữ liệu phải được kiến trúc để có tính sẵn sàng cao trên nhiều Vùng sẵn sàng (Availability Zone) và các AWS Region với thời gian ngừng hoạt động tối thiểu. Họ nên đáp ứng yêu cầu này như thế nào?",
        "options": [
          "Thiết lập RDS MySQL Single-AZ DB instance. Sao chép các snapshot tự động sang ít nhất một Region khác.",
          "Thiết lập RDS MySQL Single-AZ DB instance. Cấu hình read replica ở một Region khác.",
          "Thiết lập RDS MySQL Multi-AZ DB instance. Cấu hình cửa sổ sao lưu phù hợp.",
          "Thiết lập RDS MySQL Multi-AZ DB instance. Cấu hình read replica ở một Region khác."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "7": {
    "title": "Module 7: Tạo Môi trường Mạng - AWS",
    "questions": [
      {
        "id": "m7_q1",
        "question": "Định nghĩa nào mô tả đúng về đám mây riêng ảo (Virtual Private Cloud - VPC)?",
        "options": [
          "Một mạng riêng ảo (VPN) trong AWS Cloud",
          "Một mạng ảo được cách ly về mặt logic mà bạn định nghĩa trong AWS Cloud",
          "Một dịch vụ được quản lý hoàn toàn mở rộng AWS Cloud đến cơ sở của khách hàng",
          "Một phần mở rộng của mạng tại chỗ vào AWS"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q2",
        "question": "Thành phần nào sau đây không có quyền truy cập trực tiếp vào internet?",
        "options": [
          "EC2 instance bên trong subnet riêng tư (private subnet)",
          "Cổng dịch địa chỉ mạng (NAT gateway) bên trong subnet công khai (public subnet)",
          "Giao diện địa chỉ IP đàn hồi (Elastic IP address)",
          "EC2 instance bên trong subnet công khai"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q3",
        "question": "VPC của một công ty có khối CIDR (Classless Inter-Domain Routing) là 172.16.0.0/21 (2048 địa chỉ). VPC có hai subnet (A và B). Mỗi subnet phải hỗ trợ 100 địa chỉ có thể sử dụng hiện tại, nhưng con số này dự kiến sẽ tăng lên tối đa 254 địa chỉ có thể sử dụng trong thời gian tới. Sơ đồ địa chỉ subnet nào đáp ứng các yêu cầu và tuân theo thực tiễn tốt nhất của AWS?",
        "options": [
          "Subnet A: 172.16.0.0/25 (128 địa chỉ) — Subnet B: 172.16.0.128/25 (128 địa chỉ)",
          "Subnet A: 172.16.0.0/22 (1024 địa chỉ) — Subnet B: 172.16.4.0/22 (1024 địa chỉ)",
          "Subnet A: 172.16.0.0/23 (512 địa chỉ) — Subnet B: 172.16.2.0/23 (512 địa chỉ)",
          "Subnet A: 172.16.0.0/24 (256 địa chỉ) — Subnet B: 172.16.1.0/24 (256 địa chỉ)"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q4",
        "question": "Một số EC2 instance được khởi chạy trong VPC có quyền truy cập internet. Các instance này không nên có thể truy cập được từ internet, nhưng phải có khả năng tải xuống các bản cập nhật từ internet. Các instance nên được khởi chạy như thế nào?",
        "options": [
          "Với địa chỉ IP công khai, trong subnet có tuyến mặc định đến internet gateway",
          "Không có địa chỉ IP công khai, trong subnet có tuyến mặc định đến internet gateway",
          "Với địa chỉ IP đàn hồi (Elastic IP), trong subnet có tuyến mặc định đến internet gateway",
          "Không có địa chỉ IP công khai, trong subnet có tuyến mặc định đến cổng dịch địa chỉ mạng (NAT gateway)"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q5",
        "question": "Một nhóm chuyên gia tư vấn cần truy cập EC2 instance từ internet trong 3 ngày liên tiếp mỗi tuần. Instance bị tắt vào những thời điểm còn lại trong tuần. VPC có quyền truy cập internet. Bạn nên gán một địa chỉ IPv4 cho instance như thế nào để cấp quyền truy cập cho các chuyên gia tư vấn?",
        "options": [
          "Liên kết một địa chỉ IP đàn hồi (Elastic IP address) với EC2 instance.",
          "Bật tự động gán địa chỉ cho EC2 instance.",
          "Gán địa chỉ IP trong cấu hình khởi động hệ điều hành (OS).",
          "Bật tự động gán địa chỉ cho subnet."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q6",
        "question": "Một ứng dụng sử dụng máy chủ bastion để cho phép truy cập vào các EC2 instance trong subnet riêng tư bên trong VPC. Những cấu hình nhóm bảo mật (security group) nào cho phép truy cập SSH từ địa chỉ IP nguồn đến các EC2 instance? (Chọn HAI.)",
        "options": [
          "Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để cho phép lưu lượng trên cổng 22 từ địa chỉ IP nguồn của bạn.",
          "Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để từ chối tất cả lưu lượng từ internet.",
          "Thêm quy tắc vào nhóm bảo mật của EC2 instance để cho phép lưu lượng từ nhóm bảo mật của máy chủ bastion trên cổng 22.",
          "Thêm quy tắc vào nhóm bảo mật của EC2 instance trong subnet riêng tư để cho phép lưu lượng trả về đến nhóm bảo mật của máy chủ bastion.",
          "Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để cho phép lưu lượng trả về đến địa chỉ IP nguồn của bạn."
        ],
        "correctIndices": [
          0,
          2
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m7_q7",
        "question": "Một giải pháp được triển khai trong VPC cần một subnet có quyền truy cập hạn chế đến các địa chỉ internet cụ thể. Kiến trúc sư có thể cấu hình mạng như thế nào để hạn chế lưu lượng đến và đi từ các EC2 instance trong subnet bằng danh sách kiểm soát truy cập mạng (network ACL)?",
        "options": [
          "Thêm các quy tắc vào ACL mạng tùy chỉnh của subnet để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép. Từ chối tất cả lưu lượng khác.",
          "Thêm các quy tắc vào ACL mạng tùy chỉnh của subnet để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép.",
          "Thêm các quy tắc vào ACL mạng mặc định để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép.",
          "Thêm các quy tắc vào ACL mạng mặc định để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép. Từ chối tất cả lưu lượng khác."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m7_q8",
        "question": "Những hành động nào là thực tiễn tốt nhất khi thiết kế VPC? (Chọn BA.)",
        "options": [
          "Sử dụng cùng khối CIDR với mạng tại chỗ của bạn.",
          "Sử dụng cùng khối CIDR cho các subnet ở các Vùng sẵn sàng khác nhau thuộc cùng một nhóm AWS Auto Scaling.",
          "Tạo một subnet cho mỗi Vùng sẵn sàng cho từng nhóm máy chủ có yêu cầu định tuyến riêng.",
          "Khớp kích thước khối CIDR của VPC với số lượng máy chủ cần thiết cho khối lượng công việc.",
          "Chia đều dải địa chỉ mạng VPC trên tất cả các Vùng sẵn sàng hiện có.",
          "Dự trữ một số không gian địa chỉ để sử dụng trong tương lai."
        ],
        "correctIndices": [
          2,
          4,
          5
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m7_q9",
        "question": "VPC flow logs có thể được gửi đến những đâu? (Chọn BA.)",
        "options": [
          "Amazon Athena",
          "Amazon Kinesis Data Firehose",
          "Amazon OpenSearch Service",
          "AWS Management Console",
          "Amazon S3 bucket",
          "Amazon CloudWatch"
        ],
        "correctIndices": [
          1,
          4,
          5
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m7_q10",
        "question": "Một EC2 instance phải kết nối đến một Amazon S3 bucket. Thành phần nào cung cấp kết nối này mà không tốn thêm chi phí và không có giới hạn băng thông gói tin?",
        "options": [
          "Điểm truy cập vùng công khai (Public region access point)",
          "Điểm cuối gateway VPC (Gateway VPC endpoint)",
          "Điểm cuối giao diện VPC (Interface VPC endpoint)",
          "Điểm cuối Gateway Load Balancer (Gateway Load Balancer endpoint)"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "8": {
    "title": "Module 8: Kết nối các Mạng - AWS",
    "questions": [
      {
        "id": "m8_q1",
        "question": "Cách đơn giản nhất để kết nối 100 đám mây riêng ảo (VPC) với nhau là gì?",
        "options": [
          "Kết nối các VPC với AWS Transit Gateway.",
          "Kết nối từng VPC với tất cả các VPC khác bằng VPC peering.",
          "Kết nối chuỗi các VPC với nhau bằng VPC peering.",
          "Tạo mạng hub-and-spoke bằng AWS VPN CloudHub."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q2",
        "question": "Một công ty cần lưu lượng mạng chạy giữa tài khoản AWS ở một Region sang tài khoản khác ở một Region khác. Họ nên thiết lập gì giữa các transit gateway ở mỗi Region?",
        "options": [
          "AWS Direct Connect",
          "Kết nối peering transit gateway (Transit gateway peering attachment)",
          "AWS PrivateLink",
          "AWS Site-to-Site VPN"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q3",
        "question": "Một công ty có hai VPC. VPC A có khối CIDR là 10.1.0.0/16. VPC B có khối CIDR là 10.2.0.0/16. Cả hai VPC đều thuộc cùng tài khoản AWS. Cách đơn giản nhất để kết nối hai VPC để chúng có thể định tuyến tất cả lưu lượng giữa chúng là gì?",
        "options": [
          "VPC peering",
          "VPC endpoints",
          "AWS Site-to-Site VPN",
          "AWS Direct Connect"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q4",
        "question": "Các hệ thống trong subnet bảo mật của VPC phải truy cập bucket trong Amazon S3. Những giải pháp nào ngăn lưu lượng đi qua internet? (Chọn HAI.)",
        "options": [
          "Tạo VPC gateway endpoint cho Amazon S3.",
          "Sử dụng VPC interface endpoints.",
          "Sử dụng địa chỉ IP riêng tư cho hệ thống.",
          "Sử dụng địa chỉ IP riêng tư của Amazon S3.",
          "Tạo kết nối VPC peering đến Amazon S3."
        ],
        "correctIndices": [
          0,
          1
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m8_q5",
        "question": "Một công ty có ba VPC. VPC A, B và C có các khối CIDR không chồng lấp nhau. Cả A và C đều có kết nối VPC peering riêng biệt với B. Tuy nhiên, A không thể giao tiếp với C. Cách đơn giản và tiết kiệm chi phí nhất để cho phép giao tiếp đầy đủ giữa A và C là gì?",
        "options": [
          "Thêm các tuyến vào B để cho phép lưu lượng giữa A và C đi qua B.",
          "Thêm kết nối peering giữa A và C, và định tuyến lưu lượng giữa A và C qua kết nối peering đó.",
          "Tạo VPC endpoints trong A và C cho các máy chủ riêng lẻ cần giao tiếp với nhau.",
          "Liên kết cả ba VPC thông qua transit VPC và định tuyến tất cả lưu lượng qua transit VPC."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q6",
        "question": "Do một thảm họa thiên nhiên, một công ty đã chuyển trung tâm dữ liệu phụ đến một cơ sở tạm thời có kết nối internet. Họ cần kết nối bảo mật đến VPC của công ty và kết nối phải hoạt động sớm nhất có thể. Trung tâm dữ liệu sẽ di chuyển lại sau 2 tuần. Tùy chọn nào đáp ứng các yêu cầu?",
        "options": [
          "AWS Direct Connect",
          "VPC endpoints",
          "AWS Site-to-Site VPN",
          "VPC peering"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q7",
        "question": "Một công ty lo ngại về sự gián đoạn internet. Họ muốn định tuyến lưu lượng hiệu quả từ mạng tại chỗ đến edge location AWS gần thiết bị customer gateway của họ nhất. Họ nên sử dụng gì?",
        "options": [
          "AWS Transit Gateway",
          "AWS VPN CloudHub",
          "AWS Direct Connect",
          "AWS Global Accelerator"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q8",
        "question": "Một công ty đang triển khai hệ thống sao lưu các hệ thống tại chỗ lên AWS. Phương pháp kết nối mạng nào cung cấp giải pháp với hiệu suất ổn định nhất?",
        "options": [
          "Kết nối ngang hàng VPC (VPC peering)",
          "Điểm cuối VPC (VPC endpoints)",
          "AWS Site-to-Site VPN",
          "AWS Direct Connect"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q9",
        "question": "Một công ty sử dụng kết nối AWS Direct Connect đơn lẻ giữa mạng tại chỗ và VPC của họ. Họ muốn đảm bảo kết nối mạng có tính sẵn sàng cao bằng cách thêm kết nối dự phòng. Phương pháp kết nối mạng nào cung cấp giải pháp tiết kiệm chi phí nhất cho kết nối dự phòng?",
        "options": [
          "Kết nối AWS Client VPN theo yêu cầu qua internet",
          "Kết nối AWS Direct Connect khác qua cùng vị trí Direct Connect",
          "Kết nối AWS Site-to-Site VPN theo yêu cầu qua internet",
          "Kết nối AWS Direct Connect khác qua vị trí Direct Connect khác"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m8_q10",
        "question": "Một công ty đang kết nối VPC với nhiều trung tâm dữ liệu tại chỗ bằng mạng riêng ảo (VPN). Triển khai nào đảm bảo khả năng phục hồi và yêu cầu băng thông có thể dự đoán được?",
        "options": [
          "Triển khai Direct Connect làm kết nối chính và sử dụng VPN làm kết nối dự phòng thứ cấp từ mỗi trung tâm dữ liệu.",
          "Triển khai AWS Transit Gateway để kết nối với từng trung tâm dữ liệu tại chỗ.",
          "Thiết lập nhiều phiên Border Gateway Protocol (BGP) cho mỗi VPC để tạo kết nối đến nhiều VPC trên nhiều AWS Region.",
          "Sử dụng cấu trúc liên kết many-to-many mesh như Amazon VPC peering."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "9": {
    "title": "Module 9: Bảo mật Quyền Truy cập của Người dùng, Ứng dụng và Dữ liệu - AWS",
    "questions": [
      {
        "id": "m9_q1",
        "question": "Những đặc điểm nào là của nhóm (group) trong AWS Identity and Access Management (IAM)? (Chọn HAI.)",
        "options": [
          "Quyền trong chính sách nhóm luôn ghi đè quyền trong chính sách người dùng.",
          "Một người dùng có thể thuộc nhiều nhóm.",
          "Một nhóm có thể thuộc nhóm khác.",
          "Một nhóm có thể có thông tin xác thực bảo mật.",
          "Người dùng mới được thêm vào nhóm sẽ kế thừa các quyền của nhóm."
        ],
        "correctIndices": [
          1,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m9_q2",
        "question": "Ưu điểm của việc sử dụng kiểm soát truy cập dựa trên thuộc tính (ABAC) so với kiểm soát truy cập dựa trên vai trò (RBAC) là gì?",
        "options": [
          "ABAC có thể sẽ yêu cầu ít chính sách hơn RBAC.",
          "ABAC yêu cầu kiểm tra ít hơn RBAC.",
          "Quyền ABAC xác định rõ ràng các tài nguyên mà chúng bảo vệ.",
          "Quyền ABAC bảo mật hơn quyền RBAC."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q3",
        "question": "Một nhà phát triển là thành viên của nhóm AWS Identity and Access Management (IAM) có chính sách nhóm được đính kèm. Chính sách nhóm cho phép truy cập Amazon S3 và Amazon EC2, đồng thời từ chối truy cập Amazon Elastic Container Service (Amazon ECS). Nhà phát triển cũng có chính sách người dùng cho phép truy cập Amazon ECS và Amazon CloudFront. Tùy chọn nào mô tả quyền truy cập của người dùng?",
        "options": [
          "Truy cập Amazon S3, Amazon EC2, Amazon ECS và Amazon CloudFront",
          "Truy cập Amazon ECS và Amazon CloudFront, nhưng không có quyền truy cập Amazon S3 và Amazon EC2",
          "Truy cập Amazon S3 và Amazon EC2, nhưng không có quyền truy cập Amazon ECS và Amazon CloudFront",
          "Truy cập Amazon S3, Amazon EC2 và Amazon CloudFront, nhưng không có quyền truy cập Amazon ECS"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q4",
        "question": "Lợi ích của liên kết danh tính (identity federation) với AWS Cloud là gì?",
        "options": [
          "Cho phép sử dụng nhà cung cấp danh tính bên ngoài để xác thực người dùng lực lượng lao động và cấp cho họ quyền truy cập vào các tài nguyên AWS.",
          "Tập trung lưu trữ và quản lý danh tính người dùng bên trong AWS Cloud.",
          "Loại bỏ nhu cầu xác định quyền trong AWS Identity and Access Management (IAM) để bảo mật quyền truy cập vào các tài nguyên AWS.",
          "Gán vai trò cho người dùng đã được xác thực để kiểm soát quyền truy cập của họ vào các tài nguyên AWS."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q5",
        "question": "Dịch vụ nào cho phép liên kết danh tính để truy cập ứng dụng web chạy trong AWS Cloud?",
        "options": [
          "AWS Key Management Service (AWS KMS)",
          "AWS CloudHSM",
          "Amazon Cognito",
          "AWS WAF"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q6",
        "question": "Dịch vụ nào giúp quản lý tập trung việc thanh toán, kiểm soát truy cập, tuân thủ và bảo mật, đồng thời chia sẻ tài nguyên trên nhiều tài khoản AWS?",
        "options": [
          "AWS Systems Manager",
          "AWS Identity and Access Management (IAM)",
          "AWS Organizations",
          "Amazon Cognito"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q7",
        "question": "Một công ty công nghệ có nhiều tài khoản sản xuất được nhóm vào một đơn vị tổ chức (OU) sản xuất trong AWS Organizations. Công ty muốn ngăn tất cả người dùng IAM trong các tài khoản sản xuất xóa nhật ký AWS CloudTrail. Quản trị viên hệ thống có thể thực thi hạn chế này như thế nào?",
        "options": [
          "Tạo chính sách bucket Amazon S3 và liên kết với tất cả các bucket chứa nhật ký AWS CloudTrail.",
          "Tạo chính sách thẻ (tag policy) và đính kèm vào các tài khoản sản xuất.",
          "Tạo chính sách kiểm soát dịch vụ (SCP) và đính kèm vào OU sản xuất.",
          "Tạo chính sách IAM và đính kèm vào từng người dùng IAM trong các tài khoản sản xuất."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q8",
        "question": "Một nhà phát triển đang viết ứng dụng máy khách mã hóa dữ liệu nhạy cảm bằng khóa dữ liệu trước khi gửi đến ứng dụng máy chủ. Ứng dụng máy khách gửi khóa dữ liệu đến ứng dụng máy chủ để ứng dụng máy chủ có thể giải mã thông tin nhạy cảm. Nhà phát triển lo ngại rằng tính bảo mật của dữ liệu nhạy cảm có thể bị xâm phạm nếu khóa dữ liệu bị đánh cắp. Nhà phát triển nên sử dụng loại mã hóa nào để bảo vệ đầy đủ thông tin nhạy cảm?",
        "options": [
          "Mã hóa đối xứng (Symmetric encryption)",
          "Mã hóa bất đối xứng (Asymmetric encryption)",
          "Mã hóa phong bì (Envelope encryption)",
          "Mã hóa phía máy chủ (Server-side encryption)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m9_q9",
        "question": "AWS Key Management Service (AWS KMS) cung cấp những chức năng nào? (Chọn HAI.)",
        "options": [
          "Xoay vòng khóa (Rotate keys)",
          "Tạo khóa truy cập AWS Identity and Access Management (IAM)",
          "Xác thực người dùng bên ngoài",
          "Lưu trữ dữ liệu được mã hóa",
          "Tạo khóa đối xứng và bất đối xứng"
        ],
        "correctIndices": [
          0,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m9_q10",
        "question": "Dịch vụ AWS nào phát hiện và bảo vệ thông tin nhạy cảm được lưu trữ trên Amazon S3 trong tài khoản AWS?",
        "options": [
          "AWS Audit Manager",
          "AWS Resource Access Manager (AWS RAM)",
          "Amazon Macie",
          "Amazon Detective"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "10": {
    "title": "Module 10: Triển khai Giám sát, Tính co giãn và Tính sẵn sàng cao - AWS",
    "questions": [
      {
        "id": "m10_q1",
        "question": "Phát biểu nào về Amazon EC2 Auto Scaling là chính xác?",
        "options": [
          "Nó có thể khởi chạy các Amazon EC2 instance trên nhiều Vùng sẵn sàng (Availability Zone).",
          "Nó có thể khởi chạy các Amazon EC2 instance, nhưng khách hàng phải tự chấm dứt các instance khi không còn cần thiết.",
          "Nó yêu cầu khách hàng chỉ sử dụng Reserved Instances.",
          "Nó có thể khởi chạy các Amazon EC2 instance mới dựa trên lịch trình."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q2",
        "question": "Một kỹ sư DevOps phát hiện rằng nhu cầu đối với một nhóm Amazon EC2 instance trong Auto Scaling group tăng một lượng cố định vào các ngày cuối tuần. Loại tự động mở rộng nào PHÙ HỢP NHẤT trong trường hợp này?",
        "options": [
          "Động (Dynamic)",
          "Thủ công (Manual)",
          "Theo lịch trình (Scheduled)",
          "Dự đoán (Predictive)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q3",
        "question": "Một kỹ sư DevOps khởi chạy một nhóm Amazon EC2 instance trong Auto Scaling group phía sau Application Load Balancer. Các EC2 instance phải duy trì mức sử dụng CPU trung bình 50%. Loại tự động mở rộng nào phù hợp để sử dụng dựa trên mức sử dụng CPU?",
        "options": [
          "Mở rộng thủ công (Manual scaling)",
          "Mở rộng theo bước (Step scaling)",
          "Mở rộng đơn giản (Simple scaling)",
          "Mở rộng theo dõi mục tiêu (Target tracking scaling)"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q4",
        "question": "Người dùng có thể mở rộng theo chiều dọc (vertically scale) cơ sở dữ liệu Amazon RDS như thế nào?",
        "options": [
          "Bằng cách thêm các read replica",
          "Bằng cách tạo các nút đọc và ghi chuyên dụng",
          "Bằng cách phân mảnh cơ sở dữ liệu (sharding)",
          "Bằng cách thay đổi lớp hoặc kích thước instance"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q5",
        "question": "Khách hàng AWS có thể mở rộng theo chiều ngang (horizontally scale) cơ sở dữ liệu Amazon Aurora như thế nào?",
        "options": [
          "Bằng cách thay đổi loại instance",
          "Bằng cách tạo chính sách mở rộng",
          "Bằng cách thêm các Aurora Replica instance sử dụng Aurora Auto Scaling",
          "Bằng cách tạo các cảnh báo Amazon CloudWatch"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q6",
        "question": "Amazon DynamoDB thực hiện tự động mở rộng như thế nào?",
        "options": [
          "Nó thay đổi loại instance để phản hồi các thay đổi về tải xử lý.",
          "Nó điều chỉnh dung lượng thông lượng được cung cấp để phản hồi các mẫu lưu lượng.",
          "Nó thêm và xóa các database instance để phản hồi các thay đổi về lưu lượng.",
          "Nó thêm các read replica để phản hồi nhu cầu đọc tăng cao."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q7",
        "question": "Một nhóm Amazon EC2 instance được khởi chạy trong Amazon EC2 Auto Scaling group. Các instance chạy ứng dụng sử dụng giao thức tùy chỉnh trên cổng TCP 42000. Các kết nối từ hệ thống máy khách trên internet phải được cân bằng tải trên các instance. Giải pháp cân bằng tải nào là tốt nhất?",
        "options": [
          "Gateway Load Balancer",
          "Network Load Balancer",
          "Classic Load Balancer",
          "Application Load Balancer"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q8",
        "question": "Một công ty phải xây dựng trang web có tính sẵn sàng cao sử dụng script phía máy chủ để phục vụ HTML động. Giải pháp nào cung cấp tính sẵn sàng CAO NHẤT với chi phí và độ phức tạp THẤP NHẤT?",
        "options": [
          "Auto Scaling group khởi chạy các Amazon EC2 instance được phục vụ bởi Network Load Balancer. Amazon Route 53 sử dụng định tuyến dựa trên độ trễ.",
          "Auto Scaling group khởi chạy các Amazon EC2 instance được phục vụ bởi Application Load Balancer. Phân giải tên DNS trỏ đến load balancer.",
          "Khách hàng triển khai máy chủ web thứ hai ở Region khác. Amazon Route 53 sử dụng định tuyến chuyển đổi dự phòng (failover routing) để khắc phục thảm họa.",
          "Amazon S3 lưu trữ trang web. Phân giải tên DNS trỏ đến S3 bucket."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q9",
        "question": "Người dùng ở vị trí A kết nối với ứng dụng ở Region A. Người dùng ở vị trí B kết nối với cùng ứng dụng ở Region B. Nếu ứng dụng ở Region A trở nên không khỏe mạnh, lưu lượng của vị trí A phải được chuyển hướng đến ứng dụng ở Region B. Giải pháp nào đáp ứng yêu cầu này?",
        "options": [
          "Sử dụng định tuyến địa lý gần (geoproximity routing) và Network Load Balancer được gắn với cả hai Region.",
          "Sử dụng định tuyến theo vị trí địa lý (geolocation routing) với các bản ghi chuyển đổi dự phòng (failover records) trong Amazon Route 53.",
          "Sử dụng Application Load Balancer với các cảnh báo Amazon CloudWatch.",
          "Sử dụng định tuyến dựa trên độ trễ (latency-based routing) trong Amazon Route 53 với các cảnh báo Amazon CloudWatch."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m10_q10",
        "question": "Một kỹ sư phần mềm đã tạo tài khoản AWS cho mục đích phát triển và kiểm thử cá nhân. Họ muốn tài khoản nằm trong Bậc miễn phí AWS (AWS Free Tier) và không phát sinh chi phí bất ngờ. Cách tiếp cận nào sẽ hoạt động và yêu cầu ÍT NỖ LỰC NHẤT?",
        "options": [
          "Tạo chính sách kiểm soát dịch vụ (SCP) để hạn chế tất cả các dịch vụ không thuộc AWS Free Tier.",
          "Đăng nhập vào AWS Management Console mỗi tháng và kiểm tra bảng điều khiển thanh toán.",
          "Tạo cảnh báo Amazon CloudWatch để gửi email khi thanh toán tài khoản vượt quá $0.",
          "Tạo chỉ số Amazon CloudWatch để theo dõi thanh toán tài khoản và giới hạn ở mức $0."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "11": {
    "title": "Module 11: Tự động hóa Kiến trúc - AWS",
    "questions": [
      {
        "id": "m11_q1",
        "question": "Những lý do nào để sử dụng tự động hóa để cung cấp tài nguyên? (Chọn HAI.)",
        "options": [
          "Chi phí cao hơn với các quy trình thủ công",
          "Yêu cầu tự động hóa để tạo một số tài nguyên",
          "Phù hợp với nguyên tắc thiết kế về độ tin cậy",
          "Yêu cầu tự động hóa để đạt tính sẵn sàng cao",
          "Thiếu kiểm soát phiên bản với các quy trình thủ công"
        ],
        "correctIndices": [
          2,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m11_q2",
        "question": "Những lợi ích nào của việc sử dụng hạ tầng dưới dạng mã (infrastructure as code - IaC) so với các quy trình thủ công? (Chọn HAI.)",
        "options": [
          "Tự động hóa quét bảo mật toàn hệ thống.",
          "Bảo vệ môi trường khỏi bị xóa.",
          "Lan truyền các cập nhật từ một môi trường sang tất cả các môi trường.",
          "Triển khai các môi trường với tính nhất quán cấu hình.",
          "Quản lý tất cả người dùng tài khoản."
        ],
        "correctIndices": [
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m11_q3",
        "question": "Một kiến trúc sư đám mây muốn nhanh chóng thiết lập triển khai bảo mật Amazon FSx for Windows File Server tuân theo các thực tiễn tốt nhất của AWS. Họ nên sử dụng giải pháp nào?",
        "options": [
          "Mẫu AWS CloudFormation được tải xuống từ internet",
          "AWS CloudFormation Designer",
          "AWS Quick Start",
          "Amazon Machine Image (AMI) trên AWS Marketplace"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q4",
        "question": "Amazon Q Developer là gì?",
        "options": [
          "Một tập hợp các kiến trúc tham chiếu tự động",
          "Trợ lý lập trình được hỗ trợ bởi trí tuệ nhân tạo (AI)",
          "Mẫu triển khai ứng dụng nhanh",
          "Môi trường phát triển tích hợp (IDE)"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q5",
        "question": "Những lý do nào để sử dụng Amazon Q Developer? (Chọn HAI.)",
        "options": [
          "Viết các bài kiểm tra tuân thủ.",
          "Tăng cường bảo mật ứng dụng.",
          "Tự động hóa để đạt tính sẵn sàng cao.",
          "Chia sẻ mã nguồn mở.",
          "Tăng tốc các tác vụ lập trình."
        ],
        "correctIndices": [
          1,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m11_q6",
        "question": "AWS CloudFormation là gì?",
        "options": [
          "Mô tả các thực tiễn tốt nhất để thiết kế triển khai AWS",
          "Mẫu mô tả hạ tầng của bạn",
          "Gói chứa tất cả thông tin cần thiết để khởi chạy Amazon EC2 instance",
          "Dịch vụ AWS dùng để tạo, mô hình hóa và quản lý tài nguyên AWS"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q7",
        "question": "AWS CloudFormation Designer là gì?",
        "options": [
          "Tập hợp các mẫu có thể tái sử dụng",
          "Kho lưu trữ mã nguồn cho các mẫu AWS CloudFormation",
          "Công cụ tự động hóa triển khai",
          "Giao diện thiết kế đồ họa để tạo các mẫu AWS CloudFormation"
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q8",
        "question": "Tùy chọn nào có thể được sử dụng để thực hiện các khác biệt dành riêng cho từng lần triển khai trong mẫu AWS CloudFormation?",
        "options": [
          "Sử dụng change sets (bộ thay đổi).",
          "Sử dụng AWS CloudFormation Designer.",
          "Sử dụng conditions (điều kiện).",
          "Sử dụng drift detection (phát hiện trôi dạt)."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q9",
        "question": "Tùy chọn nào là cách tốt để xem trước các thay đổi trước khi triển khai chúng trong AWS CloudFormation?",
        "options": [
          "Kiểm tra trực quan mẫu.",
          "Chạy Detect Drift.",
          "Tạo một change set (bộ thay đổi).",
          "Chạy Update Stack."
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m11_q10",
        "question": "Tùy chọn nào là cách tốt để biết tài nguyên nào trong môi trường ứng dụng đã bị sửa đổi thủ công, nếu môi trường được tạo bằng cách chạy AWS CloudFormation stack?",
        "options": [
          "Chạy drift detection (phát hiện trôi dạt) trên stack.",
          "Chạy change set trên stack.",
          "Chạy so sánh trong AWS CloudFormation Designer trên stack.",
          "Chạy conditions trên stack."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "12": {
    "title": "Module 12: Bộ nhớ đệm Nội dung - AWS",
    "questions": [
      {
        "id": "m12_q1",
        "question": "Bộ nhớ đệm (caching) là gì?",
        "options": [
          "Một mạng toàn cầu để phân phối nội dung",
          "Một cách để lưu trữ mật khẩu",
          "Một tầng lưu trữ dữ liệu tốc độ cao",
          "Một cơ sở dữ liệu trong bộ nhớ (in-memory database)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q2",
        "question": "Loại dữ liệu nào nên được lưu vào bộ nhớ đệm?",
        "options": [
          "Dữ liệu có thể được truy xuất nhanh chóng bằng các truy vấn đơn giản",
          "Dữ liệu chuyên biệt chỉ cần thiết cho một nhóm người dùng",
          "Dữ liệu tĩnh được truy cập thường xuyên",
          "Nội dung web được tạo ra động (dynamically generated)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q3",
        "question": "Lợi ích nào của việc sử dụng bộ nhớ đệm?",
        "options": [
          "Giảm chi phí",
          "Tăng độ tin cậy của ứng dụng",
          "Giảm độ trễ phản hồi",
          "Cân bằng tải ứng dụng"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q4",
        "question": "Những loại nội dung nào trên trang web có thể được lưu vào bộ nhớ đệm bằng edge cache? (Chọn HAI.)",
        "options": [
          "Dữ liệu do người dùng tạo ra, chẳng hạn như các từ khóa tìm kiếm được nhập bởi người dùng",
          "Tệp video, chẳng hạn như video demo sản phẩm",
          "Giỏ hàng chứa các mặt hàng của người dùng",
          "Các đối tượng web, chẳng hạn như siêu liên kết (hyperlinks)",
          "Nội dung được tạo động, chẳng hạn như tên người dùng"
        ],
        "correctIndices": [
          1,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m12_q5",
        "question": "Amazon CloudFront cho phép điều gì?",
        "options": [
          "Bộ nhớ đệm nội dung đa tầng và theo vùng",
          "Bộ nhớ đệm hai chiều giữa người dùng và máy chủ gốc (origin host)",
          "Xử lý giao dịch với cơ sở dữ liệu trong bộ nhớ",
          "Tự động tạo giá trị thời gian tồn tại (TTL - time to live)"
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q6",
        "question": "Amazon CloudFront sử dụng các edge location như thế nào?",
        "options": [
          "Nó lưu vào bộ nhớ đệm nội dung được truy cập thường xuyên tại các edge location. Nó phân phối nội dung được lưu trong bộ nhớ đệm đến máy khách thông qua edge location có độ trễ thấp nhất đối với các máy khách đó.",
          "Nó lưu vào bộ nhớ đệm tất cả nội dung từ một origin distribution tại edge location và phân phối nội dung đến máy khách thông qua edge location nhanh nhất.",
          "Nó lưu vào bộ nhớ đệm dữ liệu theo vùng tại các Regional edge location và phân phối nội dung đến máy khách thông qua Regional edge location của họ.",
          "Nó lưu vào bộ nhớ đệm nội dung cục bộ tại các edge location. Nó phân phối nội dung được lưu trong bộ nhớ đệm đến máy khách thông qua edge location yêu cầu ít bước nhảy mạng nhất để đến các máy khách đó."
        ],
        "correctIndices": [
          0
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q7",
        "question": "Phát biểu nào mô tả cách hiệu quả để phân phối nội dung video theo yêu cầu?",
        "options": [
          "Khởi chạy Amazon EC2 instance để lưu trữ nội dung video. Sau đó sử dụng Amazon CloudFront để phân phối nội dung.",
          "Sử dụng Amazon S3 để lưu trữ và phục vụ nội dung.",
          "Khởi chạy Amazon EC2 instance để lưu trữ và phục vụ nội dung video.",
          "Sử dụng Amazon S3 để lưu trữ nội dung. Sau đó sử dụng Amazon CloudFront để phân phối nội dung."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q8",
        "question": "Amazon CloudFront đóng vai trò gì trong việc bảo vệ chống lại các cuộc tấn công từ chối dịch vụ phân tán (DDoS)?",
        "options": [
          "Kiểm soát lưu lượng theo địa chỉ IP nguồn của các yêu cầu",
          "Hạn chế lưu lượng theo địa lý để giúp chặn các cuộc tấn công có nguồn gốc từ các quốc gia cụ thể",
          "Thực hiện kiểm tra gói tin sâu (deep packet inspection) để phát hiện các cuộc tấn công",
          "Định tuyến lưu lượng qua các edge location"
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m12_q9",
        "question": "Ứng dụng có thể sử dụng Amazon ElastiCache như thế nào để cải thiện hiệu suất đọc cơ sở dữ liệu? (Chọn HAI.)",
        "options": [
          "Đọc dữ liệu từ cơ sở dữ liệu trước, và ghi dữ liệu được đọc thường xuyên nhất vào ElastiCache.",
          "Sao chép cơ sở dữ liệu trong ElastiCache, và chuyển tất cả thao tác đọc đến ElastiCache và tất cả thao tác ghi đến cơ sở dữ liệu.",
          "Chuyển tất cả yêu cầu đọc đến cơ sở dữ liệu, và cấu hình để đọc từ ElastiCache khi xảy ra cache miss.",
          "Đọc dữ liệu từ ElastiCache trước, và ghi vào ElastiCache khi xảy ra cache miss.",
          "Ghi dữ liệu vào ElastiCache mỗi khi ứng dụng ghi vào cơ sở dữ liệu."
        ],
        "correctIndices": [
          0,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m12_q10",
        "question": "Chiến lược bộ nhớ đệm nào nên được sử dụng khi có dữ liệu phải được cập nhật theo thời gian thực?",
        "options": [
          "Thời gian tồn tại (TTL - Time to live)",
          "Tải lười biếng (Lazy loading)",
          "Ghi xuyên suốt (Write-through)",
          "Tiêu đề kiểm soát bộ nhớ đệm (Cache-control headers)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  },
  "13": {
    "title": "Module 13: Xây dựng Kiến trúc Tách rời - AWS",
    "questions": [
      {
        "id": "m13_q1",
        "question": "Phát biểu nào mô tả sự khác biệt giữa kiến trúc kết nối chặt chẽ (tightly coupled) và kiến trúc kết nối lỏng lẻo (loosely coupled)?",
        "options": [
          "Kiến trúc kết nối lỏng lẻo phải sử dụng các dịch vụ được quản lý, còn kiến trúc kết nối chặt chẽ không có giới hạn này.",
          "Kiến trúc kết nối chặt chẽ có nhiều khả năng bị lỗi hơn kiến trúc kết nối lỏng lẻo.",
          "Kết nối lỏng lẻo làm tăng độ phức tạp của việc mở rộng. Kết nối chặt chẽ làm giảm độ phức tạp đó.",
          "Các thành phần trong kiến trúc kết nối chặt chẽ phụ thuộc nhiều vào nhau. Trong kiến trúc kết nối lỏng lẻo, các thành phần không phụ thuộc nhiều vào nhau."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m13_q2",
        "question": "Những phát biểu nào mô tả Amazon Simple Queue Service (Amazon SQS)? (Chọn BA.)",
        "options": [
          "Hỗ trợ hàng đợi tiêu chuẩn và các chủ đề (topics)",
          "Cho phép tách rời và mở rộng các microservice, hệ thống phân tán và ứng dụng serverless",
          "Gửi thông báo đẩy (push notifications) đến người tiêu dùng",
          "Yêu cầu người tiêu dùng thăm dò hàng đợi (poll the queue) để nhận tin nhắn",
          "Hỗ trợ email và tin nhắn văn bản",
          "Lưu trữ và tùy chọn mã hóa tin nhắn cho đến khi chúng được xử lý và xóa"
        ],
        "correctIndices": [
          1,
          3,
          5
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m13_q3",
        "question": "Những phát biểu nào đúng khi sử dụng hàng đợi tiêu chuẩn (standard queue) của Amazon Simple Queue Service (Amazon SQS)? (Chọn HAI.)",
        "options": [
          "Tin nhắn có thể được gửi theo bất kỳ thứ tự nào.",
          "Tin nhắn có thể được gán mức độ ưu tiên.",
          "Tin nhắn phải được xử lý theo thứ tự chúng được gửi.",
          "Một tin nhắn chỉ được xử lý đúng một lần.",
          "Một tin nhắn có thể được phân phối nhiều hơn một lần."
        ],
        "correctIndices": [
          0,
          4
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m13_q4",
        "question": "Một nhóm Amazon EC2 instance xử lý các video mà người dùng tải lên. Amazon SQS có thể thực hiện chức năng nào trong ứng dụng này?",
        "options": [
          "Hàng đợi SQS nhận tin nhắn từ ứng dụng và thông báo cho tất cả EC2 instance sẵn sàng rằng có video cần xử lý.",
          "Ứng dụng đặt các tin nhắn công việc vào hàng đợi SQS. Các EC2 instance có dung lượng xử lý sẵn sàng sẽ lấy tin nhắn công việc tiếp theo từ hàng đợi.",
          "Ứng dụng ghi các tệp video vào hàng đợi SQS. Các EC2 instance có dung lượng xử lý sẵn sàng sẽ lấy video tiếp theo từ hàng đợi.",
          "Các EC2 instance đặt các tệp video đã chỉnh sửa vào hàng đợi SQS. Ứng dụng lấy các video từ hàng đợi."
        ],
        "correctIndices": [
          1
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m13_q5",
        "question": "Amazon Simple Notification Service (Amazon SNS) là gì?",
        "options": [
          "Một bus sự kiện serverless cho phép kết nối dễ dàng các ứng dụng bằng dữ liệu từ ứng dụng của bạn, các ứng dụng SaaS tích hợp và các dịch vụ AWS",
          "Một dịch vụ truyền thông tiếp thị gửi và nhận linh hoạt và có thể mở rộng sử dụng các kênh email, SMS, đẩy hoặc thoại",
          "Một dịch vụ nhắn tin được quản lý hoàn toàn cho cả giao tiếp hệ thống-hệ thống và ứng dụng-đến-người (A2P), sử dụng các mẫu xuất bản/đăng ký (publish/subscribe)",
          "Một dịch vụ email tiết kiệm chi phí, linh hoạt và có thể mở rộng cho phép các nhà phát triển gửi email từ bất kỳ ứng dụng nào"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m13_q6",
        "question": "Những trường hợp sử dụng nào phù hợp với Amazon Simple Notification Service (Amazon SNS)? (Chọn BA.)",
        "options": [
          "Kích hoạt một AWS Lambda function duy nhất khi một đối tượng được tạo trong Amazon S3 bucket.",
          "Giữ đầu vào cho đến khi nó có thể được xử lý theo thứ tự nhận được.",
          "Gửi tin nhắn văn bản đến các nhà vận hành hệ thống khi phát hiện hoạt động bất thường.",
          "Gửi thông báo đẩy đến các ứng dụng di động khi có bản cập nhật phần mềm mới.",
          "Thu thập dữ liệu trực tuyến từ nhiều hệ thống.",
          "Thông báo cho nhiều hệ thống rằng đầu vào của người dùng đã sẵn sàng để xử lý."
        ],
        "correctIndices": [
          2,
          3,
          5
        ],
        "type": "multiple",
        "selectCount": 3
      },
      {
        "id": "m13_q7",
        "question": "Những tính năng nào của Amazon Simple Notification Service (Amazon SNS)? (Chọn HAI.)",
        "options": [
          "Đảm bảo phân phối tin nhắn ngay cả khi điểm cuối không thể truy cập",
          "Thu hồi tin nhắn đã gửi",
          "Phân phối tin nhắn đến một URL",
          "Phân phối tin nhắn đến hàng đợi Amazon Simple Queue Service (Amazon SQS)",
          "Cung cấp thứ tự tin nhắn nghiêm ngặt với các chủ đề tiêu chuẩn"
        ],
        "correctIndices": [
          2,
          3
        ],
        "type": "multiple",
        "selectCount": 2
      },
      {
        "id": "m13_q8",
        "question": "Hai AWS Lambda function khác nhau phải đồng thời xử lý các tệp PDF được tải lên Amazon S3 bucket. Thông báo sự kiện S3 chỉ cho phép một hành động khi các tệp PDF được tải lên. Giải pháp nào cung cấp cách ít phức tạp nhất để xử lý tin nhắn với cả hai Lambda function một cách hiệu quả?",
        "options": [
          "Gửi sự kiện S3 đến hàng đợi Amazon Simple Queue Service (Amazon SQS) mà cả hai Lambda function cùng thăm dò.",
          "Tải lên hai bản sao của mỗi tệp PDF bằng cách sử dụng các tiền tố khóa đối tượng khác nhau.",
          "Gửi sự kiện S3 đến Amazon MQ để phân phối đến cả hai Lambda function.",
          "Gửi sự kiện S3 đến chủ đề Amazon Simple Notification Service (Amazon SNS) mà cả hai Lambda function đăng ký."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m13_q9",
        "question": "Amazon MQ là gì?",
        "options": [
          "Dịch vụ di chuyển dữ liệu",
          "Dịch vụ giám sát ứng dụng",
          "Dịch vụ môi giới tin nhắn (message broker service)",
          "Dịch vụ môi giới danh tính (identity broker service)"
        ],
        "correctIndices": [
          2
        ],
        "type": "single",
        "selectCount": 1
      },
      {
        "id": "m13_q10",
        "question": "Trường hợp sử dụng phổ biến nào phù hợp với Amazon MQ?",
        "options": [
          "Kết nối đám mây riêng ảo (VPC) với mạng tại chỗ.",
          "Tách rời các thành phần trong ứng dụng cloud-native mới.",
          "Tải trang web tĩnh độc lập lên AWS.",
          "Tận dụng ứng dụng tại chỗ hiện có sử dụng Apache ActiveMQ để giao tiếp giữa các microservice."
        ],
        "correctIndices": [
          3
        ],
        "type": "single",
        "selectCount": 1
      }
    ]
  }
};

// Hỗ trợ cả browser và Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALL_MODULES;
}
