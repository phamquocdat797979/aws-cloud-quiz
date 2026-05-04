# Module 7: Tạo Môi trường Mạng - AWS

---

**Câu 1:** Định nghĩa nào mô tả đúng về đám mây riêng ảo (Virtual Private Cloud - VPC)?

A. Một mạng riêng ảo (VPN) trong AWS Cloud

B. Một mạng ảo được cách ly về mặt logic mà bạn định nghĩa trong AWS Cloud

C. Một dịch vụ được quản lý hoàn toàn mở rộng AWS Cloud đến cơ sở của khách hàng

D. Một phần mở rộng của mạng tại chỗ vào AWS

**Đáp án: B. Một mạng ảo được cách ly về mặt logic mà bạn định nghĩa trong AWS Cloud**

---

**Câu 2:** Thành phần nào sau đây không có quyền truy cập trực tiếp vào internet?

A. EC2 instance bên trong subnet riêng tư (private subnet)

B. Cổng dịch địa chỉ mạng (NAT gateway) bên trong subnet công khai (public subnet)

C. Giao diện địa chỉ IP đàn hồi (Elastic IP address)

D. EC2 instance bên trong subnet công khai

**Đáp án: A. EC2 instance bên trong subnet riêng tư (private subnet)**

---

**Câu 3:** VPC của một công ty có khối CIDR (Classless Inter-Domain Routing) là 172.16.0.0/21 (2048 địa chỉ). VPC có hai subnet (A và B). Mỗi subnet phải hỗ trợ 100 địa chỉ có thể sử dụng hiện tại, nhưng con số này dự kiến sẽ tăng lên tối đa 254 địa chỉ có thể sử dụng trong thời gian tới. Sơ đồ địa chỉ subnet nào đáp ứng các yêu cầu và tuân theo thực tiễn tốt nhất của AWS?

A. Subnet A: 172.16.0.0/25 (128 địa chỉ) — Subnet B: 172.16.0.128/25 (128 địa chỉ)

B. Subnet A: 172.16.0.0/22 (1024 địa chỉ) — Subnet B: 172.16.4.0/22 (1024 địa chỉ)

C. Subnet A: 172.16.0.0/23 (512 địa chỉ) — Subnet B: 172.16.2.0/23 (512 địa chỉ)

D. Subnet A: 172.16.0.0/24 (256 địa chỉ) — Subnet B: 172.16.1.0/24 (256 địa chỉ)

**Đáp án: D. Subnet A: 172.16.0.0/24 (256 địa chỉ) — Subnet B: 172.16.1.0/24 (256 địa chỉ)**

---

**Câu 4:** Một số EC2 instance được khởi chạy trong VPC có quyền truy cập internet. Các instance này không nên có thể truy cập được từ internet, nhưng phải có khả năng tải xuống các bản cập nhật từ internet. Các instance nên được khởi chạy như thế nào?

A. Với địa chỉ IP công khai, trong subnet có tuyến mặc định đến internet gateway

B. Không có địa chỉ IP công khai, trong subnet có tuyến mặc định đến internet gateway

C. Với địa chỉ IP đàn hồi (Elastic IP), trong subnet có tuyến mặc định đến internet gateway

D. Không có địa chỉ IP công khai, trong subnet có tuyến mặc định đến cổng dịch địa chỉ mạng (NAT gateway)

**Đáp án: D. Không có địa chỉ IP công khai, trong subnet có tuyến mặc định đến cổng dịch địa chỉ mạng (NAT gateway)**

---

**Câu 5:** Một nhóm chuyên gia tư vấn cần truy cập EC2 instance từ internet trong 3 ngày liên tiếp mỗi tuần. Instance bị tắt vào những thời điểm còn lại trong tuần. VPC có quyền truy cập internet. Bạn nên gán một địa chỉ IPv4 cho instance như thế nào để cấp quyền truy cập cho các chuyên gia tư vấn?

A. Liên kết một địa chỉ IP đàn hồi (Elastic IP address) với EC2 instance.

B. Bật tự động gán địa chỉ cho EC2 instance.

C. Gán địa chỉ IP trong cấu hình khởi động hệ điều hành (OS).

D. Bật tự động gán địa chỉ cho subnet.

**Đáp án: A. Liên kết một địa chỉ IP đàn hồi (Elastic IP address) với EC2 instance.**

---

