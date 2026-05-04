# Module 4: Adding a Storage Layer with Amazon S3 Quiz - AWS

---

**Câu 1:** Due to a company merger, a data engineer needs to increase their object storage capacity. They are not sure how much storage they will need. They want a highly scalable service that can store unstructured, semistructured, and structured data. Which service would be the most cost effective to accomplish this task?

A. Amazon RDS

B. AWS Storage Gateway

C. Amazon S3

D. Amazon Elastic Block Store (Amazon EBS)

**Đáp án: C. Amazon S3**

---

**Câu 2:** Amazon S3 provides a good solution for which use case?

A. Hourly storage of frequently accessed temporary files

B. A data warehouse for business intelligence

C. Ledger data that is updated and accessed frequently

D. An internet-accessible storage location for video files that an external website can access

**Đáp án: D. An internet-accessible storage location for video files that an external website can access**

---

**Câu 3:** A company is interested in using Amazon S3 to host their website instead of a traditional web server. Which types of content does Amazon S3 support for static web hosting? (Select THREE.)

A. Dynamic HTML files

B. Video and sound files

C. Client-side scripts

D. Server-side scripts

E. HTML files and image files

F. Database engine

**Đáp án: B. Video and sound files, C. Client-side scripts và E. HTML files and image files**

---

**Câu 4:** A company wants to use an S3 bucket to store sensitive data. Which actions can they take to protect their data? (Select TWO.)

A. Enabling server-side encryption on the S3 bucket before uploading sensitive data

B. Enabling server-side encryption on the S3 bucket after uploading sensitive data

C. Uploading unencrypted files to Amazon S3 because Amazon S3 encrypts the files by default

D. Using client-side encryption to protect data in transit before it is sent to Amazon S3

E. Using Secure File Transfer Protocol (SFTP) to connect directly to Amazon S3

**Đáp án: A. Enabling server-side encryption on the S3 bucket before uploading sensitive data và D. Using client-side encryption to protect data in transit before it is sent to Amazon S3**

---

**Câu 5:** A company must create a common place to store shared files. Which requirements does Amazon S3 support? (Select TWO.)

A. Attach comments to files.

B. Recover deleted files.

C. Maintain different versions of files.

D. Compare file contents between files.

E. Lock a file so that only one person at a time can edit it.

**Đáp án: B. Recover deleted files và C. Maintain different versions of files.**

---

**Câu 6:** A customer service team accesses case data daily for up to 30 days. Cases can be reopened and require immediate access for 1 year after they are closed. Reopened cases require 2 days to process. Which solution meets the requirements and is the most cost efficient?

A. Store case data in S3 Standard. Use a lifecycle policy to move the data into S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

B. Store case data in S3 Standard. Use a lifecycle policy to move the data into Amazon S3 Glacier Flexible Retrieval after 30 days.

C. Store all case data in S3 Standard so that it is available whenever it is needed.

D. Store case data in S3 Intelligent-Tiering to automatically move data between tiers based on access frequency.

**Đáp án: A. Store case data in S3 Standard. Use a lifecycle policy to move the data into S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.**

---

**Câu 7:** Which option takes advantage of edge locations in Amazon CloudFront to transfer files over long distances to an S3 bucket?

A. AWS Transfer Family

B. Amazon S3 REST API

C. Amazon S3 Transfer Acceleration

D. AWS SDKs

**Đáp án: C. Amazon S3 Transfer Acceleration**

---

**Câu 8:** A video producer must regularly transfer several video files to Amazon S3. The files range from 100–700 MB. The internet connection has been unreliable, causing some uploads to fail. Which solution provides the fastest, most reliable, and most cost-effective way to transfer these files to Amazon S3?

A. AWS Transfer Family

B. Amazon S3 Transfer Acceleration

C. AWS Management Console

D. Amazon S3 multipart uploads

**Đáp án: D. Amazon S3 multipart uploads**

---

**Câu 9:** Which Amazon S3 storage class is designed for backup copies of on-premises data or easily re-creatable data?

A. S3 One Zone-Infrequent Access (S3 One Zone-IA)

B. S3 Glacier Instant Retrieval

C. S3 Intelligent-Tiering

D. S3 Standard-Infrequent Access (S3 Standard-IA)

**Đáp án: A. S3 One Zone-Infrequent Access (S3 One Zone-IA)**

---

**Câu 10:** A company needs to retain records for regulatory purposes for a 7-year period. These records are rarely accessed (once or twice a year). What is the lowest-cost storage class for Amazon S3?

A. S3 Glacier Deep Archive

B. S3 Intelligent-Tiering

C. S3 Standard-Infrequent Access (S3 Standard-IA)

D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**Đáp án: A. S3 Glacier Deep Archive**
