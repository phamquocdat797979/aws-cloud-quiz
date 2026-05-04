# Module 12: Bộ nhớ đệm Nội dung - AWS

---

**Câu 1:** Bộ nhớ đệm (caching) là gì?

A. Một mạng toàn cầu để phân phối nội dung

B. Một cách để lưu trữ mật khẩu

C. Một tầng lưu trữ dữ liệu tốc độ cao

D. Một cơ sở dữ liệu trong bộ nhớ (in-memory database)

**Đáp án: C. Một tầng lưu trữ dữ liệu tốc độ cao**

---

**Câu 2:** Loại dữ liệu nào nên được lưu vào bộ nhớ đệm?

A. Dữ liệu có thể được truy xuất nhanh chóng bằng các truy vấn đơn giản

B. Dữ liệu chuyên biệt chỉ cần thiết cho một nhóm người dùng

C. Dữ liệu tĩnh được truy cập thường xuyên

D. Nội dung web được tạo ra động (dynamically generated)

**Đáp án: C. Dữ liệu tĩnh được truy cập thường xuyên**

---

**Câu 3:** Lợi ích nào của việc sử dụng bộ nhớ đệm?

A. Giảm chi phí

B. Tăng độ tin cậy của ứng dụng

C. Giảm độ trễ phản hồi

D. Cân bằng tải ứng dụng

**Đáp án: C. Giảm độ trễ phản hồi**

---

**Câu 4:** Những loại nội dung nào trên trang web có thể được lưu vào bộ nhớ đệm bằng edge cache? (Chọn HAI.)

A. Dữ liệu do người dùng tạo ra, chẳng hạn như các từ khóa tìm kiếm được nhập bởi người dùng

B. Tệp video, chẳng hạn như video demo sản phẩm

C. Giỏ hàng chứa các mặt hàng của người dùng

D. Các đối tượng web, chẳng hạn như siêu liên kết (hyperlinks)

E. Nội dung được tạo động, chẳng hạn như tên người dùng

**Đáp án: B. Tệp video, chẳng hạn như video demo sản phẩm và D. Các đối tượng web, chẳng hạn như siêu liên kết**

---

**Câu 5:** Amazon CloudFront cho phép điều gì?

A. Bộ nhớ đệm nội dung đa tầng và theo vùng

B. Bộ nhớ đệm hai chiều giữa người dùng và máy chủ gốc (origin host)

C. Xử lý giao dịch với cơ sở dữ liệu trong bộ nhớ

D. Tự động tạo giá trị thời gian tồn tại (TTL - time to live)

**Đáp án: A. Bộ nhớ đệm nội dung đa tầng và theo vùng**

---

**Câu 6:** Amazon CloudFront sử dụng các edge location như thế nào?

A. Nó lưu vào bộ nhớ đệm nội dung được truy cập thường xuyên tại các edge location. Nó phân phối nội dung được lưu trong bộ nhớ đệm đến máy khách thông qua edge location có độ trễ thấp nhất đối với các máy khách đó.

B. Nó lưu vào bộ nhớ đệm tất cả nội dung từ một origin distribution tại edge location và phân phối nội dung đến máy khách thông qua edge location nhanh nhất.

C. Nó lưu vào bộ nhớ đệm dữ liệu theo vùng tại các Regional edge location và phân phối nội dung đến máy khách thông qua Regional edge location của họ.

D. Nó lưu vào bộ nhớ đệm nội dung cục bộ tại các edge location. Nó phân phối nội dung được lưu trong bộ nhớ đệm đến máy khách thông qua edge location yêu cầu ít bước nhảy mạng nhất để đến các máy khách đó.

**Đáp án: A. Nó lưu vào bộ nhớ đệm nội dung được truy cập thường xuyên tại các edge location. Nó phân phối nội dung được lưu trong bộ nhớ đệm đến máy khách thông qua edge location có độ trễ thấp nhất đối với các máy khách đó.**

---

**Câu 7:** Phát biểu nào mô tả cách hiệu quả để phân phối nội dung video theo yêu cầu?

A. Khởi chạy Amazon EC2 instance để lưu trữ nội dung video. Sau đó sử dụng Amazon CloudFront để phân phối nội dung.

B. Sử dụng Amazon S3 để lưu trữ và phục vụ nội dung.

C. Khởi chạy Amazon EC2 instance để lưu trữ và phục vụ nội dung video.

D. Sử dụng Amazon S3 để lưu trữ nội dung. Sau đó sử dụng Amazon CloudFront để phân phối nội dung.

**Đáp án: D. Sử dụng Amazon S3 để lưu trữ nội dung. Sau đó sử dụng Amazon CloudFront để phân phối nội dung.**

---

**Câu 8:** Amazon CloudFront đóng vai trò gì trong việc bảo vệ chống lại các cuộc tấn công từ chối dịch vụ phân tán (DDoS)?

A. Kiểm soát lưu lượng theo địa chỉ IP nguồn của các yêu cầu

B. Hạn chế lưu lượng theo địa lý để giúp chặn các cuộc tấn công có nguồn gốc từ các quốc gia cụ thể

C. Thực hiện kiểm tra gói tin sâu (deep packet inspection) để phát hiện các cuộc tấn công

D. Định tuyến lưu lượng qua các edge location

**Đáp án: B. Hạn chế lưu lượng theo địa lý để giúp chặn các cuộc tấn công có nguồn gốc từ các quốc gia cụ thể**

---

**Câu 9:** Ứng dụng có thể sử dụng Amazon ElastiCache như thế nào để cải thiện hiệu suất đọc cơ sở dữ liệu? (Chọn HAI.)

A. Đọc dữ liệu từ cơ sở dữ liệu trước, và ghi dữ liệu được đọc thường xuyên nhất vào ElastiCache.

B. Sao chép cơ sở dữ liệu trong ElastiCache, và chuyển tất cả thao tác đọc đến ElastiCache và tất cả thao tác ghi đến cơ sở dữ liệu.

C. Chuyển tất cả yêu cầu đọc đến cơ sở dữ liệu, và cấu hình để đọc từ ElastiCache khi xảy ra cache miss.

D. Đọc dữ liệu từ ElastiCache trước, và ghi vào ElastiCache khi xảy ra cache miss.

E. Ghi dữ liệu vào ElastiCache mỗi khi ứng dụng ghi vào cơ sở dữ liệu.

**Đáp án: A. Đọc dữ liệu từ cơ sở dữ liệu trước, và ghi dữ liệu được đọc thường xuyên nhất vào ElastiCache và E. Ghi dữ liệu vào ElastiCache mỗi khi ứng dụng ghi vào cơ sở dữ liệu.**

---

**Câu 10:** Chiến lược bộ nhớ đệm nào nên được sử dụng khi có dữ liệu phải được cập nhật theo thời gian thực?

A. Thời gian tồn tại (TTL - Time to live)

B. Tải lười biếng (Lazy loading)

C. Ghi xuyên suốt (Write-through)

D. Tiêu đề kiểm soát bộ nhớ đệm (Cache-control headers)

**Đáp án: C. Ghi xuyên suốt (Write-through)**
