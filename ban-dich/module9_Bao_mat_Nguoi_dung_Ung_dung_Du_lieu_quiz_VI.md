# Module 9: Bảo mật Quyền Truy cập của Người dùng, Ứng dụng và Dữ liệu - AWS

---

**Câu 1:** Những đặc điểm nào là của nhóm (group) trong AWS Identity and Access Management (IAM)? (Chọn HAI.)

A. Quyền trong chính sách nhóm luôn ghi đè quyền trong chính sách người dùng.

B. Một người dùng có thể thuộc nhiều nhóm.

C. Một nhóm có thể thuộc nhóm khác.

D. Một nhóm có thể có thông tin xác thực bảo mật.

E. Người dùng mới được thêm vào nhóm sẽ kế thừa các quyền của nhóm.

**Đáp án: B. Một người dùng có thể thuộc nhiều nhóm và E. Người dùng mới được thêm vào nhóm sẽ kế thừa các quyền của nhóm.**

---

**Câu 2:** Ưu điểm của việc sử dụng kiểm soát truy cập dựa trên thuộc tính (ABAC) so với kiểm soát truy cập dựa trên vai trò (RBAC) là gì?

A. ABAC có thể sẽ yêu cầu ít chính sách hơn RBAC.

B. ABAC yêu cầu kiểm tra ít hơn RBAC.

C. Quyền ABAC xác định rõ ràng các tài nguyên mà chúng bảo vệ.

D. Quyền ABAC bảo mật hơn quyền RBAC.

**Đáp án: A. ABAC có thể sẽ yêu cầu ít chính sách hơn RBAC.**

---

**Câu 3:** Một nhà phát triển là thành viên của nhóm AWS Identity and Access Management (IAM) có chính sách nhóm được đính kèm. Chính sách nhóm cho phép truy cập Amazon S3 và Amazon EC2, đồng thời từ chối truy cập Amazon Elastic Container Service (Amazon ECS). Nhà phát triển cũng có chính sách người dùng cho phép truy cập Amazon ECS và Amazon CloudFront. Tùy chọn nào mô tả quyền truy cập của người dùng?

A. Truy cập Amazon S3, Amazon EC2, Amazon ECS và Amazon CloudFront

B. Truy cập Amazon ECS và Amazon CloudFront, nhưng không có quyền truy cập Amazon S3 và Amazon EC2

C. Truy cập Amazon S3 và Amazon EC2, nhưng không có quyền truy cập Amazon ECS và Amazon CloudFront

D. Truy cập Amazon S3, Amazon EC2 và Amazon CloudFront, nhưng không có quyền truy cập Amazon ECS

**Đáp án: D. Truy cập Amazon S3, Amazon EC2 và Amazon CloudFront, nhưng không có quyền truy cập Amazon ECS**

---

**Câu 4:** Lợi ích của liên kết danh tính (identity federation) với AWS Cloud là gì?

A. Cho phép sử dụng nhà cung cấp danh tính bên ngoài để xác thực người dùng lực lượng lao động và cấp cho họ quyền truy cập vào các tài nguyên AWS.

B. Tập trung lưu trữ và quản lý danh tính người dùng bên trong AWS Cloud.

C. Loại bỏ nhu cầu xác định quyền trong AWS Identity and Access Management (IAM) để bảo mật quyền truy cập vào các tài nguyên AWS.

D. Gán vai trò cho người dùng đã được xác thực để kiểm soát quyền truy cập của họ vào các tài nguyên AWS.

**Đáp án: A. Cho phép sử dụng nhà cung cấp danh tính bên ngoài để xác thực người dùng lực lượng lao động và cấp cho họ quyền truy cập vào các tài nguyên AWS.**

---

**Câu 5:** Dịch vụ nào cho phép liên kết danh tính để truy cập ứng dụng web chạy trong AWS Cloud?

A. AWS Key Management Service (AWS KMS)

B. AWS CloudHSM

C. Amazon Cognito

D. AWS WAF

**Đáp án: C. Amazon Cognito**

---

**Câu 6:** Dịch vụ nào giúp quản lý tập trung việc thanh toán, kiểm soát truy cập, tuân thủ và bảo mật, đồng thời chia sẻ tài nguyên trên nhiều tài khoản AWS?

A. AWS Systems Manager

B. AWS Identity and Access Management (IAM)

C. AWS Organizations

D. Amazon Cognito

**Đáp án: C. AWS Organizations**

---

**Câu 7:** Một công ty công nghệ có nhiều tài khoản sản xuất được nhóm vào một đơn vị tổ chức (OU) sản xuất trong AWS Organizations. Công ty muốn ngăn tất cả người dùng IAM trong các tài khoản sản xuất xóa nhật ký AWS CloudTrail. Quản trị viên hệ thống có thể thực thi hạn chế này như thế nào?

A. Tạo chính sách bucket Amazon S3 và liên kết với tất cả các bucket chứa nhật ký AWS CloudTrail.

B. Tạo chính sách thẻ (tag policy) và đính kèm vào các tài khoản sản xuất.

C. Tạo chính sách kiểm soát dịch vụ (SCP) và đính kèm vào OU sản xuất.

D. Tạo chính sách IAM và đính kèm vào từng người dùng IAM trong các tài khoản sản xuất.

**Đáp án: C. Tạo chính sách kiểm soát dịch vụ (SCP) và đính kèm vào OU sản xuất.**

---

**Câu 8:** Một nhà phát triển đang viết ứng dụng máy khách mã hóa dữ liệu nhạy cảm bằng khóa dữ liệu trước khi gửi đến ứng dụng máy chủ. Ứng dụng máy khách gửi khóa dữ liệu đến ứng dụng máy chủ để ứng dụng máy chủ có thể giải mã thông tin nhạy cảm. Nhà phát triển lo ngại rằng tính bảo mật của dữ liệu nhạy cảm có thể bị xâm phạm nếu khóa dữ liệu bị đánh cắp. Nhà phát triển nên sử dụng loại mã hóa nào để bảo vệ đầy đủ thông tin nhạy cảm?

A. Mã hóa đối xứng (Symmetric encryption)

B. Mã hóa bất đối xứng (Asymmetric encryption)

C. Mã hóa phong bì (Envelope encryption)

D. Mã hóa phía máy chủ (Server-side encryption)

**Đáp án: C. Mã hóa phong bì (Envelope encryption)**

---

**Câu 9:** AWS Key Management Service (AWS KMS) cung cấp những chức năng nào? (Chọn HAI.)

A. Xoay vòng khóa (Rotate keys)

B. Tạo khóa truy cập AWS Identity and Access Management (IAM)

C. Xác thực người dùng bên ngoài

D. Lưu trữ dữ liệu được mã hóa

E. Tạo khóa đối xứng và bất đối xứng

**Đáp án: A. Xoay vòng khóa và E. Tạo khóa đối xứng và bất đối xứng**

---

**Câu 10:** Dịch vụ AWS nào phát hiện và bảo vệ thông tin nhạy cảm được lưu trữ trên Amazon S3 trong tài khoản AWS?

A. AWS Audit Manager

B. AWS Resource Access Manager (AWS RAM)

C. Amazon Macie

D. Amazon Detective

**Đáp án: C. Amazon Macie**
