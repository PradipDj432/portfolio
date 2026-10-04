# Progress

Where the project stands right now, and a dated log of what was done. Update this file at the end of every work session.

## Current status
| | |
|---|---|
| **Phase** | Setup. Rules, project docs and the résumé are in place; `profile.md` has all the facts from the résumé. No website code yet. |
| **Live site** | Not live yet. GitHub Pages gets turned on after the first page is merged. |
| **Branches** | `main` is the default branch. The résumé work is on `working`, in a pull request to `main`. All new work starts on `working` (D-002). |
| **Blocked on** | The owner's OK on the tech and hosting (D-003, D-004) before building. |
| **Next step** | Owner: confirm D-003 and D-004, and the company name. Dev: show design styles, then build the first version. Full list in `backlog.md` → "Next up". |

## Where we are
- **Website:** nothing built yet.
- **Repo:** rules and project docs (`CLAUDE.md`, `README.md`, `profile.md`, `decisions.md`, `backlog.md`, this file) and the résumé in `resume/`.
- **Facts:** `profile.md` holds everything from the résumé (name, headline, about, contact, skills, work, projects, certificates, education, LeetCode, courses), confirmed by the owner. Open questions are at its bottom.
- **Proposed, not confirmed:** plain HTML/CSS/JS (D-003) and GitHub Pages at `pradipdj432.github.io/portfolio` (D-004).

## Pull requests
| PR | What | Merged |
|---|---|---|
| — | Setup: rules and project docs. Committed straight to `main`, because the repo was empty (D-002) | 2026-10-04 |
| #1 | Résumé added; `profile.md` filled from it (D-005) | Open |

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
- Opened [PR #1](https://github.com/PradipDj432/portfolio/pull/1) from `working` into `main`; waiting for the owner's OK to merge.
