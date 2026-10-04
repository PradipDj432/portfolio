# Decisions

A log of choices made for the portfolio website and why. Add new decisions at the bottom with the next number. Never delete an old one: if it changes, add a new decision that replaces it and set the old one's status to `Replaced by D-xxx`.

**Status values:** `Accepted` (owner agreed) · `Proposed` (suggested, not confirmed by the owner yet) · `Replaced by D-xxx`

## Index
| # | Decision | Status |
|---|---|---|
| D-001 | Same rules and project docs as DK-Engineer and Aara Culture | Accepted |
| D-002 | All work on one `working` branch, merged to `main` by pull request | Accepted |
| D-003 | Plain HTML/CSS/JavaScript with no build step | Proposed |
| D-004 | Host on GitHub Pages from `main`, repo root, on the free address | Proposed |
| D-005 | The résumé PDF is kept in the repo and is the source for the site's facts | Accepted |

When you add a decision, add a row here too.

---

## D-001 — Same rules and project docs as DK-Engineer and Aara Culture
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner asked to copy the Claude rules and project setup from the DK-Engineer and Aara Culture repos, so this repo works the same way.
- **Decision:** Use the same `CLAUDE.md` rules and the same five docs: `README.md`, `decisions.md`, `backlog.md`, `progress.md`, and `profile.md`. `profile.md` does the job of `business.md` in the other repos; it's renamed because this site is about a person, not a business. The "Working with the owner" rules come from Aara Culture; the branch steps, the doc table and the decision index come from DK-Engineer, which has the newer version of each.
- **Alternatives considered:** Keep the name `business.md`; start with only `CLAUDE.md` and add docs later.
- **Consequences:** The same way of working in all three repos. When a rule changes in one repo, consider changing it in the others too.

## D-002 — All work on one `working` branch, merged to `main` by pull request
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner's rule in the other two repos (DK-Engineer D-011, Aara Culture D-019): one simple branch called `working`, no long auto-generated names. This repo was empty (no commits, no branches), and the session tool suggested the branch `claude/charming-albattani-zd5vve`. In an empty repo, the first branch pushed becomes the default branch on GitHub.
- **Decision:** The first commit (this setup) went straight to `main`, because there was no `main` yet for a pull request to merge into. `working` was made from it. From now on, every change goes `working` → pull request → merge into `main` when the owner says so → sync `working` back. The steps are in `CLAUDE.md`. The tool-suggested `claude/…` branch wasn't used.
- **Alternatives considered:** Push the tool-suggested branch (it would have become the default branch); push `working` first (same problem); a new branch per feature.
- **Consequences:** `main` is the default branch and will be what's live. Never commit straight to `main` again.

## D-003 — Plain HTML/CSS/JavaScript with no build step
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The owner's other two sites are plain HTML/CSS/JS on GitHub Pages and can be edited straight from the GitHub website. A portfolio is a few sections of text, links and images.
- **Decision:** Build the portfolio the same way: plain HTML, CSS and JavaScript. No framework, no build tools, no `npm install`. Contact links and settings live in `js/config.js`.
- **Alternatives considered:** A framework such as React, Angular or Astro (could itself show framework skills, but needs a build step and makes direct edits on GitHub harder); a ready-made portfolio template.
- **Consequences:** Fast on phones, free to host, nothing to install. If the owner prefers a framework to show off those skills, replace this decision before building.

## D-004 — Host on GitHub Pages from `main`, repo root, on the free address
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The site should go live at no cost and update on every merge, like the other two sites.
- **Decision:** GitHub Pages, "Deploy from a branch", `main`, `/ (root)`. Address: `pradipdj432.github.io/portfolio`.
- **Alternatives considered:** Rename this repo to `PradipDj432.github.io` (GitHub's special name for a personal site) to get the shorter address `pradipdj432.github.io`; buy a custom domain.
- **Consequences:** The owner turns Pages on once, after the first page is merged (steps in `README.md`). If the repo is renamed or a domain is added later, the site's address changes, so decide on the address before sharing the link widely.

## D-005 — The résumé PDF is kept in the repo and is the source for the site's facts
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner sent their résumé (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026), asked to add it to the repo, and said everything the site needs, apart from the headline, is in it.
- **Decision:** Save it unchanged as `resume/Pradipkumar-Jaliya-Resume.pdf`, with its SHA-256 in `resume/README.md`. Copy its facts into `profile.md` and treat them as confirmed. The site will offer it as "Download résumé". When a new résumé arrives, move the old one into `resume/archive/` and save the new one under the same name, so links never break. The headline is the owner's own words: "Claude Native · DevOps & AI Engineer · Full Stack Developer".
- **Alternatives considered:** Only copy the facts and leave the PDF out of the repo; a new file name for each version (download links would break).
- **Consequences:** The repo is public, so the PDF, with its phone number and email, can be opened by anyone. Obvious typos in the résumé are fixed in `profile.md` and on the site (for example "Predication" → "Prediction", "Linklist" → "linked lists", "MsSQL" → "MS SQL"); the PDF stays as the owner sent it. Where the résumé and the GitHub profile disagree (company name), the site follows the résumé until the owner says otherwise.
