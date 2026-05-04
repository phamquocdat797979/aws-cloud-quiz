# Module 6: Thêm Tầng Cơ sở Dữ liệu - AWS

---

**Câu 1:** Phát biểu nào so sánh dịch vụ cơ sở dữ liệu do AWS quản lý với cơ sở dữ liệu trên Amazon EC2 instance là đúng?

A. AWS quản lý các bản vá cơ sở dữ liệu cho cơ sở dữ liệu trên dịch vụ cơ sở dữ liệu được quản lý.

B. AWS quản lý các bản vá hệ điều hành (OS) cho cơ sở dữ liệu trên EC2 instance.

C. Không cần cấu hình sao lưu cho cơ sở dữ liệu trên EC2 instance.

D. Không cần cấu hình sao lưu cho cơ sở dữ liệu trên dịch vụ cơ sở dữ liệu được quản lý.

**Đáp án: A. AWS quản lý các bản vá cơ sở dữ liệu cho cơ sở dữ liệu trên dịch vụ cơ sở dữ liệu được quản lý.**

---

**Câu 2:** Một công ty khởi nghiệp nhỏ đang quyết định dịch vụ cơ sở dữ liệu nào sẽ sử dụng cho hệ thống đăng ký của trang web đào tạo trực tuyến. Những yêu cầu nào có thể khiến họ chọn Amazon RDS thay vì Amazon DynamoDB? (Chọn HAI.)

A. Hệ thống đăng ký phải có tính sẵn sàng cao.

B. Dữ liệu phải được sao lưu trong trường hợp xảy ra thảm họa.

C. Dữ liệu học viên, khóa học và đăng ký được lưu trữ trong nhiều bảng khác nhau.

D. Dữ liệu có cấu trúc rõ ràng.

E. Dữ liệu và giao dịch phải được mã hóa để bảo vệ thông tin cá nhân.

**Đáp án: C. Dữ liệu học viên, khóa học và đăng ký được lưu trữ trong nhiều bảng khác nhau và D. Dữ liệu có cấu trúc rõ ràng.**

---

**Câu 3:** Một công ty khởi nghiệp đang xây dựng hệ thống quản lý đơn hàng với giao diện web và đang tìm kiếm cơ sở dữ liệu giao dịch thời gian thực. Dịch vụ nào đáp ứng tốt nhất nhu cầu của họ?

A. Amazon DocumentDB (tương thích với MongoDB)

B. Amazon Redshift

C. Amazon DynamoDB

D. Amazon Neptune

**Đáp án: C. Amazon DynamoDB**

---

**Câu 4:** Một công ty game nhỏ đang thiết kế trò chơi trực tuyến, nơi hàng nghìn người chơi có thể tạo các vật phẩm trong game. Thiết kế hiện tại sử dụng cơ sở dữ liệu MySQL trong Amazon RDS để lưu trữ dữ liệu cho các vật phẩm do người chơi tạo ra. Những tính năng vật phẩm trò chơi trực tuyến nào được đề xuất có thể khiến Amazon DynamoDB trở thành giải pháp tốt hơn? (Chọn HAI.)

A. Các vật phẩm game có thể được sửa đổi bằng dữ liệu chứa trong các bảng khác

B. Lượng đọc cao đối với các vật phẩm do người chơi tạo ra và lượng ghi thấp

C. Các thuộc tính vật phẩm không thể đoán trước cho các vật phẩm do người chơi tạo ra

D. Một tập hợp các thuộc tính vật phẩm chung cho các vật phẩm do người chơi tạo ra

E. Các mục dữ liệu game bao gồm dữ liệu nhị phân và có thể vượt quá 700 MB

**Đáp án: B. Lượng đọc cao đối với các vật phẩm do người chơi tạo ra và lượng ghi thấp và C. Các thuộc tính vật phẩm không thể đoán trước cho các vật phẩm do người chơi tạo ra**

---

**Câu 5:** Một tổ chức lo ngại về sự gia tăng gian lận. Dịch vụ nào có thể giúp xây dựng các truy vấn cơ sở dữ liệu đồ thị (graph database) thời gian thực để phát hiện gian lận?

A. Amazon Redshift

B. Amazon RDS

C. Amazon Neptune

D. Amazon DynamoDB

**Đáp án: C. Amazon Neptune**

---

**Câu 6:** Một kỹ sư dữ liệu phải lưu trữ cơ sở dữ liệu Microsoft SQL Server mới trên AWS cho một dự án. Dịch vụ nào có thể giúp họ hoàn thành nhiệm vụ này?

A. Amazon DocumentDB (tương thích với MongoDB)

B. Amazon Aurora

