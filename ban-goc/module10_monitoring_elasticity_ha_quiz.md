# Module 10: Implementing Monitoring, Elasticity, and High Availability Quiz - AWS

---

**Câu 1:** Which statement about Amazon EC2 Auto Scaling is accurate?

A. It can launch Amazon EC2 instances in multiple Availability Zones.

B. It can launch Amazon EC2 instances, but customers must terminate instances after they are no longer needed.

C. It requires the customer to use Reserved Instances only.

D. It can launch new Amazon EC2 instances based on a schedule.

**Đáp án: A. It can launch Amazon EC2 instances in multiple Availability Zones.**

---

**Câu 2:** A devops engineeer detected that the demand on a fleet of Amazon EC2 instances in an Auto Scaling group increases by a set amount on weekend days. Which type of scaling is the MOST appropriate in this case?

A. Dynamic

B. Manual

C. Scheduled

D. Predictive

**Đáp án: C. Scheduled**

---

**Câu 3:** A devops engineer launches a fleet of Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The EC2 instances must maintain 50 percent average CPU utilization. Which type of scaling is appropriate to use based on CPU utilization usage?

A. Manual scaling

B. Step scaling

C. Simple scaling

D. Target tracking scaling

**Đáp án: D. Target tracking scaling**

---

**Câu 4:** How can a user vertically scale an Amazon RDS database?

A. By adding read replicas

B. By creating dedicated read and write nodes

C. By sharding the database

D. By changing the instance class or size

**Đáp án: D. By changing the instance class or size**

---

**Câu 5:** How can an AWS customer horizontally scale an Amazon Aurora database?

A. By changing the instance type

B. By creating a scaling policy

C. By adding Aurora Replica instances by using Aurora Auto Scaling

D. By creating Amazon CloudWatch alarms

**Đáp án: C. By adding Aurora Replica instances by using Aurora Auto Scaling**

---

**Câu 6:** How does Amazon DynamoDB perform automatic scaling?

A. It changes the instance type in response to changes in processing load.

B. It adjusts the provisioned throughput capacity in response to traffic patterns.

C. It adds and removes database instances in response to changes in traffic.

D. It adds read replicas in response to increased read demand.

**Đáp án: B. It adjusts the provisioned throughput capacity in response to traffic patterns.**

---

**Câu 7:** A fleet of Amazon EC2 instances is launched in an Amazon EC2 Auto Scaling group. The instances run an application that uses a custom protocol on TCP port 42000. Connections from client systems on the internet must balance across the instances. Which load balancing solution is the best solution?

A. Gateway Load Balancer

B. Network Load Balancer

C. Classic Load Balancer

D. Application Load Balancer

**Đáp án: B. Network Load Balancer**

---

**Câu 8:** A company must build a highly available website that uses server-side scripts to serve dynamic HTML. Which solution provides the HIGHEST availability for the LEAST cost and complexity?

A. An Auto Scaling group launches Amazon EC2 instances, which are served by a Network Load Balancer. Amazon Route 53 uses latency-based routing.

B. An Auto Scaling group launches Amazon EC2 instances, which are served by an Application Load Balancer. DNS name resolution points to the load balancer.

C. The customer deploys a second web server in another Region. Amazon Route 53 uses failover routing for disaster recovery (DR).

D. Amazon S3 hosts the website. DNS name resolution points to the S3 bucket.

**Đáp án: B. An Auto Scaling group launches Amazon EC2 instances, which are served by an Application Load Balancer. DNS name resolution points to the load balancer.**

---

**Câu 9:** Users in location A connect to an application in Region A. Users in location B connect to the same application in Region B. If the application in Region A becomes unhealthy, traffic for location A must be redirected to the application in Region B. Which solution meets this requirement?

A. Use geoproximity routing and a Network Load Balancer that is attached to both Regions.

B. Use geolocation routing with failover records in Amazon Route 53.

C. Use an Application Load Balancer with Amazon CloudWatch alarms.

D. Use latency-based routing in Amazon Route 53 with Amazon CloudWatch alarms.

**Đáp án: B. Use geolocation routing with failover records in Amazon Route 53.**

---

**Câu 10:** A software engineer has created an AWS account for their own personal development and testing. They want the account to stay within the AWS Free Tier and to not generate unexpected costs. Which approach will work and will require the LEAST effort?

A. Create a service control policy (SCP) to restrict all services that are not included in the AWS Free Tier.

B. Sign in to the AWS Management Console each month and check the billing dashboard.

C. Create an Amazon CloudWatch alarm to send an email message when the account billing exceeds $0.

D. Create an Amazon CloudWatch metric to monitor account billing and limit it to $0.

**Đáp án: C. Create an Amazon CloudWatch alarm to send an email message when the account billing exceeds $0.**
