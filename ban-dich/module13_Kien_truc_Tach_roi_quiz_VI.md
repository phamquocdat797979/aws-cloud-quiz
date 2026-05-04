# Module 13: Xây dựng Kiến trúc Tách rời - AWS

---

**Câu 1:** Phát biểu nào mô tả sự khác biệt giữa kiến trúc kết nối chặt chẽ (tightly coupled) và kiến trúc kết nối lỏng lẻo (loosely coupled)?

A. Kiến trúc kết nối lỏng lẻo phải sử dụng các dịch vụ được quản lý, còn kiến trúc kết nối chặt chẽ không có giới hạn này.

B. Kiến trúc kết nối chặt chẽ có nhiều khả năng bị lỗi hơn kiến trúc kết nối lỏng lẻo.

C. Kết nối lỏng lẻo làm tăng độ phức tạp của việc mở rộng. Kết nối chặt chẽ làm giảm độ phức tạp đó.

D. Các thành phần trong kiến trúc kết nối chặt chẽ phụ thuộc nhiều vào nhau. Trong kiến trúc kết nối lỏng lẻo, các thành phần không phụ thuộc nhiều vào nhau.

**Đáp án: D. Các thành phần trong kiến trúc kết nối chặt chẽ phụ thuộc nhiều vào nhau. Trong kiến trúc kết nối lỏng lẻo, các thành phần không phụ thuộc nhiều vào nhau.**

---

**Câu 2:** Những phát biểu nào mô tả Amazon Simple Queue Service (Amazon SQS)? (Chọn BA.)

A. Hỗ trợ hàng đợi tiêu chuẩn và các chủ đề (topics)

B. Cho phép tách rời và mở rộng các microservice, hệ thống phân tán và ứng dụng serverless

C. Gửi thông báo đẩy (push notifications) đến người tiêu dùng

D. Yêu cầu người tiêu dùng thăm dò hàng đợi (poll the queue) để nhận tin nhắn

E. Hỗ trợ email và tin nhắn văn bản

F. Lưu trữ và tùy chọn mã hóa tin nhắn cho đến khi chúng được xử lý và xóa

**Đáp án: B. Cho phép tách rời và mở rộng các microservice, hệ thống phân tán và ứng dụng serverless; D. Yêu cầu người tiêu dùng thăm dò hàng đợi để nhận tin nhắn; và F. Lưu trữ và tùy chọn mã hóa tin nhắn cho đến khi chúng được xử lý và xóa.**

---

**Câu 3:** Những phát biểu nào đúng khi sử dụng hàng đợi tiêu chuẩn (standard queue) của Amazon Simple Queue Service (Amazon SQS)? (Chọn HAI.)

A. Tin nhắn có thể được gửi theo bất kỳ thứ tự nào.

B. Tin nhắn có thể được gán mức độ ưu tiên.

C. Tin nhắn phải được xử lý theo thứ tự chúng được gửi.

D. Một tin nhắn chỉ được xử lý đúng một lần.

E. Một tin nhắn có thể được phân phối nhiều hơn một lần.

**Đáp án: A. Tin nhắn có thể được gửi theo bất kỳ thứ tự nào và E. Một tin nhắn có thể được phân phối nhiều hơn một lần.**

---

**Câu 4:** Một nhóm Amazon EC2 instance xử lý các video mà người dùng tải lên. Amazon SQS có thể thực hiện chức năng nào trong ứng dụng này?

A. Hàng đợi SQS nhận tin nhắn từ ứng dụng và thông báo cho tất cả EC2 instance sẵn sàng rằng có video cần xử lý.

B. Ứng dụng đặt các tin nhắn công việc vào hàng đợi SQS. Các EC2 instance có dung lượng xử lý sẵn sàng sẽ lấy tin nhắn công việc tiếp theo từ hàng đợi.

C. Ứng dụng ghi các tệp video vào hàng đợi SQS. Các EC2 instance có dung lượng xử lý sẵn sàng sẽ lấy video tiếp theo từ hàng đợi.

D. Các EC2 instance đặt các tệp video đã chỉnh sửa vào hàng đợi SQS. Ứng dụng lấy các video từ hàng đợi.

**Đáp án: B. Ứng dụng đặt các tin nhắn công việc vào hàng đợi SQS. Các EC2 instance có dung lượng xử lý sẵn sàng sẽ lấy tin nhắn công việc tiếp theo từ hàng đợi.**

---

**Câu 5:** Amazon Simple Notification Service (Amazon SNS) là gì?

A. Một bus sự kiện serverless cho phép kết nối dễ dàng các ứng dụng bằng dữ liệu từ ứng dụng của bạn, các ứng dụng SaaS tích hợp và các dịch vụ AWS