C. Amazon DynamoDB

D. Amazon Neptune

**Đáp án: B. Amazon Aurora**

---

**Câu 7:** Những kỹ thuật nào nên được sử dụng để bảo mật cơ sở dữ liệu Amazon RDS? (Chọn BA.)

A. Cổng riêng ảo (Virtual private gateway - VGW) để lọc lưu lượng từ các mạng bị hạn chế

B. Điểm cuối gateway Amazon Virtual Private Cloud (Amazon VPC) để ngăn lưu lượng đi qua internet

C. Đám mây riêng ảo (VPC) để cung cấp cách ly instance

D. Nhóm bảo mật (Security groups) để kiểm soát truy cập mạng vào từng RDS instance

E. Mã hóa cả khi lưu trữ (at rest) và trong quá trình truyền (in transit) để bảo vệ dữ liệu nhạy cảm

F. Chính sách AWS Identity and Access Management (IAM) để xác định quyền truy cập ở cấp độ bảng, hàng và cột

**Đáp án: C. Đám mây riêng ảo (VPC) để cung cấp cách ly instance, D. Nhóm bảo mật để kiểm soát truy cập mạng vào từng RDS instance và E. Mã hóa cả khi lưu trữ và trong quá trình truyền để bảo vệ dữ liệu nhạy cảm**

---

**Câu 8:** Những kỹ thuật nào nên được sử dụng để bảo mật Amazon DynamoDB? (Chọn BA.)

A. Mã hóa để bảo vệ dữ liệu nhạy cảm

B. Nhóm bảo mật (Security groups) để kiểm soát truy cập mạng vào từng instance

C. Điểm cuối gateway Amazon Virtual Private Cloud (Amazon VPC) để ngăn lưu lượng đi qua internet

D. Chính sách AWS Identity and Access Management (IAM) để xác định quyền truy cập ở cấp độ bảng, mục hoặc thuộc tính

E. Đám mây riêng ảo (VPC) để cung cấp cách ly instance và bảo vệ tường lửa

F. Cổng riêng ảo (VGW) để lọc lưu lượng từ các mạng bị hạn chế

**Đáp án: A. Mã hóa để bảo vệ dữ liệu nhạy cảm, C. Điểm cuối gateway Amazon VPC để ngăn lưu lượng đi qua internet và D. Chính sách IAM để xác định quyền truy cập ở cấp độ bảng, mục hoặc thuộc tính**

---

**Câu 9:** Một công ty muốn di chuyển cơ sở dữ liệu Oracle tại chỗ sang Amazon Aurora MySQL. Quy trình nào mô tả các bước cấp cao chính xác nhất?

A. Sử dụng AWS Schema Conversion Tool (AWS SCT) để chuyển đổi schema, sau đó sử dụng AWS Database Migration Service (AWS DMS) để di chuyển dữ liệu.

B. Sử dụng AWS Schema Conversion Tool (AWS SCT) để đồng thời chuyển đổi schema và di chuyển dữ liệu.

C. Sử dụng AWS Database Migration Service (AWS DMS) để di chuyển trực tiếp từ cơ sở dữ liệu Oracle sang Amazon Aurora MySQL.

D. Sử dụng AWS Database Migration Service (AWS DMS) để di chuyển dữ liệu, sau đó sử dụng AWS Schema Conversion Tool (AWS SCT) để chuyển đổi schema.

**Đáp án: A. Sử dụng AWS Schema Conversion Tool (AWS SCT) để chuyển đổi schema, sau đó sử dụng AWS Database Migration Service (AWS DMS) để di chuyển dữ liệu.**

---

**Câu 10:** Một kiến trúc sư đám mây đang thiết lập ứng dụng sử dụng Amazon RDS MySQL DB instance. Cơ sở dữ liệu phải được kiến trúc để có tính sẵn sàng cao trên nhiều Vùng sẵn sàng (Availability Zone) và các AWS Region với thời gian ngừng hoạt động tối thiểu. Họ nên đáp ứng yêu cầu này như thế nào?

A. Thiết lập RDS MySQL Single-AZ DB instance. Sao chép các snapshot tự động sang ít nhất một Region khác.

B. Thiết lập RDS MySQL Single-AZ DB instance. Cấu hình read replica ở một Region khác.

C. Thiết lập RDS MySQL Multi-AZ DB instance. Cấu hình cửa sổ sao lưu phù hợp.

D. Thiết lập RDS MySQL Multi-AZ DB instance. Cấu hình read replica ở một Region khác.

**Đáp án: D. Thiết lập RDS MySQL Multi-AZ DB instance. Cấu hình read replica ở một Region khác.**
