#  Module 2: Introducing Cloud Architecting Quiz - AWS

---

**Câu 1:** Which is the best definition of cloud architecture?

A. Applying cloud characteristics to a solution that uses cloud services and features to meet technical and business requirements

B. Designing applications in cloud-based, shared IT infrastructure by using virtual machines and fault-tolerant data stores in the cloud

C. Relocating traditional on-premises data centers to internet-accessible data centers that a vendor manages

D. Combining frontend and backend software and components to create highly available and scalable web services that meet the needs of an organization

**Đáp án: A. Applying cloud characteristics to a solution that uses cloud services and features to meet technical and business requirements**

---

**Câu 2:** The AWS Well-Architected Framework has six pillars. Three of the pillars are security, operational excellence, and sustainability. What are two of the other pillars of the Well-Architected Framework? (Select TWO.)

A. Cost optimization

B. Privacy

C. Reliability

D. Risk management

E. Governance

**Đáp án: A. Cost optimization và C. Reliability**

---

**Câu 3:** Which actions are consistent with the operational excellence pillar of the AWS Well-Architected Framework? (Select TWO.)

A. Plan and manage the full lifecycle of hardware assets.

B. Ensure operations personnel document changes to the infrastructure.

C. Evaluate organizational structures and roles to identify skill gaps.

D. Review and improve processes and procedures on a continuous cycle.

E. Apply software engineering principles and methodology to infrastructure as code.

**Đáp án: D. Review and improve processes and procedures on a continuous cycle và E. Apply software engineering principles and methodology to infrastructure as code.**

---

**Câu 4:** A specific application requires a frontend web tier of multiple servers that communicate with a backend application tier of multiple servers. Which design most closely follows AWS best practices?

A. Design the web tier to communicate with the application tier through the Elastic Load Balancing (ELB) service.

B. Create a full mesh network between the web and application tiers, so that each web server can communicate directly with every application server.

C. Create multiple instances that each combine a web frontend and application backend in the same instance.

D. Assign a dedicated application server and a dedicated connection to each web server.

**Đáp án: A. Design the web tier to communicate with the application tier through the Elastic Load Balancing (ELB) service.**

---

**Câu 5:** A solutions architect is developing a process for handling server failures. Which process most closely follows AWS best practices?

A. Amazon CloudWatch detects a system failure. It initiates automation to provision a new server.

B. Amazon CloudWatch detects a system failure. It notifies the systems administrator, who provisions a new server by using the AWS Management Console.

C. The operations staff detects a system failure. They initiate automation to provision a new server.

D. The operations staff detects a system failure. They notify the systems administrator, who provisions a new server by using the AWS Management Console.

**Đáp án: A. Amazon CloudWatch detects a system failure. It initiates automation to provision a new server.**

---

**Câu 6:** A company is considering moving their on-premises data center to the cloud. Their primary motivation is to increase their cost efficiency. Which approach most closely follows AWS best practices?

A. Provision some of the servers in the cloud and ensure the servers run 24/7.

B. Replicate their on-premises data center in the cloud.

C. Provision the servers that are needed and stop services when they are not being used.

D. Maintain the on-premises data center as long as possible.

**Đáp án: C. Provision the servers that are needed and stop services when they are not being used.**

---

**Câu 7:** A company stores read-only data in Amazon S3. Most users are in the same country as the company headquarters. Some users are located around the world. Which design decision most closely follows AWS best practices?

A. Use a bucket in the Region that has the lowest average latency for all users.

B. Replicate objects across buckets in AWS Regions around the world. Users access the bucket in the Region closest that is to them.

C. Use a bucket in the AWS Region that is closest to the company headquarters. All users access the data through Amazon CloudFront.

D. Use a bucket in the Region closest to the company headquarters.

**Đáp án: C. Use a bucket in the AWS Region that is closest to the company headquarters. All users access the data through Amazon CloudFront.**

---

**Câu 8:** A consultant must access a large object in an S3 bucket. They need one day to access the file. Which method for granting access most closely follows AWS best practices?

A. Copy the object to a new S3 bucket. Enable public access on the new bucket. From the new bucket, get the object URL, and give it to the consultant.

B. Create a user account for the consultant. Grant the user account permissions to access the S3 bucket through the AWS Management Console.

C. Create a presigned URL to the object that expires in 24 hours, and give it to the consultant.

D. Enable public access on the S3 bucket. Give the object URL to the consultant.

**Đáp án: C. Create a presigned URL to the object that expires in 24 hours, and give it to the consultant.**

---

**Câu 9:** Which are main considerations that influence which AWS Regions to use? (Select TWO.)

A. Application resiliency during system failures

B. Compliance with laws and regulations

C. Protection against localized natural disasters

D. Security and access control

E. Latency reduction for end users

**Đáp án: B. Compliance with laws and regulations và E. Latency reduction for end users**

---

**Câu 10:** Which are main considerations that influence which Availability Zones to use? (Select TWO.)

A. Compliance with laws and regulations

B. Application resiliency during system failures

C. Protection against localized natural disasters

D. Security and access control

E. Latency reduction for end users

**Đáp án: B. Application resiliency during system failures và C. Protection against localized natural disasters**