B. Một dịch vụ truyền thông tiếp thị gửi và nhận linh hoạt và có thể mở rộng sử dụng các kênh email, SMS, đẩy hoặc thoại

C. Một dịch vụ nhắn tin được quản lý hoàn toàn cho cả giao tiếp hệ thống-hệ thống và ứng dụng-đến-người (A2P), sử dụng các mẫu xuất bản/đăng ký (publish/subscribe)

D. Một dịch vụ email tiết kiệm chi phí, linh hoạt và có thể mở rộng cho phép các nhà phát triển gửi email từ bất kỳ ứng dụng nào

**Đáp án: C. Một dịch vụ nhắn tin được quản lý hoàn toàn cho cả giao tiếp hệ thống-hệ thống và ứng dụng-đến-người (A2P), sử dụng các mẫu xuất bản/đăng ký.**

---

**Câu 6:** Những trường hợp sử dụng nào phù hợp với Amazon Simple Notification Service (Amazon SNS)? (Chọn BA.)

A. Kích hoạt một AWS Lambda function duy nhất khi một đối tượng được tạo trong Amazon S3 bucket.

B. Giữ đầu vào cho đến khi nó có thể được xử lý theo thứ tự nhận được.

C. Gửi tin nhắn văn bản đến các nhà vận hành hệ thống khi phát hiện hoạt động bất thường.

D. Gửi thông báo đẩy đến các ứng dụng di động khi có bản cập nhật phần mềm mới.

E. Thu thập dữ liệu trực tuyến từ nhiều hệ thống.

F. Thông báo cho nhiều hệ thống rằng đầu vào của người dùng đã sẵn sàng để xử lý.

**Đáp án: C. Gửi tin nhắn văn bản đến các nhà vận hành hệ thống khi phát hiện hoạt động bất thường; D. Gửi thông báo đẩy đến các ứng dụng di động khi có bản cập nhật phần mềm mới; và F. Thông báo cho nhiều hệ thống rằng đầu vào của người dùng đã sẵn sàng để xử lý.**

---

**Câu 7:** Những tính năng nào của Amazon Simple Notification Service (Amazon SNS)? (Chọn HAI.)

A. Đảm bảo phân phối tin nhắn ngay cả khi điểm cuối không thể truy cập

B. Thu hồi tin nhắn đã gửi

C. Phân phối tin nhắn đến một URL

D. Phân phối tin nhắn đến hàng đợi Amazon Simple Queue Service (Amazon SQS)

E. Cung cấp thứ tự tin nhắn nghiêm ngặt với các chủ đề tiêu chuẩn

**Đáp án: C. Phân phối tin nhắn đến một URL và D. Phân phối tin nhắn đến hàng đợi Amazon Simple Queue Service (Amazon SQS)**

---

**Câu 8:** Hai AWS Lambda function khác nhau phải đồng thời xử lý các tệp PDF được tải lên Amazon S3 bucket. Thông báo sự kiện S3 chỉ cho phép một hành động khi các tệp PDF được tải lên. Giải pháp nào cung cấp cách ít phức tạp nhất để xử lý tin nhắn với cả hai Lambda function một cách hiệu quả?

A. Gửi sự kiện S3 đến hàng đợi Amazon Simple Queue Service (Amazon SQS) mà cả hai Lambda function cùng thăm dò.

B. Tải lên hai bản sao của mỗi tệp PDF bằng cách sử dụng các tiền tố khóa đối tượng khác nhau.

C. Gửi sự kiện S3 đến Amazon MQ để phân phối đến cả hai Lambda function.

D. Gửi sự kiện S3 đến chủ đề Amazon Simple Notification Service (Amazon SNS) mà cả hai Lambda function đăng ký.

**Đáp án: D. Gửi sự kiện S3 đến chủ đề Amazon Simple Notification Service (Amazon SNS) mà cả hai Lambda function đăng ký.**

---

**Câu 9:** Amazon MQ là gì?

A. Dịch vụ di chuyển dữ liệu

B. Dịch vụ giám sát ứng dụng

C. Dịch vụ môi giới tin nhắn (message broker service)

D. Dịch vụ môi giới danh tính (identity broker service)

**Đáp án: C. Dịch vụ môi giới tin nhắn (message broker service)**

---

**Câu 10:** Trường hợp sử dụng phổ biến nào phù hợp với Amazon MQ?

A. Kết nối đám mây riêng ảo (VPC) với mạng tại chỗ.

B. Tách rời các thành phần trong ứng dụng cloud-native mới.

C. Tải trang web tĩnh độc lập lên AWS.

D. Tận dụng ứng dụng tại chỗ hiện có sử dụng Apache ActiveMQ để giao tiếp giữa các microservice.

**Đáp án: D. Tận dụng ứng dụng tại chỗ hiện có sử dụng Apache ActiveMQ để giao tiếp giữa các microservice.**
