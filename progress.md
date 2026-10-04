# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Live. The owner's first round of changes (name, headline, three companies, new numbers) is in PR #3, waiting for the owner's OK to merge. |
| **Live site** | https://pradipdj432.github.io/portfolio/ GitHub Pages publishes every merge to `main` (Actions → "pages build and deployment"); the deploy of PR #2 succeeded. |
| **Branches** | `main` has the first version (PR #2). `working` has PR #3. All new work starts on `working` (D-002). |
| **Blocked on** | Nothing. Four small facts are waiting on the owner (Eagerminds role, HFSS, Dhitech end month, certificate year). |
| **Next step** | Owner: answer the four questions and say "merge". Full list in `backlog.md` → "Next up". |

## Where we are
- **Website:** one page with intro, about, experience, projects, skills, credentials and contact. Dark by default with a light theme. "Download résumé" buttons, link previews, a 404 page, and Google search data.
- **Name and headline:** "Pradip Jaliya", "Claude & DevOps · AI Engineer · Full Stack Developer" (D-009, D-010).
- **Experience:** Eagerminds (since April 2026, HFSS), Dhitech Solutions (July 2024 – 2026: gift card system, Call Clutch, Drive PG, each with its live link), Optimum Financial Solutions (March 2023 – June 2024: JM Financial Mutual Fund) (D-011).
- **Projects shown:** DK-Engineer and Aara Culture (live, with screenshots), Parking Management System, Bulldozer Price Prediction, Cricket Score Management System.
- **Numbers:** 4+ years, 5+ certifications, 12+ projects, 800+ LeetCode problems (the owner's).
- **Facts:** everything on the page comes from `profile.md` (the résumé, the older CV and the owner's answers). Unknowns are left off the page and listed in `profile.md` → "Still to confirm".
- **Repo:** website files, the résumé (`resume/Pradip-Jaliya-Resume.pdf`) and the older CV in `resume/archive/`, and the project docs.

## Pull requests
| PR | What | Merged |
|---|---|---|
| — | Setup: rules and project docs. Committed straight to `main`, because the repo was empty (D-002) | 2026-10-04 |
| #1 | Résumé added; `profile.md` filled from it (D-005) | 2026-10-04 |
| #2 | First version of the website: one page, "modern premium" design, dark and light (D-006 to D-008) | 2026-10-04 |
| #3 | Notes after going live, plus the owner's changes: name, headline, three companies, new numbers (D-009 to D-011) | Open |

## Log

### 2026-10-04
- The owner asked to copy the Claude rules and project setup from the DK-Engineer and Aara Culture repos.
- Read both repos' `CLAUDE.md`, `README.md`, `business.md`, `decisions.md`, `backlog.md` and `progress.md`, and the latest replies in those two Claude sessions, to collect the rules.
- This repo was empty: no commits and no branches.
- Created the same rules and docs here, adapted to a personal portfolio. `business.md` became `profile.md` (D-001).
- Filled `profile.md` from the owner's public GitHub profile (name, bio, company, location) and repo list, marked as not yet confirmed for the site.
- Set up the branches: the setup commit went straight to `main`, so `main` is the default branch, and `working` was made from it (D-002). The tool-suggested `claude/charming-albattani-zd5vve` branch wasn't used.
- Proposed plain HTML/CSS/JS (D-003) and GitHub Pages hosting (D-004), waiting for the owner to confirm.
- The owner sent the résumé (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026) and the headline "Claude Native · DevOps & AI Engineer · Full Stack Developer", and said everything else is in the résumé.
- Saved the résumé unchanged as `resume/Pradipkumar-Jaliya-Resume.pdf`, with `resume/README.md` (SHA-256, steps for a new résumé) and an `archive/` folder (D-005). Added the résumé rule to `CLAUDE.md`.
- Filled `profile.md` from the résumé: name, headline, about, contact (email, phone, LinkedIn, GitHub, LeetCode), skills, work at Dhitech Solutions (Gift Card Management System, Call Clutch, Drive PG), projects, 4 certificates, education, competitive coding and courses. Fixed obvious typos in `profile.md` only; the PDF is unchanged.
- Found that the résumé's company (Dhitech Solutions) differs from the GitHub profile's (Optimum Fitech). Kept the résumé's and asked the owner.
- Opened [PR #1](https://github.com/PradipDj432/portfolio/pull/1) from `working` into `main`.
- The owner answered: Dhitech Solutions is the current company; yes to showing the DK-Engineer and Aara Culture websites; yes to plain HTML/CSS/JS and the `pradipdj432.github.io/portfolio` address (D-003, D-004 now Accepted); yes to merging PR #1. **PR #1 merged.** Asked for a "solid, modern, premium" portfolio.
- Built the website on `working`: one page (`index.html`) with intro, about, experience, projects, skills, credentials and contact (D-007). "Modern premium" design: near-black with a warm orange accent, Geist / Geist Mono / Instrument Serif, a code-style profile card, a moving technology row, cards that light up under the pointer, fade-in on scroll, and a light theme with a switch button (D-006). Contact details, links and the résumé file come from `js/config.js`.
- Took screenshots of the DK-Engineer and Aara Culture home pages from their `main` branches (served locally, because this environment's network blocks `*.github.io`) for the project cards (D-008). Made the link-preview image, the favicon and the home-screen icon.
- Added `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` and schema.org `Person` data.
- Tested in Chromium at 390px and 1280px, in dark and light: no horizontal scrolling, no script errors, no failed requests, no broken images, every link and anchor goes somewhere real, fonts load, the menu opens and closes, the theme choice is remembered after a reload, and the 404 page works. Fixed what the screenshots showed: the email icon in the intro showed the full address as text, "Contact" was highlighted in the menu at the top of the page, and the three titles broke awkwardly on phones.
- Updated `CLAUDE.md` (design and code rules), `README.md` (how it works, editing guide, turning on Pages), `profile.md`, `decisions.md` (D-006 to D-008), `backlog.md`.
- Opened [PR #2](https://github.com/PradipDj432/portfolio/pull/2) from `working` into `main`.
- The owner said "merge". **PR #2 merged.** The owner turned on GitHub Pages; GitHub's "pages build and deployment" ran for the merge of PR #2 (commit `c80b909`) and succeeded, so the site is live at https://pradipdj432.github.io/portfolio/. (The run for PR #1 was cancelled because the newer one replaced it.) This environment's network blocks `*.github.io`, so the live pages themselves weren't opened from here; the same files were tested locally before the merge.
- Synced `working` with `main` again and opened [PR #3](https://github.com/PradipDj432/portfolio/pull/3) with this notes update.
- The owner reviewed the live site ("looks good") and asked for changes: "Pradip" instead of "Pradipkumar" everywhere; the headline "Claude & DevOps · AI Engineer · Full Stack Developer" without mixing DevOps and AI; the work history from an older CV (Optimum Financial Solutions, March 2023 – June 2024; Dhitech from July 2024), but keep the main résumé as the download; the new job at Eagerminds since April 2026, where they built HFSS (hfss.ch); live links for the Dhitech projects (callclutch.ai, rbsgift.com, drivepg.com); the new Professional Cloud Architect certificate and their Credly page; "I use Claude Code and Codex to improve and deliver faster"; and new numbers: 4+ years, 5+ certificates, 12+ projects (replacing "3 clouds"), 800+ LeetCode.
- Made all of it on `working` (D-009 to D-011). Renamed the download to `resume/Pradip-Jaliya-Resume.pdf` and saved the older CV as `resume/archive/Pradipkumar-Jaliya-CV-2026-03.pdf` (not linked). Rewrote the About cards to match the three titles, and the Experience section as three company cards. Added the fifth certificate and "See all my badges on Credly", a Credly link in the intro and contact list, and Claude Code, Codex, ASP.NET and SSO to the skills. Regenerated the link-preview image.
- This environment's network blocks eagerminds.in, hfss.ch, callclutch.ai, rbsgift.com, drivepg.com and credly.com, so none of them could be read. The site shows only what the owner said: no Eagerminds role, no HFSS description, "Jul 2024 – 2026" for Dhitech, and a Credly link instead of a year for the new certificate. Asked the owner for those four facts.
- Tested in Chromium at 390px and 1280px, in dark and light: no horizontal scrolling, no script errors, no failed requests, no broken images, all links and anchors resolve. Fixed two things the screenshots showed: a long label in the profile card on phones, and the five certificate cards not lining up at mid widths.
