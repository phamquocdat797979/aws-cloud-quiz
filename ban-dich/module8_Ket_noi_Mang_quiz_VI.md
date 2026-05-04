# Module 8: Kết nối các Mạng - AWS

---

**Câu 1:** Cách đơn giản nhất để kết nối 100 đám mây riêng ảo (VPC) với nhau là gì?

A. Kết nối các VPC với AWS Transit Gateway.

B. Kết nối từng VPC với tất cả các VPC khác bằng VPC peering.

C. Kết nối chuỗi các VPC với nhau bằng VPC peering.

D. Tạo mạng hub-and-spoke bằng AWS VPN CloudHub.

**Đáp án: A. Kết nối các VPC với AWS Transit Gateway.**

---

**Câu 2:** Một công ty cần lưu lượng mạng chạy giữa tài khoản AWS ở một Region sang tài khoản khác ở một Region khác. Họ nên thiết lập gì giữa các transit gateway ở mỗi Region?

A. AWS Direct Connect

B. Kết nối peering transit gateway (Transit gateway peering attachment)

C. AWS PrivateLink

D. AWS Site-to-Site VPN

**Đáp án: B. Kết nối peering transit gateway (Transit gateway peering attachment)**

---

**Câu 3:** Một công ty có hai VPC. VPC A có khối CIDR là 10.1.0.0/16. VPC B có khối CIDR là 10.2.0.0/16. Cả hai VPC đều thuộc cùng tài khoản AWS. Cách đơn giản nhất để kết nối hai VPC để chúng có thể định tuyến tất cả lưu lượng giữa chúng là gì?

A. VPC peering

B. VPC endpoints

C. AWS Site-to-Site VPN

D. AWS Direct Connect

**Đáp án: A. VPC peering**

---

**Câu 4:** Các hệ thống trong subnet bảo mật của VPC phải truy cập bucket trong Amazon S3. Những giải pháp nào ngăn lưu lượng đi qua internet? (Chọn HAI.)

A. Tạo VPC gateway endpoint cho Amazon S3.

B. Sử dụng VPC interface endpoints.

C. Sử dụng địa chỉ IP riêng tư cho hệ thống.

D. Sử dụng địa chỉ IP riêng tư của Amazon S3.

E. Tạo kết nối VPC peering đến Amazon S3.

**Đáp án: A. Tạo VPC gateway endpoint cho Amazon S3 và B. Sử dụng VPC interface endpoints.**

---

**Câu 5:** Một công ty có ba VPC. VPC A, B và C có các khối CIDR không chồng lấp nhau. Cả A và C đều có kết nối VPC peering riêng biệt với B. Tuy nhiên, A không thể giao tiếp với C. Cách đơn giản và tiết kiệm chi phí nhất để cho phép giao tiếp đầy đủ giữa A và C là gì?

A. Thêm các tuyến vào B để cho phép lưu lượng giữa A và C đi qua B.

B. Thêm kết nối peering giữa A và C, và định tuyến lưu lượng giữa A và C qua kết nối peering đó.

C. Tạo VPC endpoints trong A và C cho các máy chủ riêng lẻ cần giao tiếp với nhau.

D. Liên kết cả ba VPC thông qua transit VPC và định tuyến tất cả lưu lượng qua transit VPC.

**Đáp án: B. Thêm kết nối peering giữa A và C, và định tuyến lưu lượng giữa A và C qua kết nối peering đó.**

---

**Câu 6:** Do một thảm họa thiên nhiên, một công ty đã chuyển trung tâm dữ liệu phụ đến một cơ sở tạm thời có kết nối internet. Họ cần kết nối bảo mật đến VPC của công ty và kết nối phải hoạt động sớm nhất có thể. Trung tâm dữ liệu sẽ di chuyển lại sau 2 tuần. Tùy chọn nào đáp ứng các yêu cầu?

A. AWS Direct Connect

B. VPC endpoints

C. AWS Site-to-Site VPN

D. VPC peering

**Đáp án: C. AWS Site-to-Site VPN**

---

**Câu 7:** Một công ty lo ngại về sự gián đoạn internet. Họ muốn định tuyến lưu lượng hiệu quả từ mạng tại chỗ đến edge location AWS gần thiết bị customer gateway của họ nhất. Họ nên sử dụng gì?

A. AWS Transit Gateway

B. AWS VPN CloudHub

C. AWS Direct Connect

D. AWS Global Accelerator

**Đáp án: C. AWS Direct Connect**

---

**Câu 8:** Một công ty đang triển khai hệ thống sao lưu các hệ thống tại chỗ lên AWS. Phương pháp kết nối mạng nào cung cấp giải pháp với hiệu suất ổn định nhất?

A. Kết nối ngang hàng VPC (VPC peering)

B. Điểm cuối VPC (VPC endpoints)

C. AWS Site-to-Site VPN

D. AWS Direct Connect

**Đáp án: D. AWS Direct Connect**

---

**Câu 9:** Một công ty sử dụng kết nối AWS Direct Connect đơn lẻ giữa mạng tại chỗ và VPC của họ. Họ muốn đảm bảo kết nối mạng có tính sẵn sàng cao bằng cách thêm kết nối dự phòng. Phương pháp kết nối mạng nào cung cấp giải pháp tiết kiệm chi phí nhất cho kết nối dự phòng?

A. Kết nối AWS Client VPN theo yêu cầu qua internet

B. Kết nối AWS Direct Connect khác qua cùng vị trí Direct Connect

C. Kết nối AWS Site-to-Site VPN theo yêu cầu qua internet

D. Kết nối AWS Direct Connect khác qua vị trí Direct Connect khác

**Đáp án: C. Kết nối AWS Site-to-Site VPN theo yêu cầu qua internet**

---

**Câu 10:** Một công ty đang kết nối VPC với nhiều trung tâm dữ liệu tại chỗ bằng mạng riêng ảo (VPN). Triển khai nào đảm bảo khả năng phục hồi và yêu cầu băng thông có thể dự đoán được?

A. Triển khai Direct Connect làm kết nối chính và sử dụng VPN làm kết nối dự phòng thứ cấp từ mỗi trung tâm dữ liệu.

B. Triển khai AWS Transit Gateway để kết nối với từng trung tâm dữ liệu tại chỗ.

C. Thiết lập nhiều phiên Border Gateway Protocol (BGP) cho mỗi VPC để tạo kết nối đến nhiều VPC trên nhiều AWS Region.

D. Sử dụng cấu trúc liên kết many-to-many mesh như Amazon VPC peering.

**Đáp án: A. Triển khai Direct Connect làm kết nối chính và sử dụng VPN làm kết nối dự phòng thứ cấp từ mỗi trung tâm dữ liệu.**
