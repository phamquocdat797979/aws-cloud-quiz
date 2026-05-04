# Module 7: Creating a Networking Environment Quiz - AWS

---

**Câu 1:** Which definition describes a virtual private cloud (VPC)?

A. A virtual private network (VPN) in the AWS Cloud

B. A logically isolated virtual network that you define in the AWS Cloud

C. A fully managed service that extends the AWS Cloud to customer premises

D. An extension of an on-premises network into AWS

**Đáp án: B. A logically isolated virtual network that you define in the AWS Cloud**

---

**Câu 2:** Which component does not have direct access to the internet?

A. EC2 instance inside a private subnet

B. Network address translation (NAT) gateway inside a public subnet

C. Elastic IP address interface

D. EC2 instance inside a public subnet

**Đáp án: A. EC2 instance inside a private subnet**

---

**Câu 3:** A company's virtual private cloud (VPC) has the Classless Inter-Domain Routing (CIDR) block 172.16.0.0/21 (2048 addresses). It has two subnets (A and B). Each subnet must support 100 usable addresses now, but this number is expected to rise to at most 254 usable addresses soon. Which subnet addressing scheme meets the requirements and follows AWS best practices?

A. Subnet A: 172.16.0.0/25 (128 addresses) Subnet B: 172.16.0.128/25 (128 addresses)

B. Subnet A: 172.16.0.0/22 (1024 addresses) Subnet B: 172.16.4.0/22 (1024 addresses)

C. Subnet A: 172.16.0.0/23 (512 addresses) Subnet B: 172.16.2.0/23 (512 addresses)

D. Subnet A: 172.16.0.0/24 (256 addresses) Subnet B: 172.16.1.0/24 (256 addresses)

**Đáp án: D. Subnet A: 172.16.0.0/24 (256 addresses) Subnet B: 172.16.1.0/24 (256 addresses)**

---

**Câu 4:** Several EC2 instances launch in a virtual private cloud (VPC) that has internet access. These instances should not be accessible from the internet, but they must be able to download updates from the internet. How should the instances launch?

A. With public IP addresses, in a subnet with a default route to an internet gateway

B. Without public IP addresses, in a subnet with a default route to an internet gateway

C. With Elastic IP addresses, in a subnet with a default route to an internet gateway

D. Without public IP addresses, in a subnet with a default route to a network address translation (NAT) gateway

**Đáp án: D. Without public IP addresses, in a subnet with a default route to a network address translation (NAT) gateway**

---

**Câu 5:** A group of consultants requires access to an EC2 instance from the internet for 3 consecutive days each week. The instance is shut down the rest of the week. The virtual private cloud (VPC) has internet access. How should you assign one IPv4 address to the instance to give the consultants access?

A. Associate an Elastic IP address with the EC2 instance.

B. Enable automatic address assignment for the EC2 instance.

C. Assign the IP address in the operating system (OS) boot configuration.

D. Enable automatic address assignment for the subnet.

**Đáp án: A. Associate an Elastic IP address with the EC2 instance.**

---

**Câu 6:** An application uses a bastion host to allow access to EC2 instances in a private subnet within a virtual private cloud (VPC). What security group configurations would allow SSH access from the source IP to the EC2 instances? (Select TWO.)

A. Add a rule to the bastion host security group to allow traffic on port 22 from your source IP address.

B. Add a rule to the bastion host security group to deny all traffic from the internet.

C. Add a rule to the EC2 instance security group to allow traffic from the bastion host security group on port 22.

D. Add a rule to the private subnet EC2 instance security group to allow return traffic to the bastion host security group.

E. Add a rule to the bastion host security group to allow return traffic to your source IP address.

**Đáp án: A. Add a rule to the bastion host security group to allow traffic on port 22 from your source IP address và C. Add a rule to the EC2 instance security group to allow traffic from the bastion host security group on port 22.**

---

**Câu 7:** A solution deployed in a virtual private cloud (VPC) needs a subnet with limited access to specific internet addresses. How can an architect configure the network to limit traffic from and to the EC2 instances in the subnet using a network access control list (ACL)?

A. Add rules to the subnet custom network ACL to allow traffic from and to allowed internet addresses. Deny all other traffic.

B. Add rules to the subnet custom network ACL to allow traffic from and to allowed internet addresses.

C. Add rules to the default network ACL to allow traffic from and to allowed internet addresses.

D. Add rules to the default network ACL to allow traffic from and to allowed internet addresses. Deny all other traffic.

**Đáp án: A. Add rules to the subnet custom network ACL to allow traffic from and to allowed internet addresses. Deny all other traffic.**

---

**Câu 8:** Which actions are best practices for designing a virtual private cloud (VPC)? (Select THREE.)

A. Use the same Classless Inter-Domain Routing (CIDR) block as your on-premises network.

B. Use the same Classless Inter-Domain Routing (CIDR) block for subnets in different Availability Zones that are part of the same AWS Auto Scaling group.

C. Create one subnet per Availability Zone for each group of hosts that have unique routing requirements.

D. Match the size of the VPC Classless Inter-Domain Routing (CIDR) block to the number of hosts that are required for a workload.

E. Divide the VPC network range evenly across all Availability Zones that are available.

F. Reserve some address space for future use.

**Đáp án: C. Create one subnet per Availability Zone for each group of hosts that have unique routing requirements, E. Divide the VPC network range evenly across all Availability Zones that are available và F. Reserve some address space for future use.**

---

**Câu 9:** Where can you have VPC flow logs delivered? (Select THREE.)

A. Amazon Athena

B. Amazon Kinesis Data Firehose

C. Amazon OpenSearch Service

D. AWS Management Console

E. Amazon S3 bucket

F. Amazon CloudWatch

**Đáp án: B. Amazon Kinesis Data Firehose, E. Amazon S3 bucket và F. Amazon CloudWatch**

---

**Câu 10:** An EC2 instance must connect to an Amazon S3 bucket. What component provides this connectivity with no additional charge and no throughput packet limits?

A. Public region access point

B. Gateway VPC endpoint

C. Interface VPC endpoint

D. Gateway Load Balancer endpoint

**Đáp án: B. Gateway VPC endpoint**
