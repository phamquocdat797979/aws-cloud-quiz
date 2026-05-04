# Module 5: Thêm Tầng Tính toán với Amazon EC2 - AWS

---

**Câu 1:** Những thuộc tính nào là lý do để chọn Amazon EC2? (Chọn HAI.)

A. AWS quản lý các bản vá hệ điều hành (OS)

B. AWS quản lý bảo mật hệ điều hành (OS)

C. Khả năng chạy các ứng dụng serverless

D. Khả năng chạy bất kỳ loại khối lượng công việc nào

E. Toàn quyền kiểm soát tài nguyên tính toán

**Đáp án: D. Khả năng chạy bất kỳ loại khối lượng công việc nào và E. Toàn quyền kiểm soát tài nguyên tính toán**

---

**Câu 2:** Những lợi ích nào của việc sử dụng Amazon Machine Image (AMI)? (Chọn BA.)

A. Tự động hóa cài đặt nhóm bảo mật (security group) cho các instance

B. Sử dụng AMI làm bản sao lưu máy chủ cho các Amazon EC2 instance

C. Khởi chạy các instance với cùng cấu hình

D. Bán hoặc chia sẻ các giải pháp phần mềm được đóng gói dưới dạng AMI

E. Di chuyển dữ liệu từ môi trường tại chỗ sang các Amazon EC2 instance

F. Cập nhật hệ thống bằng cách vá AMI của chúng

**Đáp án: B. Sử dụng AMI làm bản sao lưu máy chủ cho các Amazon EC2 instance, C. Khởi chạy các instance với cùng cấu hình và D. Bán hoặc chia sẻ các giải pháp phần mềm được đóng gói dưới dạng AMI**

---

**Câu 3:** Một quản trị viên hệ thống phải thay đổi loại instance của nhiều Amazon EC2 instance đang chạy. Các instance được khởi chạy với hỗn hợp Amazon Machine Image (AMI) được hỗ trợ bởi Amazon Elastic Block Store (Amazon EBS) và AMI được hỗ trợ bởi instance store. Phương pháp nào là cách hợp lệ để thay đổi loại instance?

A. Dừng instance được hỗ trợ bởi instance store, thay đổi loại instance và khởi động lại instance.

B. Thay đổi loại instance của instance được hỗ trợ bởi Amazon EBS mà không cần dừng nó.

C. Dừng instance được hỗ trợ bởi Amazon EBS, thay đổi loại instance và khởi động lại instance.

D. Thay đổi loại instance của instance được hỗ trợ bởi instance store mà không cần dừng nó.

**Đáp án: C. Dừng instance được hỗ trợ bởi Amazon EBS, thay đổi loại instance và khởi động lại instance.**

---

**Câu 4:** Một khối lượng công việc yêu cầu truy cập đọc/ghi cao đối với các tập dữ liệu cục bộ lớn. Loại instance nào sẽ hoạt động TỐT NHẤT cho khối lượng công việc này? (Chọn HAI.)

A. Tối ưu hóa tính toán (Compute optimized)

B. Mục đích chung (General purpose)

C. Tối ưu hóa bộ nhớ (Memory optimized)

D. Tính toán tăng tốc (Accelerated computing)

E. Tối ưu hóa lưu trữ (Storage optimized)

**Đáp án: C. Tối ưu hóa bộ nhớ và E. Tối ưu hóa lưu trữ**

---

**Câu 5:** Một ứng dụng yêu cầu địa chỉ kiểm soát truy cập phương tiện (MAC) của Amazon EC2 instance máy chủ. Kiến trúc sử dụng nhóm AWS Auto Scaling để khởi chạy và chấm dứt các instance một cách linh hoạt. Cách TỐT NHẤT để ứng dụng lấy địa chỉ MAC là gì?

A. Đưa địa chỉ MAC vào AMI tùy chỉnh cho mỗi instance trong nhóm AWS Auto Scaling.

B. Sử dụng dữ liệu người dùng (user data) của mỗi instance để truy cập địa chỉ MAC thông qua metadata của instance.

C. Ghi địa chỉ MAC vào tệp cấu hình ứng dụng của mỗi instance.

D. Đưa địa chỉ MAC vào Amazon Machine Image (AMI) được sử dụng để khởi chạy tất cả các instance trong nhóm AWS Auto Scaling.

