# Module 5: Adding a Compute Layer Using Amazon EC2 Quiz - AWS

---

**Câu 1:** Which attributes are reasons to choose Amazon EC2? (Select TWO.)

A. AWS management of operating system (OS) patches

B. AWS management of operating system (OS) security

C. Ability to run serverless applications

D. Ability to run any type of workload

E. Complete control of computing resources

**Đáp án: D. Ability to run any type of workload và E. Complete control of computing resources**

---

**Câu 2:** What are the benefits of using an Amazon Machine Image (AMI)? (Select THREE.)

A. Automating security group settings for instances

B. Using an AMI as a server backup for Amazon EC2 instances

C. Launching instances with the same configuration

D. Selling or sharing software solutions packaged as an AMI

E. Migrating data from on premises to Amazon EC2 instances

F. Updating systems by patching their AMI

**Đáp án: B. Using an AMI as a server backup for Amazon EC2 instances, C. Launching instances with the same configuration và D. Selling or sharing software solutions packaged as an AMI**

---

**Câu 3:** A system administrator must change the instance types of multiple running Amazon EC2 instances. The instances were launched with a mix of Amazon Elastic Block Store (Amazon EBS) backed Amazon Machine Images (AMIs) and instance-store-backed AMIs. Which method is a valid way to change the instance type?

A. Stop an instance-store-backed instance, change its instance type, and start the instance.

B. Change the instance type of an Amazon EBS backed instance without stopping it.

C. Stop an Amazon EBS backed instance, change its instance type, and start the instance.

D. Change the instance type of an instance-store-backed instance without stopping it.

**Đáp án: C. Stop an Amazon EBS backed instance, change its instance type, and start the instance.**

---

**Câu 4:** A workload requires high read/write access to large local datasets. Which instance types would perform BEST for this workload? (Select TWO.)

A. Compute optimized

B. General purpose

C. Memory optimized

D. Accelerated computing

E. Storage optimized

**Đáp án: C. Memory optimized và E. Storage optimized**

---

**Câu 5:** An application requires the media access control (MAC) address of the host Amazon EC2 instance. The architecture uses an AWS Auto Scaling group to dynamically launch and terminate instances. What is the BEST way for the application to obtain the MAC address?

A. Include the MAC address in a custom AMI for each instance in the AWS Auto Scaling group.

B. Use the user data of each instance to access the MAC address through the instance metadata.

C. Write the MAC address in the application configuration file of each instance.

D. Include the MAC address in the Amazon Machine Image (AMI) that is used to launch all of the instances in the AWS Auto Scaling group.

**Đáp án: B. Use the user data of each instance to access the MAC address through the instance metadata.**

---

**Câu 6:** Which statements about user data are correct? (Select TWO.)

A. User data cannot be run while the instance is stopped.

B. The cloud architect must run the /var/lib/cloud/instance/scripts/part-001 command for the user data script to run again.

C. The cloud architect must remove the config_user_scripts file to rerun the user data scripts.

D. By default, user data runs only once, when an instance is launched.

E. By default, user data runs after every instance restart.

**Đáp án: C. The cloud architect must remove the config_user_scripts file to rerun the user data scripts và D. By default, user data runs only once, when an instance is launched.**

---

**Câu 7:** A transactional workload on an Amazon EC2 instance performs high amounts of frequent read and write operations. Which Amazon Elastic Block Store (Amazon EBS) volume type is BEST for this workload?

A. Throughput Optimized hard disk drive (HDD)

B. Provisioned IOPS solid state drive (SSD)

C. General Purpose solid state drive (SSD)

D. Cold hard disk drive (HDD)

**Đáp án: B. Provisioned IOPS solid state drive (SSD)**

---

**Câu 8:** It is possible to create an NFS share on an Amazon Elastic Block Store (Amazon EBS) backed Linux instance by installing and configuring an NFS server on the instance. In this way, multiple Linux systems can share the file system of that instance. Which advantages does Amazon Elastic File System (Amazon EFS) provide compared to this solution? (Select TWO.)

A. High availability

B. No need for backups

C. File locking

D. Automatic scaling

E. Strong consistency

**Đáp án: A. High availability và D. Automatic scaling**

---

**Câu 9:** Which feature does Amazon FSx for Windows File Server provide?

A. Backup solution for on-premises Windows file servers

B. Amazon management agent for Windows file servers

C. Microsoft Active Directory server for Windows file servers

D. Fully managed Windows file servers

**Đáp án: D. Fully managed Windows file servers**

---

**Câu 10:** Which descriptions of Amazon EC2 pricing options are correct? (Select TWO.)

A. Savings Plans are budgeting tools that help customers manage Amazon EC2 costs.

B. Dedicated Hosts are servers that are dedicated to one purpose, such as a firewall.

C. Reserved Instances are physical servers that are reserved exclusively for customer use.

D. With On-Demand Instances, customers can pay for compute capacity by usage time with no long-term commitments.

E. Spot Instances offer spare compute capacity at discounted prices and can be interrupted.

**Đáp án: D. With On-Demand Instances, customers can pay for compute capacity by usage time with no long-term commitments và E. Spot Instances offer spare compute capacity at discounted prices and can be interrupted.**
