# Profile

Facts about the owner, for the portfolio, and the exact wording the site uses for them. Technical details go in `README.md`, choices go in `decisions.md`. The site (`index.html`, `js/config.js` and the link-preview image) must say the same as this file.

**Sources:**
1. The main resume, `resume/Pradip-Jaliya-Resume.pdf` (made April 2026, added 2026-10-04). This is the file visitors download.
2. An older CV, `resume/archive/Pradipkumar-Jaliya-CV-2026-03.pdf` (made March 2026, sent 2026-10-04). The owner said to take the work history from it: Optimum Financial Solutions, then Dhitech Solutions from July 2024. It isn't offered for download.
3. The owner's own answers on 2026-10-04: the name to show, the headline ("Cloud", not "Claude"), the new job at Eagerminds and the job titles, the Dhitech end month, the company and project links, the new certificate and its year, Credly, Claude Code and Codex, and the numbers in the intro.
4. For HFSS only: hfss.ch's own pages, read through web search on 2026-10-04 (this environment can't open the site directly). The owner asked for HFSS to be described from its landing page and static pages.

Where these disagree, the owner's latest answer wins, then the older CV for work history, then the main resume. When a new resume comes in, update this file to match (steps in `resume/README.md`). Open questions are under "Still to confirm".

## At a glance
| | |
|---|---|
| **Name on the website** | **Pradip Jaliya**, everywhere (owner, 2026-10-04; D-009). Full name on the resume: Pradipkumar Jaliya |
| **Headline** | Cloud & DevOps · AI Engineer · Full Stack Developer (owner, 2026-10-04; "Cloud", the cloud, not "Claude"; DevOps and AI kept apart; D-013) |
| **Experience** | 4+ years (owner). Work started March 2023 |
| **Current job** | Senior Software Architect at Eagerminds (https://www.eagerminds.in/), since April 2026 (owner) |
| **Companies** | 3: Optimum Financial Solutions → Dhitech Solutions → Eagerminds |
| **How they work** | Uses Claude Code and Codex "to improve and deliver faster" (owner's words). On the site these sit with AI, not with cloud (D-013) |
| **Resume (download)** | `resume/Pradip-Jaliya-Resume.pdf` |
| **Website** | https://pradipdj432.github.io/portfolio/ (live) |

## Numbers in the intro
Given by the owner on 2026-10-04 (D-011).

| Number | Shown as |
|---|---|
| Years of experience | 4+ |
| Cloud & AI certifications | 5+ |
| Projects built | 12+ |
| LeetCode problems solved | 800+ |

## About (from the resume)
> Cloud DevOps–oriented Full Stack Developer with 3 years of overall experience, working with AWS, GCP, and Azure for application deployment, cloud infrastructure support, CI/CD pipelines, and container-based workflows. Strong Full Stack experience in building and maintaining scalable web applications using Angular, React, Node.js, MSSQL, and MySQL, including Single Page Applications (SPAs) and RESTful APIs. Good problem-solving skills, eager to learn, with basic knowledge of data science and machine learning concepts using Python.

(The site says 4+ years, as the owner asked, not the resume's 3.)

## Contact
| Channel | Detail |
|---|---|
| Email | pradipjaliya9802@gmail.com |
| Phone | +91 63524 65074 |
| LinkedIn | https://www.linkedin.com/in/pradipjaliya/ |
| GitHub | https://github.com/PradipDj432 |
| LeetCode | https://leetcode.com/Dj432/ |
| Credly | https://www.credly.com/users/pradipdj432/badges/credly |

## Skills
| Area | Skills |
|---|---|
| Cloud & DevOps | AWS, GCP, Azure (Terraform, CI/CD pipelines, Docker, Kubernetes) |
| Backend | Node.js, NestJS (Express.js, REST APIs, microservices, schedulers); ASP.NET and SSO from the Optimum work |
| Database | MySQL, MS SQL, DynamoDB (RDBMS, NoSQL, SQL) |
| Frontend | Angular, React (HTML, CSS, TypeScript, JavaScript, jQuery) |
| AI & ML | Claude Code and Codex (AI coding tools, "to improve and deliver faster"); Python (GenAI, LLMs, NumPy, Matplotlib, Pandas, Scikit-learn) |
| DSA | C++ (arrays, linked lists, stacks, queues, trees, heaps, sorting, searching) |
| Tools | Git, GitHub, Bitbucket, Sourcetree, Postman, Jira, Confluence, Visual Studio, VS Code |

## Work experience
Newest first.

### Eagerminds — Senior Software Architect (April 2026 – now)
https://www.eagerminds.in/ · Title from the owner, 2026-10-04.

**HFSS: Helvetia Financial Services** (https://hfss.ch/)
Built by the owner at Eagerminds (owner's words: "in which I build this project"). What HFSS is, from its own pages (source 4):
- A Zurich, Switzerland fintech platform: "one platform for Payments, Crypto Exchange, Digital Custody, Currency Exchange and Debit Cards", described as "the financial backbone for modern finance".
- Payments: SEPA, SEPA Instant, TARGET2 and SWIFT, with an IBAN dedicated to payment processing; internal transfers.
- Crypto: fiat/crypto and crypto/crypto exchange, and a crypto wallet to store, send and receive.
- Currency exchange 24/7 for the top 10 currencies; dedicated debit card accounts with real-time status and automated reconciliation.
- Security and compliance: certified HSMs, segregated funds, fraud monitoring, geo-redundant backups in Switzerland, AML/KYC/KYB/KYT and Travel Rule support, sanctions screening, accountant access with limited rights, REST APIs and webhooks, 99.99% uptime.
- The tech stack the owner used: still to confirm.

### Dhitech Solutions — Senior Software Engineer (July 2024 – March 2026)
https://dhitech.solutions/ · Title and end date from the owner, 2026-10-04 (both resumes say "Software Developer"). Start date from the older CV. The main resume says "March 2023 – Current"; the owner said to use the older CV's dates.

**Gift Card Management System** (Angular, Node.js, MySQL, AWS) · live at http://rbsgift.com/
- Built a gift card management system with role-based access (Merchant, Admin, etc.).
- AWS Cognito for sign-in, S3 for storage, and OTP-based security for user login.
- Gift card purchase, redemption, transfer (future or instant) and expiry management.
- Improved backend performance and the data flow between frontend and backend.
- Deployed on AWS using ECS, with CI/CD pipelines and cloud infrastructure managed in Terraform.

**Call Clutch** (React, Python, AWS Connect, AWS Lambda, API Gateway, DynamoDB) · live at https://callclutch.ai/ (app: https://app.callclutch.ai/)
- Led the development of a call tracking and management system using AWS Connect, React and Python Serverless.
- Migrated from DynamoDB to an RDBMS, from AWS Lambda and API Gateway to Node.js, and added AWS QuickSight for data visualisation.
- Built call forwarding, campaign creation and phone number assignment, with a focus on scalability and high availability.

**Drive PG** (AWS, S3, Lambda, Step Functions, SES, QuickSight) · live at https://drivepg.com/
- Built a data analytics dashboard for AWS Marketing Cloud using AWS Athena, QuickSight and S3.
- Automated data extraction and storage with AWS Lambda, EventBridge and Step Functions.
- Automated email workflows with AWS SES, and fed marketing campaign data into the React dashboard for real-time updates.

### Optimum Financial Solutions — Junior Software Developer and Intern (March 2023 – June 2024)
https://www.optimumfintech.com/ (link from the owner) · From the older CV. The company's site brands itself "Optimum Fintech" and names the company "Optimum Financial Solutions", so the CV's name is kept. The GitHub profile's "Optimum Fitech" refers to this company.

**JM Financial Mutual Fund** (Angular, ASP.NET, MS SQL) · https://www.jmfinancialmf.com/ (link from the owner)
- Completed extensive training in Angular, the ASP.NET Framework and MS SQL, and applied it to the real-time mutual fund application.
- Developed, tested and maintained the mutual fund application with Angular, ASP.NET and MS SQL; integrated microservice APIs, managed databases, and used data binding for smooth data synchronisation.
- Built modules for single sign-on (SSO) login, schedulers, bulk insertion, brokerage calculations and report generation.
- Integrated microservice APIs and optimised data synchronisation for better processing and reporting.

## Projects
Personal and freelance projects (work projects are under "Work experience"). The owner confirmed on 2026-10-04 that the DK-Engineer and Aara Culture websites are shown too. The other three come from the resume.

| Project | Type | Built with | What it does | Links |
|---|---|---|---|---|
| DK ENGINEER'S website | Business website, live | HTML, CSS, JavaScript, GitHub Pages, Claude Code | Website for an industrial hardware manufacturer and supplier in Vapi: a 14-section catalogue from their printed PDF, an inquiry form that opens email or WhatsApp, mobile-first | [Live](https://pradipdj432.github.io/DK-Engineer/), [Code](https://github.com/PradipDj432/DK-Engineer) |
| Aara Culture website | Business website, live | HTML, CSS, JavaScript, JSON, GitHub Pages, Claude Code | Catalog for a women's clothing brand: shop with category and size filters, product pages, WhatsApp orders with a ready message, "minimal luxury" design, products in one JSON file | [Live](https://pradipdj432.github.io/aara-culture/), [Code](https://github.com/PradipDj432/aara-culture) |
| Parking Management System | Full stack | Angular, ASP.NET, MS SQL | Pre-booking of parking slots and admin management of parking allocations; real-time monitoring for watchmen to track entries and exits; live parking availability | [SQL](https://github.com/PradipDj432/Parking-Management-System-SQL) (the resume's link), [UI](https://github.com/PradipDj432/Parking-Management-System-UI), [API](https://github.com/PradipDj432/Parking-Management-System-API) |
| Cricket Score Management System | Full stack | Angular, ASP.NET, MS SQL | Admins update live cricket scores and manage match details; users see real-time scores and match information; validation for data integrity | No link on the resume |
| Bulldozer Price Prediction | Data science & ML | Python, NumPy, Pandas, Matplotlib, Scikit-learn, Jupyter, Conda | Random Forest regression model that predicts bulldozer prices; 92% accuracy using bagging and boosting | [Code](https://github.com/PradipDj432/Bulldozer-price-prediction) |

## Certificates
All badges are on Credly (link under "Contact"). The site shows Credly only with the contact links, not in the certificates section (D-012).

| Certificate | From | Year |
|---|---|---|
| Professional Cloud Architect | Google | 2026 (owner) |
| Generative AI Leader | Google | 2026 |
| Associate Cloud Engineer | Google | 2025 |
| Microsoft Certified: Azure Fundamentals | Microsoft | 2025 |
| AWS Certified Cloud Practitioner | AWS | 2025 |

## Education
| School | Course | Years | Result |
|---|---|---|---|
| L.D. College of Engineering, Ahmedabad | B.E. in Computer Science & Engineering | 2019 – 2023 | 8.02/10 CGPA |
| Belur Vidhyalaya, Bhavnagar | Higher Secondary Certificate (HSC) | 2017 – 2019 | 88/100 |
| Belur Vidhyalaya, Bhavnagar | Secondary School Certificate (SSC) | 2015 – 2017 | 82/100 |

## Competitive coding
- **LeetCode:** 800+ DSA and SQL problems solved (owner, 2026-10-04; the resume says 700+) (https://leetcode.com/Dj432/).
- **Kaggle:** uses Kaggle datasets for machine learning models.

## Courses
| Course | Year |
|---|---|
| Basics of Data Science and Machine Learning | 2022 |
| SQL Server tutorial for beginners | 2023 |
| MERN full stack development | 2024 |

## Other repos on GitHub
Public repos not on the resume and not on the site (from GitHub, 2026-10-04). Shown only if the owner picks them.

| Repo | What it is | Last update |
|---|---|---|
| [parcel-tracker](https://github.com/PradipDj432/parcel-tracker) | Not described yet | 2026-04 |
| [video-player-frontend](https://github.com/PradipDj432/video-player-frontend), [video-player-backend](https://github.com/PradipDj432/video-player-backend) | Not described yet | 2025-01 |
| [CPP](https://github.com/PradipDj432/CPP) | Not described yet | 2024-05 |
| [Marketyard-price-update](https://github.com/PradipDj432/Marketyard-price-update) | Not described yet | 2022-11 |
| [Heart-disease-classification](https://github.com/PradipDj432/Heart-disease-classification) | Not described yet | 2022-11 |
| [Numpy-learn](https://github.com/PradipDj432/Numpy-learn), [Pandas-learn](https://github.com/PradipDj432/Pandas-learn), [Matplotlib-learn](https://github.com/PradipDj432/Matplotlib-learn), [Scikit-learn](https://github.com/PradipDj432/Scikit-learn) | Learning notes (by name) | 2022-11 |
| [DataAnalysisProjects](https://github.com/PradipDj432/DataAnalysisProjects) | A fork of someone else's repo | 2022-10 |

## Still to confirm
Tracked in `backlog.md`. Until answered, nothing about these goes on the site, except "4+ years", which stays as the owner gave it.

- **Years of experience:** the owner says 4+; the work history on the site starts in March 2023 (about 3.5 years in October 2026). Keep "4+" (for example, if there is earlier work not on the site) or change it to "3+".
- **HFSS tech stack:** what the owner used to build it (the site shows the product areas instead).
- **Company name style:** "Eagerminds", or another spelling such as "EagerMinds"?
- **Cricket Score Management System:** is there a repo or live link? The resume has none.
- **Location:** the resume doesn't give one; GitHub says Ahmedabad. Show it or not?
- **Photo** of the owner, if wanted.

## Wording on the site
The main lines as the site writes them, built from the facts above. The owner reviewed the live site on 2026-10-04 ("looks good"). When a fact changes, change these lines and the matching text in `index.html` together, so every place says the same thing.

| Where | Text |
|---|---|
| Intro badge | Senior Software Architect at Eagerminds |
| Name | Pradip Jaliya |
| Titles | Cloud & DevOps · AI Engineer · Full Stack Developer |
| Intro | I build web apps and run them in the cloud, with 4+ years of experience. I work with Angular, React and Node.js, and deploy on AWS, GCP and Azure. I use Claude Code and Codex to improve and deliver faster. |
| About | I build full stack apps from start to finish: the front end with Angular and React, REST APIs with Node.js and ASP.NET, and databases with MS SQL and MySQL. Then I set up the infrastructure and CI/CD, and deploy and run the apps on AWS, GCP and Azure. Today I'm a Senior Software Architect at Eagerminds, after Dhitech Solutions and Optimum Financial Solutions. |
| Card: Cloud & DevOps | I deploy and run apps on AWS, GCP and Azure: infrastructure as code with Terraform, CI/CD pipelines, Docker and Kubernetes, and serverless workflows with Lambda and Step Functions. Certified on AWS, Azure and Google Cloud, including Google Professional Cloud Architect. |
| Card: AI Engineer | I use Claude Code and Codex to improve and deliver faster. In Python I work on machine learning and GenAI with NumPy, Pandas, Scikit-learn and LLMs, and build models from Kaggle datasets. Google-certified Generative AI Leader. |
| Card: Full Stack Developer | I build scalable single-page apps with Angular and React, and REST APIs and microservices with Node.js, NestJS and ASP.NET, on MySQL, MS SQL and DynamoDB. |
| Experience intro | Three companies, across Swiss fintech, call tracking, gift cards, marketing analytics and mutual funds. |
| Projects intro | Two live websites for real businesses, two full stack apps and one machine learning model. |
| Numbers | 4+ years of experience · 5+ cloud & AI certifications · 12+ projects built · 800+ LeetCode problems solved |
| Link preview | "Pradip Jaliya. Cloud & DevOps · AI Engineer · Full Stack Developer", badge "Senior Software Architect at Eagerminds", "4+ yrs · 5+ certifications · 12+ projects" |
