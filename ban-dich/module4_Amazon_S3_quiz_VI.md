# Module 4: Thêm Tầng Lưu trữ với Amazon S3 - AWS

---

**Câu 1:** Do việc sáp nhập công ty, một kỹ sư dữ liệu cần tăng dung lượng lưu trữ đối tượng. Họ không chắc cần bao nhiêu dung lượng. Họ muốn một dịch vụ có khả năng mở rộng cao có thể lưu trữ dữ liệu phi cấu trúc, bán cấu trúc và có cấu trúc. Dịch vụ nào sau đây sẽ hiệu quả về chi phí nhất để hoàn thành nhiệm vụ này?

A. Amazon RDS

B. AWS Storage Gateway

C. Amazon S3

D. Amazon Elastic Block Store (Amazon EBS)

**Đáp án: C. Amazon S3**

---

**Câu 2:** Amazon S3 cung cấp giải pháp tốt cho trường hợp sử dụng nào?

A. Lưu trữ theo giờ các tệp tạm thời được truy cập thường xuyên

B. Kho dữ liệu (data warehouse) cho business intelligence

C. Dữ liệu sổ cái được cập nhật và truy cập thường xuyên

D. Vị trí lưu trữ có thể truy cập qua internet cho các tệp video mà trang web bên ngoài có thể truy cập

**Đáp án: D. Vị trí lưu trữ có thể truy cập qua internet cho các tệp video mà trang web bên ngoài có thể truy cập**

---

**Câu 3:** Một công ty muốn sử dụng Amazon S3 để lưu trữ trang web thay vì máy chủ web truyền thống. Những loại nội dung nào Amazon S3 hỗ trợ cho lưu trữ web tĩnh? (Chọn BA.)

A. Tệp HTML động

B. Tệp video và âm thanh

C. Script phía máy khách (client-side scripts)

D. Script phía máy chủ (server-side scripts)

E. Tệp HTML và tệp hình ảnh

F. Công cụ cơ sở dữ liệu

**Đáp án: B. Tệp video và âm thanh, C. Script phía máy khách và E. Tệp HTML và tệp hình ảnh**

---

**Câu 4:** Một công ty muốn sử dụng bucket S3 để lưu trữ dữ liệu nhạy cảm. Những hành động nào có thể bảo vệ dữ liệu của họ? (Chọn HAI.)

A. Bật mã hóa phía máy chủ (server-side encryption) trên bucket S3 trước khi tải dữ liệu nhạy cảm lên

B. Bật mã hóa phía máy chủ trên bucket S3 sau khi tải dữ liệu nhạy cảm lên

C. Tải các tệp chưa mã hóa lên Amazon S3 vì Amazon S3 mã hóa tệp theo mặc định

D. Sử dụng mã hóa phía máy khách (client-side encryption) để bảo vệ dữ liệu trong quá trình truyền trước khi gửi đến Amazon S3

E. Sử dụng Giao thức Truyền tệp An toàn (SFTP) để kết nối trực tiếp đến Amazon S3

**Đáp án: A. Bật mã hóa phía máy chủ trên bucket S3 trước khi tải dữ liệu nhạy cảm lên và D. Sử dụng mã hóa phía máy khách để bảo vệ dữ liệu trong quá trình truyền trước khi gửi đến Amazon S3**

---

**Câu 5:** Một công ty cần tạo nơi lưu trữ chung cho các tệp dùng chung. Những yêu cầu nào Amazon S3 hỗ trợ? (Chọn HAI.)

A. Đính kèm bình luận vào tệp.

B. Khôi phục các tệp đã xóa.

C. Duy trì các phiên bản khác nhau của tệp.

D. So sánh nội dung giữa các tệp.

E. Khóa tệp để chỉ một người có thể chỉnh sửa tại một thời điểm.

**Đáp án: B. Khôi phục các tệp đã xóa và C. Duy trì các phiên bản khác nhau của tệp.**

---

**Câu 6:** Nhóm dịch vụ khách hàng truy cập dữ liệu hồ sơ hàng ngày trong tối đa 30 ngày. Các hồ sơ có thể được mở lại và yêu cầu truy cập ngay lập tức trong 1 năm sau khi đóng. Các hồ sơ được mở lại cần 2 ngày để xử lý. Giải pháp nào đáp ứng yêu cầu và tiết kiệm chi phí nhất?

A. Lưu dữ liệu hồ sơ trong S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang S3 Standard-Infrequent Access (S3 Standard-IA) sau 30 ngày.

B. Lưu dữ liệu hồ sơ trong S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang Amazon S3 Glacier Flexible Retrieval sau 30 ngày.

C. Lưu tất cả dữ liệu hồ sơ trong S3 Standard để luôn sẵn sàng truy cập khi cần.

D. Lưu dữ liệu hồ sơ trong S3 Intelligent-Tiering để tự động chuyển dữ liệu giữa các tầng dựa trên tần suất truy cập.

**Đáp án: A. Lưu dữ liệu hồ sơ trong S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang S3 Standard-Infrequent Access (S3 Standard-IA) sau 30 ngày.**

---

**Câu 7:** Tùy chọn nào tận dụng các edge location trong Amazon CloudFront để truyền tệp qua khoảng cách dài đến bucket S3?

A. AWS Transfer Family

B. Amazon S3 REST API

C. Amazon S3 Transfer Acceleration

D. AWS SDKs

**Đáp án: C. Amazon S3 Transfer Acceleration**

---

**Câu 8:** Một nhà sản xuất video thường xuyên cần truyền nhiều tệp video lên Amazon S3. Các tệp có dung lượng từ 100–700 MB. Kết nối internet không ổn định, khiến một số lần tải lên thất bại. Giải pháp nào cung cấp cách nhanh nhất, đáng tin cậy nhất và tiết kiệm chi phí nhất để truyền các tệp này lên Amazon S3?

A. AWS Transfer Family

B. Amazon S3 Transfer Acceleration

C. AWS Management Console

D. Amazon S3 multipart uploads (Tải lên nhiều phần)

**Đáp án: D. Amazon S3 multipart uploads (Tải lên nhiều phần)**

---

**Câu 9:** Lớp lưu trữ Amazon S3 nào được thiết kế cho các bản sao lưu dữ liệu tại chỗ hoặc dữ liệu có thể dễ dàng tạo lại?

A. S3 One Zone-Infrequent Access (S3 One Zone-IA)

B. S3 Glacier Instant Retrieval

C. S3 Intelligent-Tiering

D. S3 Standard-Infrequent Access (S3 Standard-IA)

**Đáp án: A. S3 One Zone-Infrequent Access (S3 One Zone-IA)**

---

**Câu 10:** Một công ty cần lưu giữ hồ sơ cho mục đích pháp lý trong 7 năm. Các hồ sơ này hiếm khi được truy cập (một hoặc hai lần mỗi năm). Lớp lưu trữ Amazon S3 nào có chi phí thấp nhất?

A. S3 Glacier Deep Archive

B. S3 Intelligent-Tiering

C. S3 Standard-Infrequent Access (S3 Standard-IA)

D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**Đáp án: A. S3 Glacier Deep Archive**
