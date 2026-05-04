# Module 6: Adding a Database Layer Quiz - AWS

---

**Câu 1:** Which statement that compares a database service that AWS manages with a database on an Amazon EC2 instance is true?

A. AWS manages database patches for a database on a managed database service.

B. AWS manages operating system (OS) patches for a database on an EC2 instance.

C. Configuring backups for a database on an EC2 instance isn't needed.

D. Configuring backups for a database on a managed database service isn't needed.

**Đáp án: A. AWS manages database patches for a database on a managed database service.**

---

**Câu 2:** A small startup company is deciding which database service to use for an enrollment system for their online training website. Which requirements might lead them to select Amazon RDS rather than Amazon DynamoDB? (Select TWO.)

A. The enrollment system must be highly available.

B. Data must be backed up in case of disasters.

C. Student, course, and registration data are stored in many different tables.

D. The data is highly structured.

E. Data and transactions must be encrypted to protect personal information.

**Đáp án: C. Student, course, and registration data are stored in many different tables và D. The data is highly structured.**

---

**Câu 3:** A startup company is building an order inventory system with a web frontend and is looking for a real-time transactional database. Which service would best meet their needs?

A. Amazon DocumentDB (with MongoDB compatibility)

B. Amazon Redshift

C. Amazon DynamoDB

D. Amazon Neptune

**Đáp án: C. Amazon DynamoDB**

---

**Câu 4:** A small game company is designing an online game, where thousands of players can create their own in-game objects. The current design uses a MySQL database in Amazon RDS to store data for player-created objects. Which proposed online game object features could make Amazon DynamoDB a better solution? (Select TWO.)

A. Game items that can be modified using data contained in other tables

B. A high amount of read activity on player-created objects and a low amount of writes

C. Unpredictable object attributes for player-created objects

D. A set of common object attributes for player-created objects

E. Game data items that include binary data and might exceed 700 MB

**Đáp án: B. A high amount of read activity on player-created objects and a low amount of writes và C. Unpredictable object attributes for player-created objects**

---

**Câu 5:** An organization is concerned about an increase in fraud. Which service could help with building real-time graph database queries for fraud detection?

A. Amazon Redshift

B. Amazon RDS

C. Amazon Neptune

D. Amazon DynamoDB

**Đáp án: C. Amazon Neptune**

---

**Câu 6:** A data engineer must host a new Microsoft SQL Server database in AWS for a project. Which service could they use to accomplish this task?

A. Amazon DocumentDB (with MongoDB compatibility)

B. Amazon Aurora

C. Amazon DynamoDB

D. Amazon Neptune

**Đáp án: B. Amazon Aurora**

---

**Câu 7:** Which techniques should be used to secure an Amazon RDS database? (Select THREE.)

A. A virtual private gateway (VGW) to filter traffic from restricted networks

B. An Amazon Virtual Private Cloud (Amazon VPC) gateway endpoint to prevent traffic from traversing the internet

C. A virtual private cloud (VPC) to provide instance isolation

D. Security groups to control network access to individual RDS instances

E. Encryption both at rest and in transit to protect sensitive data

F. AWS Identity and Access Management (IAM) policies to define access at the table, row, and column levels

**Đáp án: C. A virtual private cloud (VPC) to provide instance isolation, D. Security groups to control network access to individual RDS instances và E. Encryption both at rest and in transit to protect sensitive data**

---

**Câu 8:** Which techniques should be used to secure Amazon DynamoDB? (Select THREE.)

A. Encryption to protect sensitive data

B. Security groups to control network access to individual instances

C. An Amazon Virtual Private Cloud (Amazon VPC) gateway endpoint to prevent traffic from traversing the internet

D. AWS Identity and Access Management (IAM) policies to define access at the table, item, or attribute level

E. A virtual private cloud (VPC) to provide instance isolation and firewall protection

F. A virtual private gateway (VGW) to filter traffic from restricted networks

**Đáp án: A. Encryption to protect sensitive data, C. An Amazon Virtual Private Cloud (Amazon VPC) gateway endpoint to prevent traffic from traversing the internet và D. AWS Identity and Access Management (IAM) policies to define access at the table, item, or attribute level**

---

**Câu 9:** A company wants to migrate their on-premises Oracle database to Amazon Aurora MySQL. Which process describes the high-level steps most accurately?

A. Use AWS Schema Conversion Tool (AWS SCT) to convert the schema, and then use AWS Database Migration Service (AWS DMS) to migrate the data.

B. Use AWS Schema Conversion Tool (AWS SCT) to synchronously convert the schema and migrate the data.

C. Use AWS Database Migration Service (AWS DMS) to directly migrate from the Oracle database to Amazon Aurora MySQL.

D. Use AWS Database Migration Service (AWS DMS) to migrate the data, and then use AWS Schema Conversion Tool (AWS SCT) to convert the schema.

**Đáp án: A. Use AWS Schema Conversion Tool (AWS SCT) to convert the schema, and then use AWS Database Migration Service (AWS DMS) to migrate the data.**

---

**Câu 10:** A cloud architect is setting up an application to use an Amazon RDS MySQL DB instance. The database must be architected for high availability across Availability Zones and AWS Regions with minimal downtime. How should they meet this requirement?

A. Set up an RDS MySQL Single-AZ DB instance. Copy automated snapshots to at least one other Region.

B. Set up an RDS MySQL Single-AZ DB instance. Configure a read replica in a different Region.

C. Set up an RDS MySQL Multi-AZ DB instance. Configure an appropriate backup window.

D. Set up an RDS MySQL Multi-AZ DB instance. Configure a read replica in a different Region.

**Đáp án: D. Set up an RDS MySQL Multi-AZ DB instance. Configure a read replica in a different Region.**
