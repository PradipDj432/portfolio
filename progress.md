# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live. The owner's third round (headline "Cloud & DevOps", links, Dhitech dates, consistency pass) is on `working`, waiting for the owner's OK to merge. |
| **Live site** | https://pradipdj432.github.io/portfolio/ GitHub Pages publishes every merge to `main` (Actions → "pages build and deployment"); the deploy of PR #3 succeeded. |
| **Branches** | `working` is ahead of `main` with the third round, in PR #4. All new work starts on `working` (D-002). |
| **Blocked on** | Nothing. Two small checks are waiting on the owner ("4+ years", HFSS tech). |
| **Next step** | Owner: look at PR #4 and say "merge". Full list in `backlog.md` → "Next up". |

## Where we are
- **Website:** one page with intro, about, experience, projects, skills, credentials and contact. Dark by default with a light theme. "Download resume" buttons, link previews, a 404 page, and Google search data.
- **Name and headline:** "Pradip Jaliya", "Cloud & DevOps · AI Engineer · Full Stack Developer" (D-009, D-013).
- **Experience:** Senior Software Architect at Eagerminds (since April 2026: HFSS, Helvetia Financial Services), Senior Software Engineer at Dhitech Solutions (July 2024 – March 2026: gift card system, Call Clutch, Drive PG, each with its live link), Junior Software Developer and Intern at Optimum Financial Solutions (March 2023 – June 2024: JM Financial Mutual Fund) (D-011).
- **Projects shown:** DK-Engineer and Aara Culture (live, with screenshots), Parking Management System, Bulldozer Price Prediction, Cricket Score Management System.
- **Numbers:** 4+ years, 5+ certifications, 12+ projects, 800+ LeetCode problems (the owner's).
- **Facts:** everything on the page comes from `profile.md` (the resume, the older CV and the owner's answers). Unknowns are left off the page and listed in `profile.md` → "Still to confirm".
- **Repo:** website files, the resume (`resume/Pradip-Jaliya-Resume.pdf`) and the older CV in `resume/archive/`, and the project docs.

## Pull requests
| PR | What | Merged |
|---|---|---|
| — | Setup: rules and project docs. Committed straight to `main`, because the repo was empty (D-002) | 2026-10-04 |
| #1 | Resume added; `profile.md` filled from it (D-005) | 2026-10-04 |
| #2 | First version of the website: one page, "modern premium" design, dark and light (D-006 to D-008) | 2026-10-04 |
| #3 | Notes after going live, plus the owner's two rounds of changes: name, headline, three companies, HFSS, job titles, new numbers, plain "resume" (D-009 to D-012) | 2026-10-04 |
| #4 | Third round: headline "Cloud & DevOps", Claude Code and Codex with AI, company links, Dhitech dates, consistency pass (D-013) | Open |

## Log

### 2026-10-04
- The owner asked to copy the Claude rules and project setup from the DK-Engineer and Aara Culture repos.
- Read both repos' `CLAUDE.md`, `README.md`, `business.md`, `decisions.md`, `backlog.md` and `progress.md`, and the latest replies in those two Claude sessions, to collect the rules.
- This repo was empty: no commits and no branches.
- Created the same rules and docs here, adapted to a personal portfolio. `business.md` became `profile.md` (D-001).
- Filled `profile.md` from the owner's public GitHub profile (name, bio, company, location) and repo list, marked as not yet confirmed for the site.
- Set up the branches: the setup commit went straight to `main`, so `main` is the default branch, and `working` was made from it (D-002). The tool-suggested `claude/charming-albattani-zd5vve` branch wasn't used.
- Proposed plain HTML/CSS/JS (D-003) and GitHub Pages hosting (D-004), waiting for the owner to confirm.
- The owner sent the resume (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026) and the headline "Claude Native · DevOps & AI Engineer · Full Stack Developer", and said everything else is in the resume.
- Saved the resume unchanged as `resume/Pradipkumar-Jaliya-Resume.pdf`, with `resume/README.md` (SHA-256, steps for a new resume) and an `archive/` folder (D-005). Added the resume rule to `CLAUDE.md`.
- Filled `profile.md` from the resume: name, headline, about, contact (email, phone, LinkedIn, GitHub, LeetCode), skills, work at Dhitech Solutions (Gift Card Management System, Call Clutch, Drive PG), projects, 4 certificates, education, competitive coding and courses. Fixed obvious typos in `profile.md` only; the PDF is unchanged.
- Found that the resume's company (Dhitech Solutions) differs from the GitHub profile's (Optimum Fitech). Kept the resume's and asked the owner.
- Opened [PR #1](https://github.com/PradipDj432/portfolio/pull/1) from `working` into `main`.
- The owner answered: Dhitech Solutions is the current company; yes to showing the DK-Engineer and Aara Culture websites; yes to plain HTML/CSS/JS and the `pradipdj432.github.io/portfolio` address (D-003, D-004 now Accepted); yes to merging PR #1. **PR #1 merged.** Asked for a "solid, modern, premium" portfolio.
- Built the website on `working`: one page (`index.html`) with intro, about, experience, projects, skills, credentials and contact (D-007). "Modern premium" design: near-black with a warm orange accent, Geist / Geist Mono / Instrument Serif, a code-style profile card, a moving technology row, cards that light up under the pointer, fade-in on scroll, and a light theme with a switch button (D-006). Contact details, links and the resume file come from `js/config.js`.
- Took screenshots of the DK-Engineer and Aara Culture home pages from their `main` branches (served locally, because this environment's network blocks `*.github.io`) for the project cards (D-008). Made the link-preview image, the favicon and the home-screen icon.
- Added `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` and schema.org `Person` data.
- Tested in Chromium at 390px and 1280px, in dark and light: no horizontal scrolling, no script errors, no failed requests, no broken images, every link and anchor goes somewhere real, fonts load, the menu opens and closes, the theme choice is remembered after a reload, and the 404 page works. Fixed what the screenshots showed: the email icon in the intro showed the full address as text, "Contact" was highlighted in the menu at the top of the page, and the three titles broke awkwardly on phones.
- Updated `CLAUDE.md` (design and code rules), `README.md` (how it works, editing guide, turning on Pages), `profile.md`, `decisions.md` (D-006 to D-008), `backlog.md`.
- Opened [PR #2](https://github.com/PradipDj432/portfolio/pull/2) from `working` into `main`.
- The owner said "merge". **PR #2 merged.** The owner turned on GitHub Pages; GitHub's "pages build and deployment" ran for the merge of PR #2 (commit `c80b909`) and succeeded, so the site is live at https://pradipdj432.github.io/portfolio/. (The run for PR #1 was cancelled because the newer one replaced it.) This environment's network blocks `*.github.io`, so the live pages themselves weren't opened from here; the same files were tested locally before the merge.
- Synced `working` with `main` again and opened [PR #3](https://github.com/PradipDj432/portfolio/pull/3) with this notes update.
- The owner reviewed the live site ("looks good") and asked for changes: "Pradip" instead of "Pradipkumar" everywhere; the headline "Claude & DevOps · AI Engineer · Full Stack Developer" without mixing DevOps and AI; the work history from an older CV (Optimum Financial Solutions, March 2023 – June 2024; Dhitech from July 2024), but keep the main resume as the download; the new job at Eagerminds since April 2026, where they built HFSS (hfss.ch); live links for the Dhitech projects (callclutch.ai, rbsgift.com, drivepg.com); the new Professional Cloud Architect certificate and their Credly page; "I use Claude Code and Codex to improve and deliver faster"; and new numbers: 4+ years, 5+ certificates, 12+ projects (replacing "3 clouds"), 800+ LeetCode.
- Made all of it on `working` (D-009 to D-011). Renamed the download to `resume/Pradip-Jaliya-Resume.pdf` and saved the older CV as `resume/archive/Pradipkumar-Jaliya-CV-2026-03.pdf` (not linked). Rewrote the About cards to match the three titles, and the Experience section as three company cards. Added the fifth certificate and "See all my badges on Credly", a Credly link in the intro and contact list, and Claude Code, Codex, ASP.NET and SSO to the skills. Regenerated the link-preview image.
- This environment's network blocks eagerminds.in, hfss.ch, callclutch.ai, rbsgift.com, drivepg.com and credly.com, so none of them could be read. The site shows only what the owner said: no Eagerminds role, no HFSS description, "Jul 2024 – 2026" for Dhitech, and a Credly link instead of a year for the new certificate. Asked the owner for those four facts.
- Tested in Chromium at 390px and 1280px, in dark and light: no horizontal scrolling, no script errors, no failed requests, no broken images, all links and anchors resolve. Fixed two things the screenshots showed: a long label in the profile card on phones, and the five certificate cards not lining up at mid widths.
- The owner's second round: describe HFSS from its landing page and static pages; plain "resume" instead of the accented spelling everywhere; Credly only with the phone, LinkedIn, LeetCode and email links, not in the certificates; Professional Cloud Architect earned in 2026; job titles Senior Software Architect (Eagerminds) and Senior Software Engineer (Dhitech).
- hfss.ch is blocked here, directly and through archive sites, so its own pages were read through web search: HFSS is Helvetia Financial Services, a Zurich fintech platform for payments (SEPA, SEPA Instant, TARGET2, SWIFT), crypto exchange and wallet, digital custody, currency exchange and debit cards, with Swiss-grade security and compliance. Added that to the HFSS entry in `profile.md` and on the site.
- Made the changes (D-012): "resume" in plain letters across the site, code and docs; removed the Credly link from the certificate card and the "See all my badges on Credly" link; the new certificate shows 2026; new job titles in the experience cards, the intro badge, the profile card, the Google search data and the link-preview image.
- The owner said "merge". **PR #3 merged** (`a0a23c7`); GitHub's "pages build and deployment" for it succeeded, so the changes are live. Synced `working` with `main`.
- The owner's third round: links for JM Financial Mutual Fund (jmfinancialmf.com), Dhitech Solutions (dhitech.solutions) and Optimum (optimumfintech.com); Dhitech "Jul 2024 to March 2026"; move Claude Code and Codex from the first About card to the AI section; the name in the intro a little smaller; remove the "Built with…" footer line; and make every place on the site say the same thing.
- Checked the company names through web search (the sites are blocked here): optimumfintech.com brands itself "Optimum Fintech" and names the company "Optimum Financial Solutions", so the CV's name stays; dhitech.solutions is "Dhitech Solutions".
- With Claude Code and Codex moved out, the "Claude & DevOps" card was only about cloud. Asked the owner: the first title is "Cloud & DevOps" (D-013). Changed it everywhere, including the link-preview image.
- Read the whole page top to bottom for anything that disagreed. Rewrote the intro to follow the three titles; made the Python and Kaggle wording match across the intro, About, AI card and competitive coding; made the Claude Code line identical in both places; removed "since 2023" from the Experience intro because it clashed with "4+ years" (flagged to the owner instead). Added a rule to `CLAUDE.md` to keep each fact worded the same everywhere.
