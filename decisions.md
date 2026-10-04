# Decisions

A log of choices made for the portfolio website and why. Add new decisions at the bottom with the next number. Never delete an old one: if it changes, add a new decision that replaces it and set the old one's status to `Replaced by D-xxx`.

**Status values:** `Accepted` (owner agreed) · `Proposed` (suggested, not confirmed by the owner yet) · `Replaced by D-xxx`

## Index
| # | Decision | Status |
|---|---|---|
| D-001 | Same rules and project docs as DK-Engineer and Aara Culture | Accepted |
| D-002 | All work on one `working` branch, merged to `main` by pull request | Accepted |
| D-003 | Plain HTML/CSS/JavaScript with no build step | Accepted |
| D-004 | Host on GitHub Pages from `main`, repo root, on the free address | Accepted |
| D-005 | The resume PDF is kept in the repo and is the source for the site's facts | Accepted (file renamed by D-009; headline replaced by D-010, then D-013) |
| D-006 | "Modern premium" design: dark by default, with a light theme | Accepted |
| D-007 | One page; text written in `index.html`, contact links in `js/config.js` | Proposed |
| D-008 | Projects: the two live websites first, then the resume projects | Accepted |
| D-009 | The name on the site is "Pradip Jaliya" everywhere | Accepted |
| D-010 | Headline: "Claude & DevOps · AI Engineer · Full Stack Developer" | Replaced by D-013 |
| D-011 | Three companies on the site, and the owner's numbers in the intro | Accepted (Credly placement changed by D-012; its open facts answered later) |
| D-012 | Plain "resume" spelling, and Credly only with the contact links | Accepted |
| D-013 | Headline: "Cloud & DevOps · AI Engineer · Full Stack Developer"; Claude Code and Codex go with AI | Accepted |
| D-014 | After a merge, the notes update rides along with the next pull request | Proposed |

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
- **Status:** Accepted (the owner confirmed on 2026-10-04)
- **Context:** The owner's other two sites are plain HTML/CSS/JS on GitHub Pages and can be edited straight from the GitHub website. A portfolio is a few sections of text, links and images.
- **Decision:** Build the portfolio the same way: plain HTML, CSS and JavaScript. No framework, no build tools, no `npm install`. Contact links and settings live in `js/config.js`.
- **Alternatives considered:** A framework such as React, Angular or Astro (could itself show framework skills, but needs a build step and makes direct edits on GitHub harder); a ready-made portfolio template.
- **Consequences:** Fast on phones, free to host, nothing to install. If the owner prefers a framework to show off those skills, replace this decision before building.