**Câu 6:** Một ứng dụng sử dụng máy chủ bastion để cho phép truy cập vào các EC2 instance trong subnet riêng tư bên trong VPC. Những cấu hình nhóm bảo mật (security group) nào cho phép truy cập SSH từ địa chỉ IP nguồn đến các EC2 instance? (Chọn HAI.)

A. Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để cho phép lưu lượng trên cổng 22 từ địa chỉ IP nguồn của bạn.

B. Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để từ chối tất cả lưu lượng từ internet.

C. Thêm quy tắc vào nhóm bảo mật của EC2 instance để cho phép lưu lượng từ nhóm bảo mật của máy chủ bastion trên cổng 22.

D. Thêm quy tắc vào nhóm bảo mật của EC2 instance trong subnet riêng tư để cho phép lưu lượng trả về đến nhóm bảo mật của máy chủ bastion.

E. Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để cho phép lưu lượng trả về đến địa chỉ IP nguồn của bạn.

**Đáp án: A. Thêm quy tắc vào nhóm bảo mật của máy chủ bastion để cho phép lưu lượng trên cổng 22 từ địa chỉ IP nguồn của bạn và C. Thêm quy tắc vào nhóm bảo mật của EC2 instance để cho phép lưu lượng từ nhóm bảo mật của máy chủ bastion trên cổng 22.**

---

**Câu 7:** Một giải pháp được triển khai trong VPC cần một subnet có quyền truy cập hạn chế đến các địa chỉ internet cụ thể. Kiến trúc sư có thể cấu hình mạng như thế nào để hạn chế lưu lượng đến và đi từ các EC2 instance trong subnet bằng danh sách kiểm soát truy cập mạng (network ACL)?

A. Thêm các quy tắc vào ACL mạng tùy chỉnh của subnet để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép. Từ chối tất cả lưu lượng khác.

B. Thêm các quy tắc vào ACL mạng tùy chỉnh của subnet để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép.

C. Thêm các quy tắc vào ACL mạng mặc định để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép.

D. Thêm các quy tắc vào ACL mạng mặc định để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép. Từ chối tất cả lưu lượng khác.

**Đáp án: A. Thêm các quy tắc vào ACL mạng tùy chỉnh của subnet để cho phép lưu lượng đến và đi từ các địa chỉ internet được phép. Từ chối tất cả lưu lượng khác.**

---

**Câu 8:** Những hành động nào là thực tiễn tốt nhất khi thiết kế VPC? (Chọn BA.)

A. Sử dụng cùng khối CIDR với mạng tại chỗ của bạn.

B. Sử dụng cùng khối CIDR cho các subnet ở các Vùng sẵn sàng khác nhau thuộc cùng một nhóm AWS Auto Scaling.

C. Tạo một subnet cho mỗi Vùng sẵn sàng cho từng nhóm máy chủ có yêu cầu định tuyến riêng.

D. Khớp kích thước khối CIDR của VPC với số lượng máy chủ cần thiết cho khối lượng công việc.

E. Chia đều dải địa chỉ mạng VPC trên tất cả các Vùng sẵn sàng hiện có.

F. Dự trữ một số không gian địa chỉ để sử dụng trong tương lai.

**Đáp án: C. Tạo một subnet cho mỗi Vùng sẵn sàng cho từng nhóm máy chủ có yêu cầu định tuyến riêng, E. Chia đều dải địa chỉ mạng VPC trên tất cả các Vùng sẵn sàng hiện có và F. Dự trữ một số không gian địa chỉ để sử dụng trong tương lai.**

---

**Câu 9:** VPC flow logs có thể được gửi đến những đâu? (Chọn BA.)

A. Amazon Athena

B. Amazon Kinesis Data Firehose

C. Amazon OpenSearch Service

D. AWS Management Console

E. Amazon S3 bucket

F. Amazon CloudWatch

**Đáp án: B. Amazon Kinesis Data Firehose, E. Amazon S3 bucket và F. Amazon CloudWatch**

---

**Câu 10:** Một EC2 instance phải kết nối đến một Amazon S3 bucket. Thành phần nào cung cấp kết nối này mà không tốn thêm chi phí và không có giới hạn băng thông gói tin?

A. Điểm truy cập vùng công khai (Public region access point)

B. Điểm cuối gateway VPC (Gateway VPC endpoint)

C. Điểm cuối giao diện VPC (Interface VPC endpoint)

D. Điểm cuối Gateway Load Balancer (Gateway Load Balancer endpoint)

**Đáp án: B. Điểm cuối gateway VPC (Gateway VPC endpoint)**