**Đáp án: B. Sử dụng dữ liệu người dùng (user data) của mỗi instance để truy cập địa chỉ MAC thông qua metadata của instance.**

---

**Câu 6:** Những phát biểu nào về dữ liệu người dùng (user data) là đúng? (Chọn HAI.)

A. Dữ liệu người dùng không thể chạy khi instance đang dừng.

B. Kiến trúc sư đám mây phải chạy lệnh /var/lib/cloud/instance/scripts/part-001 để script dữ liệu người dùng chạy lại.

C. Kiến trúc sư đám mây phải xóa tệp config_user_scripts để chạy lại các script dữ liệu người dùng.

D. Theo mặc định, dữ liệu người dùng chỉ chạy một lần khi instance được khởi chạy.

E. Theo mặc định, dữ liệu người dùng chạy sau mỗi lần khởi động lại instance.

**Đáp án: C. Kiến trúc sư đám mây phải xóa tệp config_user_scripts để chạy lại các script dữ liệu người dùng và D. Theo mặc định, dữ liệu người dùng chỉ chạy một lần khi instance được khởi chạy.**

---

**Câu 7:** Một khối lượng công việc giao dịch trên Amazon EC2 instance thực hiện nhiều thao tác đọc và ghi thường xuyên. Loại ổ đĩa Amazon Elastic Block Store (Amazon EBS) nào là TỐT NHẤT cho khối lượng công việc này?

A. Ổ đĩa cứng tối ưu hóa thông lượng (Throughput Optimized HDD)

B. Ổ đĩa thể rắn IOPS được cấp phát sẵn (Provisioned IOPS SSD)

C. Ổ đĩa thể rắn mục đích chung (General Purpose SSD)

D. Ổ đĩa cứng lạnh (Cold HDD)

**Đáp án: B. Ổ đĩa thể rắn IOPS được cấp phát sẵn (Provisioned IOPS SSD)**

---

**Câu 8:** Có thể tạo chia sẻ NFS trên instance Linux được hỗ trợ bởi Amazon Elastic Block Store (Amazon EBS) bằng cách cài đặt và cấu hình máy chủ NFS trên instance. Theo cách này, nhiều hệ thống Linux có thể chia sẻ hệ thống tệp của instance đó. Amazon Elastic File System (Amazon EFS) cung cấp những ưu điểm nào so với giải pháp này? (Chọn HAI.)

A. Tính sẵn sàng cao (High availability)

B. Không cần sao lưu

C. Khóa tệp (File locking)

D. Tự động mở rộng (Automatic scaling)

E. Tính nhất quán mạnh (Strong consistency)

**Đáp án: A. Tính sẵn sàng cao và D. Tự động mở rộng**

---

**Câu 9:** Amazon FSx for Windows File Server cung cấp tính năng nào?

A. Giải pháp sao lưu cho máy chủ tệp Windows tại chỗ

B. Tác nhân quản lý Amazon cho máy chủ tệp Windows

C. Máy chủ Microsoft Active Directory cho máy chủ tệp Windows

D. Máy chủ tệp Windows được quản lý hoàn toàn

**Đáp án: D. Máy chủ tệp Windows được quản lý hoàn toàn**

---

**Câu 10:** Những mô tả nào về các tùy chọn định giá Amazon EC2 là đúng? (Chọn HAI.)

A. Savings Plans là công cụ lập ngân sách giúp khách hàng quản lý chi phí Amazon EC2.

B. Dedicated Hosts là các máy chủ được dành riêng cho một mục đích, chẳng hạn như tường lửa.

C. Reserved Instances là các máy chủ vật lý được dành riêng cho khách hàng sử dụng độc quyền.

D. Với On-Demand Instances, khách hàng có thể trả tiền cho dung lượng tính toán theo thời gian sử dụng mà không cần cam kết dài hạn.

E. Spot Instances cung cấp dung lượng tính toán dự phòng với giá chiết khấu và có thể bị gián đoạn.

**Đáp án: D. Với On-Demand Instances, khách hàng có thể trả tiền cho dung lượng tính toán theo thời gian sử dụng mà không cần cam kết dài hạn và E. Spot Instances cung cấp dung lượng tính toán dự phòng với giá chiết khấu và có thể bị gián đoạn.**
