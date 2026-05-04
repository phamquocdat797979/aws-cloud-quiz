# Module 9: Securing User, Application, and Data Access Quiz - AWS

---

**Câu 1:** Which are characteristics of an AWS Identity and Access Management (IAM) group? (Select TWO.)

A. Permissions in a group policy always override permissions in a user policy.

B. A user can belong to more than one group.

C. A group can belong to another group.

D. A group can have security credentials.

E. New users added to a group inherit the group's permissions.

**Đáp án: B. A user can belong to more than one group và E. New users added to a group inherit the group's permissions.**

---

**Câu 2:** What is an advantage of using attribute-based access control (ABAC) over role-based access control (RBAC)?

A. ABAC will likely require fewer policies than RBAC.

B. ABAC requires less testing than RBAC.

C. ABAC permissions explicitly identify the resources that they protect.

D. ABAC permissions are more secure than RBAC permissions.

**Đáp án: A. ABAC will likely require fewer policies than RBAC.**

---

**Câu 3:** A developer is a member of an AWS Identity and Access Management (IAM) group that has a group policy attached to it. The group policy allows access to Amazon S3 and Amazon EC2 and denies access to Amazon Elastic Container Service (Amazon ECS). The developer also has a user policy attached which allows access to Amazon ECS and Amazon CloudFront. Which option describes the user's access?

A. Access to Amazon S3, Amazon EC2, Amazon ECS, and Amazon CloudFront

B. Access to Amazon ECS and Amazon CloudFront, but no access to Amazon S3 and Amazon EC2

C. Access to Amazon S3 and Amazon EC2, but no access to Amazon ECS and Amazon CloudFront

D. Access to Amazon S3, Amazon EC2, and Amazon CloudFront, but no access to Amazon ECS

**Đáp án: D. Access to Amazon S3, Amazon EC2, and Amazon CloudFront, but no access to Amazon ECS**

---

**Câu 4:** What is a benefit of identity federation with the AWS Cloud?

A. It enables the use of an external identity provider to authenticate workforce users and give them access to AWS resources.

B. It centralizes the storage and management of user identities inside of the AWS Cloud.

C. It eliminates the need for defining permissions in AWS Identity and Access Management (IAM) to secure the access to AWS resources.

D. It assigns roles to authenticated users to control their access to AWS resources.

**Đáp án: A. It enables the use of an external identity provider to authenticate workforce users and give them access to AWS resources.**

---

**Câu 5:** Which service enables identity federation for accessing a web application running in the AWS Cloud?

A. AWS Key Management Service (AWS KMS)

B. AWS CloudHSM

C. Amazon Cognito

D. AWS WAF

**Đáp án: C. Amazon Cognito**

---

**Câu 6:** Which service helps centrally manage billing, control access, compliance and security, and share resources across multiple AWS accounts?

A. AWS Systems Manager

B. AWS Identity and Access Management (IAM)

C. AWS Organizations

D. Amazon Cognito

**Đáp án: C. AWS Organizations**

---

**Câu 7:** A technology company has multiple production accounts grouped into a production organizational unit (OU) in AWS Organizations. The company wants to prevent all AWS Identity and Access Management (IAM) users in the production accounts from deleting AWS CloudTrail logs. How can a system administrator enforce this restriction?

A. Create an Amazon S3 bucket policy and associate with all buckets containing AWS CloudTrail logs.

B. Create a tag policy and attach it to the production accounts.

C. Create a service control policy (SCP), and attach it to the production OU.

D. Create an IAM policy and attach it to each IAM user in the production accounts.

**Đáp án: C. Create a service control policy (SCP), and attach it to the production OU.**

---

**Câu 8:** A developer is writing a client application that encrypts sensitive data using a data key before sending it to a server application. The client application sends the data key to the server application so that the server application can decrypt the sensitive information. The developer is concerned that the confidentiality of the sensitive data might be compromised if the data key is stolen. Which type of encryption should the developer use to fully protect the sensitive information?

A. Symmetric encryption

B. Asymmetric encryption

C. Envelope encryption

D. Server-side encryption

**Đáp án: C. Envelope encryption**

---

**Câu 9:** Which functions does the AWS Key Management Service (AWS KMS) provide? (Select TWO.)

A. Rotate keys

B. Create AWS Identity and Access Management (IAM) access keys

C. Authenticate external users

D. Store encrypted data

E. Create symmetric and asymmetric keys

**Đáp án: A. Rotate keys và E. Create symmetric and asymmetric keys**

---

**Câu 10:** Which AWS service discovers and protects sensitive information stored on Amazon S3 in an AWS account?

A. AWS Audit Manager

B. AWS Resource Access Manager (AWS RAM)

C. Amazon Macie

D. Amazon Detective

**Đáp án: C. Amazon Macie**
