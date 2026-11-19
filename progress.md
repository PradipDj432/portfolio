# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live. Twelve pull requests merged (#1–#12): the site is set up for freelance clients, with an inquiry form and two case studies (D-017 to D-020). |
| **Live site** | https://pradipdj432.github.io/portfolio/ GitHub Pages publishes every merge to `main` (Actions → "pages build and deployment"). Every deploy so far has succeeded, the latest for PR #12 (`0e9aa39`) was started on 2026-11-18; check Actions. |
| **Branches** | `working` matches `main`, plus these merge notes for PR #12, which go into `main` with the next pull request (D-014). All new work starts on `working` (D-002). |
| **Blocked on** | Nothing. A few small checks are waiting on the owner ("4+ years", HFSS tech, an updated resume, a photo, testimonials). |
| **Next step** | Owner: send an updated resume and check the live site on a phone; set up LinkedIn "Providing services" if wanted. Full list in `backlog.md` → "Next up". |

## Where we are
What's on the live site today:
- **Page:** one page with intro, about, experience, projects, skills, credentials and contact, plus a "page not found" page. Dark by default with a light theme and a switch button. "Download resume" buttons, link previews for WhatsApp and LinkedIn, and Google search data (D-006, D-007).
- **Intro, About and Projects texts:** the owner's own words. The intro is about cloud-native development, DevOps and AI-assisted engineering; the About text has three paragraphs (the application stack, the cloud and AI tools, the three companies). Python and machine learning stay out of the intro and About texts; they're in the AI Engineer card, Skills and the Bulldozer project (D-015, D-016).
- **Freelance:** an "Available for freelance work" badge, a Services section with four services and "How I work" steps, WhatsApp buttons, and free quotes instead of prices (D-017).
- **Name and titles:** "Pradip Jaliya", "Cloud & DevOps Engineer · AI Engineer · Full Stack Developer", badge "Senior Software Architect at Eagerminds" (D-009, D-016).
- **Experience:** Senior Software Architect at Eagerminds (since April 2026: HFSS, Helvetia Financial Services); Senior Software Engineer at Dhitech Solutions (July 2024 – March 2026: gift card system, Call Clutch, Drive PG, each with its live link); Junior Software Developer and Intern at Optimum Financial Solutions (March 2023 – June 2024: JM Financial Mutual Fund) (D-011).
- **Projects:** DK-Engineer and Aara Culture (live, with screenshots), then Parking Management System, Bulldozer Price Prediction and Cricket Score Management System (D-008).
- **Numbers:** 4+ years, 5+ certifications, 12+ projects, 800+ LeetCode problems (the owner's).
- **Certificates:** Professional Cloud Architect (2026), Generative AI Leader (2026), Associate Cloud Engineer, Azure Fundamentals and AWS Cloud Practitioner (2025).
- **Contact:** email, phone, LinkedIn, GitHub, LeetCode and Credly, all from `js/config.js` (D-012).
- **Facts and wording:** everything on the page comes from `profile.md`, which also lists the exact wording the site uses. Unknowns are left off the page and listed in `profile.md` → "Still to confirm".
- **Repo:** website files; the resume visitors download (`resume/Pradip-Jaliya-Resume.pdf`) and the older CV (`resume/archive/`); the project docs.

## Pull requests
| PR | What | Merged |
|---|---|---|
| — | Setup: rules and project docs. Committed straight to `main`, because the repo was empty (D-002) | 2026-10-04 |
| #1 | Resume added; `profile.md` filled from it (D-005) | 2026-10-04 |
| #2 | First version of the website: one page, "modern premium" design, dark and light (D-006 to D-008) | 2026-10-04 |
| #3 | Notes after going live, plus the owner's first and second rounds: name, headline, three companies, HFSS, job titles, new numbers, plain "resume" (D-009 to D-012) | 2026-10-04 |
| #4 | Third round: headline "Cloud & DevOps", Claude Code and Codex with AI, company links, Dhitech dates, consistency pass (D-013) | 2026-10-04 |
| #5 | Every `.md` file brought in sync with the site and code (D-014) | 2026-10-04 |
| #6 | Clearer intro, About and Projects texts, about cloud and full stack only (D-015) | 2026-10-04 |
| #7 | The owner's own intro, About and Projects texts; headline "Cloud & DevOps Engineer" (D-016) | 2026-10-05 |
| #8 | Freelance on the side: badge, Services section, "How I work", WhatsApp, free quotes (D-017) | 2026-10-05 |
| #9 | Freelance positioning: one title, outcome-based services, tighter About and Skills, location (D-018) | 2026-11-17 |
| #10 | Project inquiry form (Formspree), a Verify link on the Cloud Architect certificate and the Call Clutch case study (D-019, D-020) | 2026-11-17 |
| #11 | Gift card platform case study (D-020) | 2026-11-18 |
| #12 | Verify links on all five certificate cards | 2026-11-18 |
| #13 | End-to-end review fixes: resume link on case study pages, proof numbers in Experience | 2026-11-18 |
| #14 | New footer on the main page and case studies | 2026-11-18 |
| #15 | Service renamed to "Full Stack Development" (D-021) | 2026-11-19 |

## Log

### 2026-10-04

#### Setup (rules and docs)
- The owner asked to copy the Claude rules and project setup from the DK-Engineer and Aara Culture repos.
- Read both repos' `CLAUDE.md`, `README.md`, `business.md`, `decisions.md`, `backlog.md` and `progress.md`, and the latest replies in those two Claude sessions, to collect the rules.
- This repo was empty: no commits and no branches. Created the same rules and docs here, adapted to a personal portfolio; `business.md` became `profile.md` (D-001).
- Set up the branches: the setup commit went straight to `main`, so `main` is the default branch, and `working` was made from it (D-002). The tool-suggested `claude/charming-albattani-zd5vve` branch wasn't used.
- Proposed plain HTML/CSS/JS (D-003) and GitHub Pages hosting (D-004).

#### PR #1 (resume)
- The owner sent the resume (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026) and a first headline, and said everything else is in the resume.
- Saved the resume unchanged in `resume/`, with `resume/README.md` (SHA-256, steps for a new resume) and an `archive/` folder (D-005). Filled `profile.md` from it, fixing obvious typos in `profile.md` only.
- Opened [PR #1](https://github.com/PradipDj432/portfolio/pull/1). The owner confirmed plain HTML/CSS/JS and the `pradipdj432.github.io/portfolio` address (D-003, D-004 accepted) and said yes to showing the DK-Engineer and Aara Culture websites. **PR #1 merged.**

#### PR #2 (first version of the website)
- The owner asked for a "solid, modern, premium" portfolio. Built it on `working`: one page (D-007) in a "modern premium" design, near-black with a warm orange accent, Geist / Geist Mono / Instrument Serif, a code-style profile card, a moving technology row, cards that light up under the pointer, fade-in on scroll, and a light theme with a switch button (D-006). Contact details, links and the resume file come from `js/config.js`.
- Took screenshots of the DK-Engineer and Aara Culture home pages from their `main` branches (served locally, because this environment's network blocks `*.github.io`) for the project cards (D-008). Made the link-preview image, the favicon and the home-screen icon. Added `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` and schema.org `Person` data.
- Tested in Chromium at 390px and 1280px, in dark and light, and fixed what the screenshots showed.
- Opened [PR #2](https://github.com/PradipDj432/portfolio/pull/2). The owner said "merge". **PR #2 merged.** The owner turned on GitHub Pages; the deploy (`c80b909`) succeeded and the site went live.

#### PR #3 (owner's first and second rounds)
- The owner reviewed the live site ("looks good", so D-006 and D-008 are accepted) and asked for changes: "Pradip" instead of "Pradipkumar" everywhere (D-009); the headline with DevOps and AI kept apart (D-010); the work history from an older CV, while keeping the main resume as the download; the new job at Eagerminds since April 2026, where they built HFSS; live links for the Dhitech projects; the Professional Cloud Architect certificate and Credly; "I use Claude Code and Codex to improve and deliver faster"; and new numbers (D-011).
- Renamed the download to `resume/Pradip-Jaliya-Resume.pdf` and saved the older CV as `resume/archive/Pradipkumar-Jaliya-CV-2026-03.pdf` (not linked). Rewrote the About cards and the Experience section (three companies). Regenerated the link-preview image.
- Second round: HFSS described from its own pages, read through web search because hfss.ch is blocked here (Helvetia Financial Services, a Zurich fintech platform); plain "resume" spelling everywhere; Credly only with the contact links; the new certificate's year (2026); job titles Senior Software Architect (Eagerminds) and Senior Software Engineer (Dhitech) (D-012).
- Tested at 390px and 1280px in dark and light after each round. Opened and updated [PR #3](https://github.com/PradipDj432/portfolio/pull/3). The owner said "merge". **PR #3 merged** (`a0a23c7`); the deploy succeeded.

#### PR #4 (owner's third round)
- The owner asked for links to JM Financial Mutual Fund, Dhitech Solutions and Optimum; Dhitech "Jul 2024 to March 2026"; Claude Code and Codex moved from the first About card to the AI section; a slightly smaller name; no "Built with…" footer line; and every place on the site saying the same thing.
- Checked the company names through web search (the sites are blocked here): optimumfintech.com brands itself "Optimum Fintech" and names the company "Optimum Financial Solutions"; dhitech.solutions is "Dhitech Solutions".
- Asked whether the first title meant "Cloud" or "Claude": the owner chose "Cloud & DevOps" (D-013, replaces D-010). Changed it everywhere, including the link-preview image.
- Read the whole page top to bottom and fixed anything that disagreed: the intro now follows the three titles; the Python, Kaggle and Claude Code wording is the same everywhere; "since 2023" came out of the Experience intro because it clashed with "4+ years" (flagged to the owner). Added a rule to `CLAUDE.md` to keep each fact worded the same everywhere.
- Opened [PR #4](https://github.com/PradipDj432/portfolio/pull/4). The owner said "merge". **PR #4 merged** (`f96abe2`); the deploy succeeded. "4+ years" stays as the owner gave it until they say otherwise.

#### PR #5 (docs brought in sync)
- The owner asked for every `.md` file to match what's built and what the code says.
- Checked each file against `index.html`, `js/config.js`, `css/style.css` and the live deploys:
  - `CLAUDE.md`: GitHub Pages is on; added the deploy check after a merge and the "notes ride along with the next pull request" habit (D-014); the facts flow from `profile.md` to the page.
  - `README.md`: fixed the editing example (`<h4>Call Clutch</h4>`), added a guide for changing jobs and work projects, listed Credly and the Google data fields, noted that the link-preview image has text drawn into it, and fixed the folder tree.
  - `decisions.md`: D-006 and D-008 accepted after the owner's "looks good"; D-005 and D-011 statuses point to the decisions that changed them; added D-014.
  - `profile.md`: Claude Code and Codex listed under AI & ML, as on the site; a new "Wording on the site" table with the exact intro, About, card, Experience and link-preview text (checked word for word against the page); "Still to confirm" brought up to date.
  - `backlog.md`: "Done" regrouped by pull request, with notes where a later change replaced something; "Next up" and the open items brought up to date.
  - `progress.md`: this file, with the status refreshed and the log split by round.
  - `resume/README.md`: says which sources feed `profile.md`.
- Opened [PR #5](https://github.com/PradipDj432/portfolio/pull/5). The owner said "merge". **PR #5 merged** (`2de9a51`); the deploy succeeded.

#### PR #6 (clearer intro, About and Projects texts)
- The owner said the intro, About and Projects texts were unclear and mixed things together, and asked to take Python and the things around it out and keep cloud and full stack.
- Asked where Python should go: the owner chose these three texts only, so Python and machine learning stay in the AI Engineer card, Skills and the Bulldozer project. The owner approved the new wording (D-015).
- New texts: the intro (web apps and the cloud, 4+ years, Angular, React and Node.js, AWS, GCP and Azure, the Claude Code and Codex line); the About text (front end, APIs and databases, then infrastructure, CI/CD and the cloud, then the three companies); the Projects text (two live business websites, two full stack apps and one machine learning model). Aara Culture's label is now "Business website · Live", the same as DK ENGINEER'S.
- Updated `profile.md` → "Wording on the site" (checked word for word against the page) and the Aara Culture type.
- Tested at 390px and 1280px in dark and light: no script errors, no failed requests, no sideways scrolling.
- Opened [PR #6](https://github.com/PradipDj432/portfolio/pull/6). The owner said "merge". **PR #6 merged** (`3f57fb2`); the deploy succeeded.

### 2026-10-05

#### PR #7 (the owner's own texts and the new headline)
- The owner sent their own wording for the intro, the About text (three paragraphs) and the Projects text, and the headline "Cloud & DevOps Engineer · AI Engineer · Full Stack Developer" (D-016).
- Put the texts in word for word. Changed the first title everywhere it's shown as a title: page title, link-preview tags, intro, profile card, the first About card, `js/config.js`, and the link-preview image (made again). The Skills group keeps the name "Cloud & DevOps".
- Kept the "—" in the Projects text on the same line as the word before it, so it doesn't start a line on phones.
- Updated `profile.md` (headline and "Wording on the site", checked word for word against the page), `CLAUDE.md` and `README.md`.
- Tested at 390px and 1280px in dark and light: no script errors, no failed requests, no sideways scrolling; the longer title and profile card wrap cleanly on phones.
- Opened [PR #7](https://github.com/PradipDj432/portfolio/pull/7). The owner said "merge". **PR #7 merged** (`d59ff47`); the deploy succeeded.

#### PR #8 (freelance services)
- The owner asked what else could go on the portfolio, then said they want to start freelancing. Shared a plan (freelance badge, Services section, "How I work", WhatsApp in Contact, link preview) and asked four questions. The owner chose: freelance on the side while at Eagerminds; all four services (Cloud & DevOps, business websites, full stack web apps, AI features); clients in India and abroad; no prices, only a free quote (D-017).
- Built it on `working`: the two intro badges and a "Start a project" button; a new Services section between About and Experience with four service cards (each with a "Track record" line taken from facts already on the site), four "How I work" steps and "Get a free quote" / "WhatsApp me" buttons; "Services" in the menu; a "freelance: available" line in the profile card; a WhatsApp button and row in Contact; the WhatsApp link in `js/config.js`; new globe, briefcase and WhatsApp icons. Section numbers moved up by one after About.
- Made the link-preview image again with the "Available for freelance work" badge, and added freelance work to the search and preview descriptions.
- Updated `profile.md` (new "Freelance" section, WhatsApp in "Contact", the new wording, two new open questions), `CLAUDE.md` (section order), `README.md` (sections, WhatsApp setting, a guide to change or pause the freelance offer) and `decisions.md` (D-017).
- Tested at 390px and 1280px in dark and light: no script errors, no failed requests, no sideways scrolling. The header menu still fits at 900–1200px with the extra "Services" link.
- Opened [PR #8](https://github.com/PradipDj432/portfolio/pull/8). The owner confirmed that WhatsApp uses the same number as the phone, and said "merge" (so the "How I work" wording stays). **PR #8 merged** (`b5e0ee2`); the deploy succeeded.

### 2026-11-17

#### PR #9 (freelance positioning)
- The owner shared a review of the site from a freelance-client point of view and asked to start improving it that way (D-018).
- Changed on `working`: one title, "Cloud-Native Full Stack Engineer", everywhere (page title, preview tags and image, intro, profile card, `js/config.js`); a short intro with "Start a project" and "View projects"; badges for availability, location and the current job; About cut to two short paragraphs and three trust cards; four outcome-based services with a "You get" line; Skills regrouped (C++, data structures and IDE tools removed); school details removed from Education; LeetCode moved below Courses and out of the numbers row; a location row in Contact; Amazon Connect named in full; the gift card bullet written as an outcome.
- Left out on purpose, because it needs the owner: the photo, a working inquiry form, case studies, certificate verification links, testimonials and any numbers. The Google Professional Cloud Architect certificate is flagged for the owner to verify.
- Made the link-preview image again. Updated `profile.md`, `CLAUDE.md`, `README.md`, `decisions.md` (D-018) and `backlog.md`.
- Tested at 390px and 1280px in dark and light: no script errors and no sideways scrolling.
- The owner said "merge". **PR #9 merged** (`0d4ddd1`); the deploy was started (check Actions → "pages build and deployment").

#### PR #10 (inquiry form)
- The owner went through the open questions one by one: the Cloud Architect certificate is real (Credly link sent, a Google Cloud badge in the owner's name), there is no professional photo, and the inquiry form should use Formspree. The owner made the form and sent its address.
- Built the "Tell me about your project" form in Contact: name, business email, project type, budget, timeline and description, with checks, a spam trap and thank-you and error messages. Added a "Verify on Credly" link to the certificate (D-019).
- Tested at 390px and 1280px in dark and light with a pretend Formspree: empty and wrong-email checks, a successful send, a failed send, no script errors and no sideways scrolling. No real message was sent to the owner's form.
- Budget choices set with the owner: under $500, $500–$1,500, $1,500–$5,000, $5,000 or more. The owner's rate ($15/hour) stays off the site.
- Case study for Call Clutch, written from the owner's answers (problem, role, why the data and API changes, scale). It is a page in `case-studies/`, linked from the Experience item and added to the sitemap (D-020). Tested at 390px and 1280px in dark and light: no script errors, no sideways scrolling. It also rides in PR #10, because there is one `working` branch.
- The owner said "merge". **PR #10 merged** (`427f532`); the deploy was started (check Actions → "pages build and deployment"). The owner asked to leave the other open items for later.

### 2026-11-18

#### PR #11 (gift card platform case study)
- The owner confirmed the test inquiry reached their email, then answered the case study questions: what the platform is, the features, their role (built from the start, with one developer under their guidance) and the numbers (40+ merchants, 8,000+ users, 500+ transactions a day, $45k so far).
- Built `case-studies/gift-card-platform.html` the same way as the Call Clutch page, linked it from the Experience item and added it to the sitemap. No company name and no screenshots. Tested at 390px and 1280px in dark and light: no script errors, no sideways scrolling.
- The owner said "merge". **PR #11 merged** (`2b0994d`); the deploy was started (check Actions → "pages build and deployment").

#### PR #12 (certificate verify links)
- The owner sent Credly and Microsoft Learn links. Opened the Credly ones to match them: AWS Certified Cloud Practitioner, Generative AI Leader and the Cloud Architect badge (all in the owner's name). The Microsoft link is the Azure Fundamentals share page.
- Added a "Verify" link to those cards. The owner then sent the Associate Cloud Engineer link (a Google Cloud badge in the owner's name), so all five certificates have one.
- The owner said "merge". **PR #12 merged** (`0e9aa39`); the deploy was started (check Actions → "pages build and deployment").

#### End-to-end review
- The owner asked for a full review. Read every page and case study, checked links, anchors and image attributes, and retested at 390px and 1280px in dark and light: no script errors, no sideways scrolling.
- Fixed the Resume link on the case study pages (it pointed to the wrong folder).
- Added the confirmed numbers to Experience: gift card (40+ merchants, 8,000+ users, 500+ transactions a day) and Call Clutch (15 customers, 80+ users, 450+ calls a day).
- Still waiting on the owner: updated resume, photo, testimonials. Open question: "4+ years" wording.
- The owner said "merge". **PR #13 merged** (`98be931`); the deploy was started (check Actions → "pages build and deployment"). The owner kept "4+ years". Privacy line under the form: waiting on the owner's yes or no.

#### Footer
- The owner asked for a better footer that matches the current site. New footer on the main page and both case studies: name and short line, "Available for freelance projects" pill, Explore links, Connect links (email, WhatsApp, LinkedIn, GitHub, Credly), a "Start a project" button, and a bottom line with © and location. Only existing facts and links from `js/config.js`. Tested at 390px and 1280px in dark and light: no script errors, no sideways scrolling.
- The owner said "merge". **PR #14 merged** (`6986607`); the deploy was started (check Actions → "pages build and deployment").

#### Service name
- The owner said "Backend & Full Stack" repeats itself, because full stack already includes backend. Renamed the service to "Full Stack Development" (frontend, backend and database) on the card, in the inquiry form option, `profile.md` and `CLAUDE.md` (D-021). Skills and intro wording about backend stays, because it describes skills.
- The owner said "merge". **PR #15 merged** (`9136b80`); the deploy was started (check Actions → "pages build and deployment").
