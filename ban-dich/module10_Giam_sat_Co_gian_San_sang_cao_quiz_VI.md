# Module 10: Triển khai Giám sát, Tính co giãn và Tính sẵn sàng cao - AWS

---

**Câu 1:** Phát biểu nào về Amazon EC2 Auto Scaling là chính xác?

A. Nó có thể khởi chạy các Amazon EC2 instance trên nhiều Vùng sẵn sàng (Availability Zone).

B. Nó có thể khởi chạy các Amazon EC2 instance, nhưng khách hàng phải tự chấm dứt các instance khi không còn cần thiết.

C. Nó yêu cầu khách hàng chỉ sử dụng Reserved Instances.

D. Nó có thể khởi chạy các Amazon EC2 instance mới dựa trên lịch trình.

**Đáp án: A. Nó có thể khởi chạy các Amazon EC2 instance trên nhiều Vùng sẵn sàng (Availability Zone).**

---

**Câu 2:** Một kỹ sư DevOps phát hiện rằng nhu cầu đối với một nhóm Amazon EC2 instance trong Auto Scaling group tăng một lượng cố định vào các ngày cuối tuần. Loại tự động mở rộng nào PHÙ HỢP NHẤT trong trường hợp này?

A. Động (Dynamic)

B. Thủ công (Manual)

C. Theo lịch trình (Scheduled)

D. Dự đoán (Predictive)

**Đáp án: C. Theo lịch trình (Scheduled)**

---

**Câu 3:** Một kỹ sư DevOps khởi chạy một nhóm Amazon EC2 instance trong Auto Scaling group phía sau Application Load Balancer. Các EC2 instance phải duy trì mức sử dụng CPU trung bình 50%. Loại tự động mở rộng nào phù hợp để sử dụng dựa trên mức sử dụng CPU?

A. Mở rộng thủ công (Manual scaling)

B. Mở rộng theo bước (Step scaling)

C. Mở rộng đơn giản (Simple scaling)

D. Mở rộng theo dõi mục tiêu (Target tracking scaling)

**Đáp án: D. Mở rộng theo dõi mục tiêu (Target tracking scaling)**

---

**Câu 4:** Người dùng có thể mở rộng theo chiều dọc (vertically scale) cơ sở dữ liệu Amazon RDS như thế nào?

A. Bằng cách thêm các read replica

B. Bằng cách tạo các nút đọc và ghi chuyên dụng

C. Bằng cách phân mảnh cơ sở dữ liệu (sharding)

D. Bằng cách thay đổi lớp hoặc kích thước instance

**Đáp án: D. Bằng cách thay đổi lớp hoặc kích thước instance**

---

**Câu 5:** Khách hàng AWS có thể mở rộng theo chiều ngang (horizontally scale) cơ sở dữ liệu Amazon Aurora như thế nào?

A. Bằng cách thay đổi loại instance

B. Bằng cách tạo chính sách mở rộng

C. Bằng cách thêm các Aurora Replica instance sử dụng Aurora Auto Scaling

D. Bằng cách tạo các cảnh báo Amazon CloudWatch

**Đáp án: C. Bằng cách thêm các Aurora Replica instance sử dụng Aurora Auto Scaling**

---

**Câu 6:** Amazon DynamoDB thực hiện tự động mở rộng như thế nào?

A. Nó thay đổi loại instance để phản hồi các thay đổi về tải xử lý.

B. Nó điều chỉnh dung lượng thông lượng được cung cấp để phản hồi các mẫu lưu lượng.

C. Nó thêm và xóa các database instance để phản hồi các thay đổi về lưu lượng.

D. Nó thêm các read replica để phản hồi nhu cầu đọc tăng cao.

**Đáp án: B. Nó điều chỉnh dung lượng thông lượng được cung cấp để phản hồi các mẫu lưu lượng.**

---

**Câu 7:** Một nhóm Amazon EC2 instance được khởi chạy trong Amazon EC2 Auto Scaling group. Các instance chạy ứng dụng sử dụng giao thức tùy chỉnh trên cổng TCP 42000. Các kết nối từ hệ thống máy khách trên internet phải được cân bằng tải trên các instance. Giải pháp cân bằng tải nào là tốt nhất?

A. Gateway Load Balancer

B. Network Load Balancer

C. Classic Load Balancer

D. Application Load Balancer

**Đáp án: B. Network Load Balancer**

---

**Câu 8:** Một công ty phải xây dựng trang web có tính sẵn sàng cao sử dụng script phía máy chủ để phục vụ HTML động. Giải pháp nào cung cấp tính sẵn sàng CAO NHẤT với chi phí và độ phức tạp THẤP NHẤT?

A. Auto Scaling group khởi chạy các Amazon EC2 instance được phục vụ bởi Network Load Balancer. Amazon Route 53 sử dụng định tuyến dựa trên độ trễ.

B. Auto Scaling group khởi chạy các Amazon EC2 instance được phục vụ bởi Application Load Balancer. Phân giải tên DNS trỏ đến load balancer.

C. Khách hàng triển khai máy chủ web thứ hai ở Region khác. Amazon Route 53 sử dụng định tuyến chuyển đổi dự phòng (failover routing) để khắc phục thảm họa.

D. Amazon S3 lưu trữ trang web. Phân giải tên DNS trỏ đến S3 bucket.

**Đáp án: B. Auto Scaling group khởi chạy các Amazon EC2 instance được phục vụ bởi Application Load Balancer. Phân giải tên DNS trỏ đến load balancer.**

---

**Câu 9:** Người dùng ở vị trí A kết nối với ứng dụng ở Region A. Người dùng ở vị trí B kết nối với cùng ứng dụng ở Region B. Nếu ứng dụng ở Region A trở nên không khỏe mạnh, lưu lượng của vị trí A phải được chuyển hướng đến ứng dụng ở Region B. Giải pháp nào đáp ứng yêu cầu này?

A. Sử dụng định tuyến địa lý gần (geoproximity routing) và Network Load Balancer được gắn với cả hai Region.

B. Sử dụng định tuyến theo vị trí địa lý (geolocation routing) với các bản ghi chuyển đổi dự phòng (failover records) trong Amazon Route 53.

C. Sử dụng Application Load Balancer với các cảnh báo Amazon CloudWatch.

D. Sử dụng định tuyến dựa trên độ trễ (latency-based routing) trong Amazon Route 53 với các cảnh báo Amazon CloudWatch.

**Đáp án: B. Sử dụng định tuyến theo vị trí địa lý với các bản ghi chuyển đổi dự phòng trong Amazon Route 53.**

---

**Câu 10:** Một kỹ sư phần mềm đã tạo tài khoản AWS cho mục đích phát triển và kiểm thử cá nhân. Họ muốn tài khoản nằm trong Bậc miễn phí AWS (AWS Free Tier) và không phát sinh chi phí bất ngờ. Cách tiếp cận nào sẽ hoạt động và yêu cầu ÍT NỖ LỰC NHẤT?

A. Tạo chính sách kiểm soát dịch vụ (SCP) để hạn chế tất cả các dịch vụ không thuộc AWS Free Tier.

B. Đăng nhập vào AWS Management Console mỗi tháng và kiểm tra bảng điều khiển thanh toán.

C. Tạo cảnh báo Amazon CloudWatch để gửi email khi thanh toán tài khoản vượt quá $0.

D. Tạo chỉ số Amazon CloudWatch để theo dõi thanh toán tài khoản và giới hạn ở mức $0.

**Đáp án: C. Tạo cảnh báo Amazon CloudWatch để gửi email khi thanh toán tài khoản vượt quá $0.**
