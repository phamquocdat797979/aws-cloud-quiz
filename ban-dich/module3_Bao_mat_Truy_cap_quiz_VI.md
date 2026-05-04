# Module 3: Bảo mật Quyền Truy cập - AWS

---

**Câu 1:** Phát biểu nào sau đây phản ánh nguyên tắc thiết kế của trụ cột bảo mật (security) trong Khung Kiến trúc Tốt AWS?

A. Không triển khai giải pháp lên môi trường sản xuất cho đến khi bạn chắc chắn rằng không tồn tại rủi ro bảo mật nào.

B. Phân cấp quản lý đặc quyền.

C. Đảm bảo nhân viên chủ động theo dõi các rủi ro tiềm ẩn theo cách thủ công.

D. Áp dụng bảo mật ở tất cả các tầng của kiến trúc.

**Đáp án: D. Áp dụng bảo mật ở tất cả các tầng của kiến trúc.**

---

**Câu 2:** Những phát biểu nào về trách nhiệm là chính xác dựa trên mô hình trách nhiệm chung của AWS? (Chọn HAI.)

A. Khách hàng chịu trách nhiệm quản lý dữ liệu người dùng của họ.

B. Khách hàng chịu trách nhiệm về việc cài đặt, bảo trì và ngừng sử dụng phần cứng tại trung tâm dữ liệu AWS.

C. AWS chịu trách nhiệm về bảo mật vật lý của các trung tâm dữ liệu.

D. AWS chịu trách nhiệm về cấu hình các nhóm bảo mật (security groups).

E. AWS chịu trách nhiệm về cấu hình tường lửa dựa trên máy chủ (host-based firewall).

**Đáp án: A. Khách hàng chịu trách nhiệm quản lý dữ liệu người dùng của họ và C. AWS chịu trách nhiệm về bảo mật vật lý của các trung tâm dữ liệu.**

---

**Câu 3:** Những tùy chọn nào là đặc điểm của nguyên tắc đặc quyền tối thiểu (principle of least privilege)? (Chọn HAI.)

A. Xây dựng các chính sách bảo mật giới hạn quyền truy cập vào các tác vụ cụ thể.

B. Luôn luôn sử dụng nhóm (groups).

C. Theo dõi các hành động và thay đổi.

D. Sử dụng mã hóa.

E. Chỉ cấp quyền truy cập khi thực sự cần thiết.

**Đáp án: A. Xây dựng các chính sách bảo mật giới hạn quyền truy cập vào các tác vụ cụ thể và E. Chỉ cấp quyền truy cập khi thực sự cần thiết.**

---

**Câu 4:** Phát biểu nào sau đây về AWS Identity and Access Management (IAM) là đúng?

A. IAM cung cấp nhật ký kiểm tra (audit trail) về ai đã thực hiện hành động, họ thực hiện hành động gì và khi nào.

B. IAM cung cấp một lớp bảo mật bổ sung bằng cách phát hiện các bất thường trên tài nguyên.

C. Với IAM, bạn có thể cấp cho các principal quyền truy cập chi tiết vào tài nguyên.

D. Với IAM, bạn có thể quản lý mã hóa cho các mục yêu cầu mã hóa khi lưu trữ (at rest).

**Đáp án: C. Với IAM, bạn có thể cấp cho các principal quyền truy cập chi tiết vào tài nguyên.**

---

**Câu 5:** Những phát biểu nào mô tả đúng về vai trò (roles) trong AWS Identity and Access Management (IAM)? (Chọn HAI.)

A. Chúng chỉ có thể được sử dụng bởi các tài khoản liên kết với người tạo ra vai trò.

B. Chúng được liên kết duy nhất với một cá nhân.

C. Chúng cung cấp thông tin xác thực bảo mật tạm thời.

D. Chúng cung cấp thông tin xác thực bảo mật vĩnh viễn.

E. Cá nhân, ứng dụng và dịch vụ đều có thể đảm nhận (assume) các vai trò.

**Đáp án: C. Chúng cung cấp thông tin xác thực bảo mật tạm thời và E. Cá nhân, ứng dụng và dịch vụ đều có thể đảm nhận các vai trò.**

---

**Câu 6:** Phát biểu nào phản ánh thực tiễn tốt nhất đối với người dùng root trên tài khoản AWS?

A. Xóa các quyền không cần thiết khỏi tài khoản người dùng root.

B. Tạo hai người dùng root với thông tin xác thực riêng biệt và phân phối cho hai cá nhân khác nhau.

C. Để tránh bị khóa tài khoản, không bật xác thực đa yếu tố (MFA) trên tài khoản root.

D. Tạo người dùng admin và thực hiện hầu hết các tác vụ quản trị với người dùng này thay vì người dùng root.

**Đáp án: D. Tạo người dùng admin và thực hiện hầu hết các tác vụ quản trị với người dùng này thay vì người dùng root.**

---

**Câu 7:** AWS Identity and Access Management (IAM) đánh giá chính sách như thế nào?

A. Nó kiểm tra các câu lệnh cho phép tường minh (explicit allow) trước khi kiểm tra các câu lệnh từ chối tường minh (explicit deny).

B. Nó kiểm tra các câu lệnh từ chối tường minh trước khi kiểm tra các câu lệnh cho phép tường minh.

C. Nếu chính sách không có câu lệnh từ chối hoặc cho phép tường minh nào, người dùng có quyền truy cập mặc định.

D. Câu lệnh từ chối tường minh không ghi đè câu lệnh cho phép tường minh.

**Đáp án: B. Nó kiểm tra các câu lệnh từ chối tường minh trước khi kiểm tra các câu lệnh cho phép tường minh.**

---

**Câu 8:** Phát biểu nào về chính sách AWS Identity and Access Management (IAM) là chính xác?

A. Chính sách dựa trên tài nguyên (resource-based policies) được gắn vào người dùng, nhóm hoặc vai trò.

B. Chính sách dựa trên tài nguyên cho phép truy cập theo mặc định.

C. Chính sách dựa trên danh tính (identity-based policies) chỉ có thể được gắn vào một thực thể duy nhất.

D. Chính sách dựa trên danh tính được gắn vào người dùng, nhóm hoặc vai trò.

**Đáp án: D. Chính sách dựa trên danh tính được gắn vào người dùng, nhóm hoặc vai trò.**

---

**Câu 9:** Phần tử chính sách (policy element) nào trong AWS Identity and Access Management (IAM) chứa thông tin về việc cho phép hay từ chối một yêu cầu?

A. Effect (Hiệu lực)

B. Action (Hành động)

C. Condition (Điều kiện)

D. Principal (Chủ thể)

**Đáp án: A. Effect (Hiệu lực)**

---

**Câu 10:** Tùy chọn nào mô tả chính xác phần tử statement (câu lệnh) trong chính sách AWS Identity and Access Management (IAM)?

A. Một chính sách chỉ có thể có một phần tử statement.

B. Phần tử statement chứa các phần tử khác cùng nhau xác định những gì được phép hoặc bị từ chối.

C. Phần tử statement không áp dụng cho các chính sách dựa trên danh tính.

D. Phần tử statement là phần tùy chọn trong chính sách IAM.

**Đáp án: B. Phần tử statement chứa các phần tử khác cùng nhau xác định những gì được phép hoặc bị từ chối.**
