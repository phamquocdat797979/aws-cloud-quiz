# Module 3: Securing Access Quiz - AWS

---

**Câu 1:** Which statement reflects a design principle of the security pillar of the Well-Architected Framework?

A. Do not deploy a solution to production until you're certain that no security risks exist.

B. Decentralize privilege management.

C. Ensure that staff are actively monitoring potential risks manually.

D. Apply security at all layers of an architecture.

**Đáp án: D. Apply security at all layers of an architecture.**

---

**Câu 2:** Which statements about responsibility are accurate based on the AWS shared responsibility model? (Select TWO.)

A. Customers are responsible for managing their user data.

B. Customers are responsible for the installation, maintenance, and decommissioning of the hardware that they use in the AWS data center.

C. AWS is responsible for the physical security of data centers.

D. AWS is responsible for the configuration of security groups.

E. AWS is responsible for host-based firewall configurations.

**Đáp án: A. Customers are responsible for managing their user data và C. AWS is responsible for the physical security of data centers.**

---

**Câu 3:** Which options are characteristics of the principle of least privilege? (Select TWO.)

A. Craft security policies that limit access to specific tasks.

B. Always use groups.

C. Monitor actions and changes.

D. Use encryption.

E. Grant access only as needed.

**Đáp án: A. Craft security policies that limit access to specific tasks và E. Grant access only as needed.**

---

**Câu 4:** Which statement about AWS Identity and Access Management (IAM) is true?

A. IAM provides an audit trail of who performed an action, what action they performed, and when they performed it.

B. IAM provides an extra layer of security by offering anomaly detection on resources.

C. With IAM, you can grant principals granular access to resources.

D. With IAM, you can manage encryption for items that require encryption at rest.

**Đáp án: C. With IAM, you can grant principals granular access to resources.**

---

**Câu 5:** Which statements describe AWS Identity and Access Management (IAM) roles? (Select TWO.)

A. They can only be used by accounts that are associated to the person who creates the role.

B. They are uniquely associated to an individual.

C. They provide temporary security credentials.

D. They provide permanent security credentials.

E. Individuals, applications, and services can assume roles.

**Đáp án: C. They provide temporary security credentials và E. Individuals, applications, and services can assume roles.**

---

**Câu 6:** Which statement reflects a best practice for the root user on an AWS account?

A. Remove unneeded permissions from the root user account.

B. Create two root users with separate credentials and distribute them to two different individuals.

C. To avoid getting locked out of the account, do not enable multi-factor authentication (MFA) on the root account.

D. Create an admin user and perform most admin tasks with this user instead of the root user.

**Đáp án: D. Create an admin user and perform most admin tasks with this user instead of the root user.**

---

**Câu 7:** How does AWS Identity and Access Management (IAM) evaluate a policy?

A. It checks for explicit allow statements before it checks for explicit deny statements.

B. It checks for explicit deny statements before it checks for explicit allow statements.

C. If the policy doesn't have any explicit deny statements or explicit allow statements, users have access by default.

D. An explicit deny statement does not override an explicit allow statement.

**Đáp án: B. It checks for explicit deny statements before it checks for explicit allow statements.**

---

**Câu 8:** Which statement about AWS Identity and Access Management (IAM) policies is accurate?

A. Resource-based policies are attached to a user, group, or role.

B. Resource-based policies allow access by default.

C. Identity-based policies can only be attached to a single entity.

D. Identity-based policies are attached to a user, group, or role.

**Đáp án: D. Identity-based policies are attached to a user, group, or role.**

---

**Câu 9:** Which AWS Identity and Access Management (IAM) policy element includes information about whether to allow or deny a request?

A. Effect

B. Action

C. Condition

D. Principal

**Đáp án: A. Effect**

---

**Câu 10:** Which option accurately describes the statement element in an AWS Identity and Access Management (IAM) policy?

A. A policy can only have one statement element.

B. The statement element contains other elements that together define what is allowed or denied.

C. The statement element does not apply to identity-based policies.

D. The statement element is an optional part of an IAM policy.

**Đáp án: B. The statement element contains other elements that together define what is allowed or denied.**