## D-004 — Host on GitHub Pages from `main`, repo root, on the free address
- **Date:** 2026-10-04
- **Status:** Accepted (the owner confirmed on 2026-10-04)
- **Context:** The site should go live at no cost and update on every merge, like the other two sites.
- **Decision:** GitHub Pages, "Deploy from a branch", `main`, `/ (root)`. Address: `pradipdj432.github.io/portfolio`.
- **Alternatives considered:** Rename this repo to `PradipDj432.github.io` (GitHub's special name for a personal site) to get the shorter address `pradipdj432.github.io`; buy a custom domain.
- **Consequences:** The owner turns Pages on once, after the first page is merged (steps in `README.md`). If the repo is renamed or a domain is added later, the site's address changes, so decide on the address before sharing the link widely.

## D-005 — The resume PDF is kept in the repo and is the source for the site's facts
- **Date:** 2026-10-04
- **Status:** Accepted (the file name changed with D-009; the headline was replaced by D-010, then by D-013)
- **Context:** The owner sent their resume (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026), asked to add it to the repo, and said everything the site needs, apart from the headline, is in it.
- **Decision:** Save it unchanged as `resume/Pradipkumar-Jaliya-Resume.pdf`, with its SHA-256 in `resume/README.md`. Copy its facts into `profile.md` and treat them as confirmed. The site will offer it as "Download resume". When a new resume arrives, move the old one into `resume/archive/` and save the new one under the same name, so links never break. The headline is the owner's own words: "Claude Native · DevOps & AI Engineer · Full Stack Developer".
- **Alternatives considered:** Only copy the facts and leave the PDF out of the repo; a new file name for each version (download links would break).
- **Consequences:** The repo is public, so the PDF, with its phone number and email, can be opened by anyone. Obvious typos in the resume are fixed in `profile.md` and on the site (for example "Predication" → "Prediction", "Linklist" → "linked lists", "MsSQL" → "MS SQL"); the PDF stays as the owner sent it. Where the resume and the GitHub profile disagree (company name), the site follows the resume until the owner says otherwise.

## D-006 — "Modern premium" design: dark by default, with a light theme
- **Date:** 2026-10-04
- **Status:** Accepted (the owner reviewed the live site on 2026-10-04 and said "looks good"; later changes were to text and the size of the name only)
- **Context:** The owner works in cloud, DevOps and AI, and wanted the site to look and feel modern and premium. A design-options round (as done for Aara Culture) was skipped because the owner asked to build straight away.
- **Decision:** Near-black background with one warm orange accent (`#ff8a4c`; `#c2410c` in light mode), thin borders, large type and lots of space. Fonts: Geist for text, Geist Mono for small labels and code, Instrument Serif italic for one accent phrase in each heading (Google Fonts). The intro shows the name very large, the three titles, a code-style "profile.yaml" card and four numbers from the resume. Subtle touches: a faint grid and glow behind the intro, a moving row of technologies, a soft light that follows the pointer on cards, and sections that fade in on scroll. A button switches between dark and light; the first visit follows the device setting. People who turn off animations on their device get none.
- **Alternatives considered:** A light, minimal "editorial" look (calm, but less of a tech feel); a bright, colourful gradient look (flashier, ages faster); showing 2–3 styles first.
- **Consequences:** The colours and fonts are set once at the top of `css/style.css`. If the owner prefers another accent colour or a light-first look, it's a small change there.

## D-007 — One page; text written in `index.html`, contact links in `js/config.js`
- **Date:** 2026-10-04
- **Status:** Proposed (technical; confirm only if the owner wants a say)
- **Context:** A portfolio is read top to bottom, often on a phone, and Google reads plain HTML best. The rules keep contact links in one place.
- **Decision:** One page (`index.html`) with sections: intro, about, experience, projects, skills, credentials, contact. The text is written straight into the HTML, matching `profile.md`. Email, phone, profile links, the resume link and the live address live only in `js/config.js`; `js/common.js` fills them in and adds the Google search data (schema.org `Person`). A `404.html` page, `robots.txt`, `sitemap.xml` and a link-preview image (`images/og-image.jpg`) are included.
- **Alternatives considered:** Several pages (more clicks on a phone); a `profile.json` data file drawn by JavaScript (a typo would blank the page, and Google reads it less reliably).
- **Consequences:** Changing a phone number or link is a one-line edit in `js/config.js`. Changing page text means editing `index.html` and keeping `profile.md` in step. The live address appears in `index.html` (link preview tags), `robots.txt`, `sitemap.xml` and `js/config.js`; change all four if the address changes.

## D-008 — Projects: the two live websites first, then the resume projects
- **Date:** 2026-10-04
- **Status:** Accepted (the owner reviewed the live site on 2026-10-04, said "looks good" and kept this order)
- **Context:** The owner chose to show the DK-Engineer and Aara Culture websites as well as the resume's three projects, but didn't set an order.
- **Decision:** Show the two live websites first, large, with real screenshots in a browser frame (taken from each repo's `main` branch), then Parking Management System, Bulldozer Price Prediction and Cricket Score Management System as smaller cards with drawn covers.
- **Alternatives considered:** Resume projects first; all five the same size.
- **Consequences:** Live, clickable work is the first thing visitors see. When either live site changes a lot, retake its screenshot (`images/projects/`, 1200 × 750 JPEG under 250 KB).

## D-009 — The name on the site is "Pradip Jaliya" everywhere
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The resume says "Pradipkumar Jaliya". The owner asked for "Pradip" in every place on the website.
- **Decision:** Show "Pradip Jaliya" everywhere: page title, header, intro, footer, link previews (`images/og-image.jpg`), Google search data, the 404 page and `js/config.js`. The download file is renamed to `resume/Pradip-Jaliya-Resume.pdf`, and visitors save it as `Pradip-Jaliya-Resume.pdf`. The PDF itself is unchanged, so it still says "Pradipkumar Jaliya" inside. Replaces the file name in D-005.
- **Alternatives considered:** Keep "Pradipkumar" on the site; show both names.
- **Consequences:** `profile.md` keeps the full name as a fact. Old resumes in `resume/archive/` keep their original names.

## D-010 — Headline: "Claude & DevOps · AI Engineer · Full Stack Developer"
- **Date:** 2026-10-04
- **Status:** Replaced by D-013
- **Context:** The first headline was "Claude Native · DevOps & AI Engineer · Full Stack Developer". The owner asked not to mix DevOps and AI.
- **Decision:** Use the owner's own words: "Claude & DevOps · AI Engineer · Full Stack Developer". The three About cards follow the same three titles: "Claude & DevOps" (cloud, DevOps, and using Claude Code and Codex to improve and deliver faster), "AI Engineer" (Python, ML, GenAI) and "Full Stack Developer". Replaces the headline in D-005.
- **Alternatives considered:** Four separate titles (Claude Native, DevOps Engineer, AI Engineer, Full Stack Developer); keep the old headline.
- **Consequences:** The headline is in `js/config.js`, `index.html` (title, link preview tags, intro, profile card) and `images/og-image.jpg`; change all of them together.

## D-011 — Three companies on the site, and the owner's numbers in the intro
- **Date:** 2026-10-04
- **Status:** Accepted (Credly placement changed by D-012; the unknowns listed below were answered later: job titles and HFSS in D-012's round, the Dhitech end month and the certificate year in D-013's round, all recorded in `profile.md`)
- **Context:** The owner sent an older CV (March 2026) that lists Optimum Financial Solutions (March 2023 – June 2024) and Dhitech Solutions from July 2024, and said they've worked at Eagerminds since April 2026. The main resume (April 2026) shows only Dhitech, from March 2023. The owner also gave new numbers for the intro.
- **Decision:** Show three companies, newest first: Eagerminds (HFSS, hfss.ch), Dhitech Solutions (Gift Card Management System at rbsgift.com, Call Clutch at callclutch.ai, Drive PG at drivepg.com) and Optimum Financial Solutions (JM Financial Mutual Fund). Work history follows the older CV and the owner's answers. Visitors still download the main resume, not the older CV. The older CV is kept in `resume/archive/` as the source. The intro numbers are the owner's: 4+ years, 5+ certifications, 12+ projects, 800+ LeetCode problems. "3 clouds" was removed. The new Professional Cloud Architect certificate and a Credly link were added.
- **Alternatives considered:** Offer the older CV for download; keep the resume's numbers (3 years, 4 certificates, 700+).
- **Consequences:** The downloadable resume is now behind the website (it still says 3 years, 700+ LeetCode, four certificates and Dhitech from March 2023). When the owner sends an updated resume, replace it (steps in `resume/README.md`). Unknowns are left out rather than guessed: the Eagerminds role, what HFSS is, the Dhitech end month and the year of the new certificate.

## D-012 — Plain "resume" spelling, and Credly only with the contact links
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner asked for plain English letters instead of the accented spelling of "resume", and for Credly to sit with the phone, LinkedIn, LeetCode and email links rather than in the certificates section.
- **Decision:** Write "resume" (no accents) everywhere: the website, the code and the docs. Show Credly only in the intro icons and the contact list. The certificates section has no Credly links, and every certificate card shows its year, so the cards line up. Professional Cloud Architect shows 2026.
- **Alternatives considered:** Keep the accented spelling; keep the "See all my badges on Credly" link under the certificates.
- **Consequences:** The Credly address lives in `js/config.js` like the other profile links.

## D-013 — Headline: "Cloud & DevOps · AI Engineer · Full Stack Developer"; Claude Code and Codex go with AI
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner asked to move Claude Code and Codex out of the first About card into the AI card. That left the "Claude & DevOps" card talking only about AWS, GCP, Azure, Terraform and Kubernetes. Asked whether the first title meant "Cloud" or "Claude", the owner chose "Cloud & DevOps", which matches the resume's "Cloud & DevOps" skill group. The owner also asked that every place on the site say the same thing.
- **Decision:** Headline "Cloud & DevOps · AI Engineer · Full Stack Developer" everywhere: page title, link preview tags and image, intro, profile card, About card and `js/config.js`. Claude Code and Codex move to the AI Engineer card and to the "AI & ML" skills group. The intro is rewritten to follow the three titles in order. The line "I use Claude Code and Codex to improve and deliver faster" is word-for-word the same wherever it appears. Other changes from the same request: links for Dhitech Solutions (dhitech.solutions), Optimum Financial Solutions (optimumfintech.com) and JM Financial Mutual Fund (jmfinancialmf.com); Dhitech dates "Jul 2024 – Mar 2026"; the name in the intro a little smaller; the "Built with…" line removed from the footer. Replaces D-010.
- **Alternatives considered:** Keep "Claude & DevOps" with a cloud-only card; four separate titles.
- **Consequences:** The first headline ("Claude Native", D-005) and D-010 were most likely "Cloud" all along. `CLAUDE.md` now has a rule to keep each fact worded the same everywhere and to read the whole page after any text change.

## D-014 — After a merge, the notes update rides along with the next pull request
- **Date:** 2026-10-04
- **Status:** Proposed (a working habit; the owner hasn't objected)
- **Context:** The rules say every finished piece of work is recorded in `progress.md` and `backlog.md`, and that nothing is committed straight to `main`. Recording a merge (and its deploy) after it happens would need a new pull request each time, only for notes.
- **Decision:** After a merge, sync `working` with `main`, then commit the notes about that merge on `working`. They reach `main` with the next pull request. A pull request only for notes is opened when the owner asks for the docs to be brought up to date.
- **Alternatives considered:** A separate notes pull request after every merge; committing notes straight to `main`.
- **Consequences:** Between pull requests, `working` can be one small notes commit ahead of `main`. The steps are in `CLAUDE.md` → "Branches and pull requests".
