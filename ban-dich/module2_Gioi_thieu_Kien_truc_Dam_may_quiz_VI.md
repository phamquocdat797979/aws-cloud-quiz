# Module 2: Giới thiệu Kiến trúc Điện toán Đám mây - AWS

---

**Câu 1:** Định nghĩa nào sau đây mô tả chính xác nhất về kiến trúc đám mây?

A. Áp dụng các đặc điểm của đám mây vào giải pháp sử dụng các dịch vụ và tính năng đám mây để đáp ứng các yêu cầu kỹ thuật và kinh doanh

B. Thiết kế ứng dụng trên hạ tầng CNTT dùng chung trên nền đám mây bằng cách sử dụng máy ảo và kho dữ liệu chịu lỗi trong đám mây

C. Di chuyển các trung tâm dữ liệu truyền thống tại chỗ sang các trung tâm dữ liệu có thể truy cập qua internet do nhà cung cấp quản lý

D. Kết hợp phần mềm và thành phần frontend và backend để tạo ra các dịch vụ web có tính khả dụng cao và khả năng mở rộng đáp ứng nhu cầu của tổ chức

**Đáp án: A. Áp dụng các đặc điểm của đám mây vào giải pháp sử dụng các dịch vụ và tính năng đám mây để đáp ứng các yêu cầu kỹ thuật và kinh doanh**

---

**Câu 2:** Khung Kiến trúc Tốt của AWS (AWS Well-Architected Framework) có sáu trụ cột. Ba trong số đó là bảo mật (security), xuất sắc vận hành (operational excellence) và bền vững (sustainability). Hai trụ cột nào còn lại thuộc Khung Kiến trúc Tốt? (Chọn HAI.)

A. Tối ưu hóa chi phí (Cost optimization)

B. Quyền riêng tư (Privacy)

C. Độ tin cậy (Reliability)

D. Quản lý rủi ro (Risk management)

E. Quản trị (Governance)

**Đáp án: A. Tối ưu hóa chi phí và C. Độ tin cậy**

---

**Câu 3:** Những hành động nào phù hợp với trụ cột xuất sắc vận hành (operational excellence) của Khung Kiến trúc Tốt AWS? (Chọn HAI.)

A. Lập kế hoạch và quản lý toàn bộ vòng đời của các tài sản phần cứng.

B. Đảm bảo nhân viên vận hành ghi lại các thay đổi đối với hạ tầng.

C. Đánh giá cơ cấu tổ chức và vai trò để xác định khoảng cách về kỹ năng.

D. Xem xét và cải thiện quy trình và thủ tục theo chu kỳ liên tục.

E. Áp dụng các nguyên tắc và phương pháp kỹ thuật phần mềm vào hạ tầng dưới dạng mã (infrastructure as code).

**Đáp án: D. Xem xét và cải thiện quy trình và thủ tục theo chu kỳ liên tục và E. Áp dụng các nguyên tắc và phương pháp kỹ thuật phần mềm vào hạ tầng dưới dạng mã.**

---

**Câu 4:** Một ứng dụng cụ thể yêu cầu tầng web frontend gồm nhiều máy chủ giao tiếp với tầng ứng dụng backend gồm nhiều máy chủ. Thiết kế nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?

A. Thiết kế tầng web giao tiếp với tầng ứng dụng thông qua dịch vụ Elastic Load Balancing (ELB).

B. Tạo mạng lưới đầy đủ (full mesh network) giữa tầng web và tầng ứng dụng, để mỗi máy chủ web có thể giao tiếp trực tiếp với mọi máy chủ ứng dụng.

C. Tạo nhiều phiên bản (instance) kết hợp cả frontend web và backend ứng dụng trong cùng một instance.

D. Gán một máy chủ ứng dụng chuyên dụng và một kết nối chuyên dụng cho mỗi máy chủ web.

**Đáp án: A. Thiết kế tầng web giao tiếp với tầng ứng dụng thông qua dịch vụ Elastic Load Balancing (ELB).**

---

**Câu 5:** Một kiến trúc sư giải pháp đang xây dựng quy trình xử lý sự cố máy chủ. Quy trình nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?

A. Amazon CloudWatch phát hiện sự cố hệ thống. Nó khởi động tự động hóa để cung cấp một máy chủ mới.

B. Amazon CloudWatch phát hiện sự cố hệ thống. Nó thông báo cho quản trị viên hệ thống, người này sẽ cung cấp máy chủ mới bằng AWS Management Console.

C. Nhân viên vận hành phát hiện sự cố hệ thống. Họ khởi động tự động hóa để cung cấp một máy chủ mới.

