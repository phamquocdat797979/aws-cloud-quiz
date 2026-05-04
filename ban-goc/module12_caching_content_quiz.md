# Module 12: Caching Content Quiz - AWS

---

**Câu 1:** What is caching?

A. A global network for content distribution

B. A way to store passwords

C. A high-speed data storage layer

D. An in-memory database

**Đáp án: C. A high-speed data storage layer**

---

**Câu 2:** Which type of data should you cache?

A. Data that can be retrieved quickly with simple queries

B. Specialized data that is needed by a subset of users

C. Static data that is frequently accessed

D. Dynamically generated web content

**Đáp án: C. Static data that is frequently accessed**

---

**Câu 3:** Which is a benefit of caching?

A. Decreased costs

B. Increased application reliability

C. Reduced response latency

D. Load balancing the application

**Đáp án: C. Reduced response latency**

---

**Câu 4:** Which types of content on a web page can be cached using an edge cache? (Select TWO.)

A. User-generated data, such as search terms entered by user

B. Video files, such as a product demo

C. Shopping cart filled with a user's item

D. Web objects, such as hyperlinks

E. Dynamically generated content, such as a user's name

**Đáp án: B. Video files, such as a product demo và D. Web objects, such as hyperlinks**

---

**Câu 5:** What does Amazon CloudFront enable?

A. Multi-tiered and regional caching of content

B. Bidirectional caching between users and an origin host

C. Transactional processing with an in-memory database

D. Automatic creation of a time to live (TTL) value

**Đáp án: A. Multi-tiered and regional caching of content**

---

**Câu 6:** How does Amazon CloudFront use edge locations?

A. It caches frequently accessed content at edge locations. It delivers the cached content to clients through the edge location with the lowest latency to those clients.

B. It caches all content from an origin distribution at the edge location and delivers the content to clients through the fastest edge location.

C. It caches Regional data at Regional edge locations and delivers the content to clients through their Regional edge locations.

D. It caches local content at edge locations. It delivers the cached content to clients through the edge location that requires the fewest network hops to reach those clients.

**Đáp án: A. It caches frequently accessed content at edge locations. It delivers the cached content to clients through the edge location with the lowest latency to those clients.**

---

**Câu 7:** Which statement describes an efficient way to deliver on-demand video content?

A. Launch an Amazon EC2 instance to host your video content. Then use Amazon CloudFront to deliver the content.

B. Use Amazon S3 to store and serve the content.

C. Launch an Amazon EC2 instance to host and serve your video content.

D. Use Amazon S3 to store the content. Then use Amazon CloudFront to deliver the content.

**Đáp án: D. Use Amazon S3 to store the content. Then use Amazon CloudFront to deliver the content.**

---

**Câu 8:** Which role does Amazon CloudFront play in protecting against distributed denial of service (DDoS) attacks?

A. Controls traffic by the source IP addresses of requests

B. Restricts traffic by geography to help block attacks that originate from specific countries

C. Performs deep packet inspection to detect attacks

D. Routes traffic through edge locations

**Đáp án: B. Restricts traffic by geography to help block attacks that originate from specific countries**

---

**Câu 9:** How can an application use Amazon ElastiCache to improve database read performance? (Select TWO.)

A. Read data from the database first, and write the most frequently read data to ElastiCache.

B. Replicate the database in ElastiCache, and direct all reads to ElastiCache and all writes to the database.

C. Direct all read requests to the database, and configure it to read from ElastiCache when a cache miss occurs.

D. Read data from ElastiCache first, and write to ElastiCache when a cache miss occurs.

E. Write data to ElastiCache whenever the application writes to the database.

**Đáp án: A. Read data from the database first, and write the most frequently read data to ElastiCache và E. Write data to ElastiCache whenever the application writes to the database.**

---

**Câu 10:** Which type of caching strategy should be used when there's data that must be updated in real time?

A. Time to live (TTL)

B. Lazy loading

C. Write-through

D. Cache-control headers

**Đáp án: C. Write-through**
