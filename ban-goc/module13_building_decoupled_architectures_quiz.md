# Module 13: Building Decoupled Architectures Quiz - AWS

---

**Câu 1:** Which statement describes the difference between tightly and loosely coupled architectures?

A. Loosely coupled architectures must use managed services, and tightly coupled architectures don't have this limitation.

B. Tightly coupled architectures are more likely to fail than loosely coupled architectures.

C. Loose coupling increases the complexity of scaling. Tight coupling decreases it.

D. Components in a tightly coupled architecture are highly dependent on each other. In a loosely coupled architecture, components aren't highly dependent on each other.

**Đáp án: D. Components in a tightly coupled architecture are highly dependent on each other. In a loosely coupled architecture, components aren't highly dependent on each other.**

---

**Câu 2:** Which statements describe Amazon Simple Queue Service (Amazon SQS)? (Select THREE.)

A. Supports standard queues and topics

B. Enables you to decouple and scale microservices, distributed systems, and serverless applications

C. Sends push notifications to consumers

D. Requires a consumer to poll the queue for messages

E. Supports email and text messaging

F. Stores and optionally encrypts messages until they are processed and deleted

**Đáp án: B. Enables you to decouple and scale microservices, distributed systems, and serverless applications; D. Requires a consumer to poll the queue for messages; và F. Stores and optionally encrypts messages until they are processed and deleted.**

---

**Câu 3:** Which statements are true when using an Amazon Simple Queue Service (Amazon SQS) standard queue? (Select TWO.)

A. Messages can be sent in any order.

B. Messages can be assigned a priority.

C. Messages must be processed in the order that they are sent.

D. A message must be processed only once.

E. A message might be delivered more than once.

**Đáp án: A. Messages can be sent in any order và E. A message might be delivered more than once.**

---

**Câu 4:** A fleet of Amazon EC2 instances process videos that users upload. Which function can Amazon Simple Queue Service (Amazon SQS) perform in this application?

A. An SQS queue receives messages from the application and notifies all available EC2 instances that videos are available.

B. The application places job messages in an SQS queue. EC2 instances with available processing capacity pull the next job message from the queue.

C. The application writes the video files to an SQS queue. EC2 instances with available processing capacity pull the next video from the queue.

D. EC2 instances put edited video files in an SQS queue. The application retrieves the videos from the queue.

**Đáp án: B. The application places job messages in an SQS queue. EC2 instances with available processing capacity pull the next job message from the queue.**

---

**Câu 5:** What is Amazon Simple Notification Service (Amazon SNS)?

A. A serverless event bus that enables easy connection of applications by using data from your own applications, integrated software as a service (SaaS) applications, and AWS services

B. A flexible and scalable outbound and inbound marketing communications service that uses email, short message service (SMS), push, or voice communication channels

C. A fully managed messaging service for both system-to-system and application-to-person (A2P) communication, which uses publish/subscribe patterns

D. A cost-effective, flexible, and scalable email service that enables developers to send email from within any application

**Đáp án: C. A fully managed messaging service for both system-to-system and application-to-person (A2P) communication, which uses publish/subscribe patterns**

---

**Câu 6:** What are some use cases for Amazon Simple Notification Service (Amazon SNS)? (Select THREE.)

A. Trigger a single AWS Lambda function when an object is created in an Amazon S3 bucket.

B. Hold input until it can be processed in the order that it's received.

C. Send a text message to systems operators when unusual activity has been detected.

D. Send a push notification to mobile applications when a new software update is available.

E. Gather streaming data from multiple systems.

F. Notify multiple systems that user input is ready for processing.

**Đáp án: C. Send a text message to systems operators when unusual activity has been detected; D. Send a push notification to mobile applications when a new software update is available; và F. Notify multiple systems that user input is ready for processing.**

---

**Câu 7:** What are some features of Amazon Simple Notification Service (Amazon SNS)? (Select TWO.)

A. Guaranteed message delivery even when an endpoint isn't accessible

B. Recall of sent messages

C. Message delivery to a URL

D. Message delivery to an Amazon Simple Queue Service (Amazon SQS) queue

E. Providing strict message ordering with standard topics.

**Đáp án: C. Message delivery to a URL và D. Message delivery to an Amazon Simple Queue Service (Amazon SQS) queue**

---

**Câu 8:** Two different AWS Lambda functions must simultaneously process PDF files that are uploaded to an Amazon S3 bucket. The S3 event notification allows only one action when the PDF files are uploaded. Which solution provides the least complex way to process messages with both Lambda functions efficiently?

A. Send the S3 event to an Amazon Simple Queue Service (Amazon SQS) queue that both Lambda functions poll.

B. Upload two copies of each PDF file by using different object key prefixes.

C. Send the S3 event to Amazon MQ for distribution to both Lambda functions.

D. Send the S3 event to an Amazon Simple Notification Service (Amazon SNS) topic that both Lambda functions subscribe to.

**Đáp án: D. Send the S3 event to an Amazon Simple Notification Service (Amazon SNS) topic that both Lambda functions subscribe to.**

---

**Câu 9:** What is Amazon MQ?

A. Data migration service

B. Application monitoring service

C. Message broker service

D. Identity broker service

**Đáp án: C. Message broker service**

---

**Câu 10:** Which is a common use case for Amazon MQ?

A. Connect a virtual private cloud (VPC) to an on-premises network.

B. Decouple components in a new cloud-native application.

C. Upload a standalone static website to AWS.

D. Leverage an existing on-premises application that uses Apache ActiveMQ to communicate between microservices.

**Đáp án: D. Leverage an existing on-premises application that uses Apache ActiveMQ to communicate between microservices.**