D. Nhân viên vận hành phát hiện sự cố hệ thống. Họ thông báo cho quản trị viên hệ thống, người này sẽ cung cấp máy chủ mới bằng AWS Management Console.

**Đáp án: A. Amazon CloudWatch phát hiện sự cố hệ thống. Nó khởi động tự động hóa để cung cấp một máy chủ mới.**

---

**Câu 6:** Một công ty đang cân nhắc chuyển trung tâm dữ liệu tại chỗ lên đám mây. Động lực chính của họ là tăng hiệu quả chi phí. Cách tiếp cận nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?

A. Cung cấp một số máy chủ trên đám mây và đảm bảo các máy chủ chạy 24/7.

B. Sao chép lại trung tâm dữ liệu tại chỗ của họ lên đám mây.

C. Cung cấp các máy chủ khi cần thiết và dừng dịch vụ khi không sử dụng.

D. Duy trì trung tâm dữ liệu tại chỗ càng lâu càng tốt.

**Đáp án: C. Cung cấp các máy chủ khi cần thiết và dừng dịch vụ khi không sử dụng.**

---

**Câu 7:** Một công ty lưu trữ dữ liệu chỉ đọc (read-only) trong Amazon S3. Hầu hết người dùng ở cùng quốc gia với trụ sở công ty. Một số người dùng ở khắp nơi trên thế giới. Quyết định thiết kế nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?

A. Sử dụng bucket ở Region có độ trễ trung bình thấp nhất cho tất cả người dùng.

B. Sao chép các đối tượng sang các bucket ở các Region AWS trên toàn thế giới. Người dùng truy cập bucket ở Region gần nhất với họ.

C. Sử dụng bucket ở Region AWS gần trụ sở công ty nhất. Tất cả người dùng truy cập dữ liệu thông qua Amazon CloudFront.

D. Sử dụng bucket ở Region gần trụ sở công ty nhất.

**Đáp án: C. Sử dụng bucket ở Region AWS gần trụ sở công ty nhất. Tất cả người dùng truy cập dữ liệu thông qua Amazon CloudFront.**

---

**Câu 8:** Một chuyên gia tư vấn cần truy cập một đối tượng lớn trong bucket S3. Họ chỉ cần truy cập file trong một ngày. Phương pháp cấp quyền truy cập nào sau đây tuân thủ sát nhất các thực tiễn tốt nhất của AWS?

A. Sao chép đối tượng sang bucket S3 mới. Bật quyền truy cập công khai trên bucket mới. Lấy URL của đối tượng từ bucket mới và cung cấp cho chuyên gia tư vấn.

B. Tạo tài khoản người dùng cho chuyên gia tư vấn. Cấp quyền truy cập vào bucket S3 qua AWS Management Console.

C. Tạo URL có chữ ký sẵn (presigned URL) cho đối tượng với thời hạn 24 giờ và cung cấp cho chuyên gia tư vấn.

D. Bật quyền truy cập công khai trên bucket S3. Cung cấp URL đối tượng cho chuyên gia tư vấn.

**Đáp án: C. Tạo URL có chữ ký sẵn (presigned URL) cho đối tượng với thời hạn 24 giờ và cung cấp cho chuyên gia tư vấn.**

---

**Câu 9:** Những yếu tố nào là cân nhắc chính ảnh hưởng đến việc lựa chọn AWS Region? (Chọn HAI.)

A. Khả năng phục hồi ứng dụng trong quá trình xảy ra sự cố hệ thống

B. Tuân thủ các luật và quy định

C. Bảo vệ khỏi các thảm họa thiên nhiên cục bộ

D. Bảo mật và kiểm soát truy cập

E. Giảm độ trễ cho người dùng cuối

**Đáp án: B. Tuân thủ các luật và quy định và E. Giảm độ trễ cho người dùng cuối**

---

**Câu 10:** Những yếu tố nào là cân nhắc chính ảnh hưởng đến việc lựa chọn Vùng sẵn sàng (Availability Zone)? (Chọn HAI.)

A. Tuân thủ các luật và quy định

B. Khả năng phục hồi ứng dụng trong quá trình xảy ra sự cố hệ thống

C. Bảo vệ khỏi các thảm họa thiên nhiên cục bộ

D. Bảo mật và kiểm soát truy cập

E. Giảm độ trễ cho người dùng cuối

**Đáp án: B. Khả năng phục hồi ứng dụng trong quá trình xảy ra sự cố hệ thống và C. Bảo vệ khỏi các thảm họa thiên nhiên cục bộ**
