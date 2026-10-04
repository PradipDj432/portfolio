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
| D-005 | The résumé PDF is kept in the repo and is the source for the site's facts | Accepted |
| D-006 | "Modern premium" design: dark by default, with a light theme | Proposed |
| D-007 | One page; text written in `index.html`, contact links in `js/config.js` | Proposed |
| D-008 | Projects: the two live websites first, then the résumé projects | Proposed |

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

## D-005 — The résumé PDF is kept in the repo and is the source for the site's facts
- **Date:** 2026-10-04
- **Status:** Accepted
- **Context:** The owner sent their résumé (`PRADIP_JALIYA_PROFILE_2026.pdf`, 2 pages, April 2026), asked to add it to the repo, and said everything the site needs, apart from the headline, is in it.
- **Decision:** Save it unchanged as `resume/Pradipkumar-Jaliya-Resume.pdf`, with its SHA-256 in `resume/README.md`. Copy its facts into `profile.md` and treat them as confirmed. The site will offer it as "Download résumé". When a new résumé arrives, move the old one into `resume/archive/` and save the new one under the same name, so links never break. The headline is the owner's own words: "Claude Native · DevOps & AI Engineer · Full Stack Developer".
- **Alternatives considered:** Only copy the facts and leave the PDF out of the repo; a new file name for each version (download links would break).
- **Consequences:** The repo is public, so the PDF, with its phone number and email, can be opened by anyone. Obvious typos in the résumé are fixed in `profile.md` and on the site (for example "Predication" → "Prediction", "Linklist" → "linked lists", "MsSQL" → "MS SQL"); the PDF stays as the owner sent it. Where the résumé and the GitHub profile disagree (company name), the site follows the résumé until the owner says otherwise.

## D-006 — "Modern premium" design: dark by default, with a light theme
- **Date:** 2026-10-04
- **Status:** Proposed (the owner asked for a "solid, modern, premium" portfolio; confirm once they've seen it)
- **Context:** The owner works in cloud, DevOps and AI, and wanted the site to look and feel modern and premium. A design-options round (as done for Aara Culture) was skipped because the owner asked to build straight away.
- **Decision:** Near-black background with one warm orange accent (`#ff8a4c`; `#c2410c` in light mode), thin borders, large type and lots of space. Fonts: Geist for text, Geist Mono for small labels and code, Instrument Serif italic for one accent phrase in each heading (Google Fonts). The intro shows the name very large, the three titles, a code-style "profile.yaml" card and four numbers from the résumé. Subtle touches: a faint grid and glow behind the intro, a moving row of technologies, a soft light that follows the pointer on cards, and sections that fade in on scroll. A button switches between dark and light; the first visit follows the device setting. People who turn off animations on their device get none.
- **Alternatives considered:** A light, minimal "editorial" look (calm, but less of a tech feel); a bright, colourful gradient look (flashier, ages faster); showing 2–3 styles first.
- **Consequences:** The colours and fonts are set once at the top of `css/style.css`. If the owner prefers another accent colour or a light-first look, it's a small change there.

## D-007 — One page; text written in `index.html`, contact links in `js/config.js`
- **Date:** 2026-10-04
- **Status:** Proposed (technical; confirm only if the owner wants a say)
- **Context:** A portfolio is read top to bottom, often on a phone, and Google reads plain HTML best. The rules keep contact links in one place.
- **Decision:** One page (`index.html`) with sections: intro, about, experience, projects, skills, credentials, contact. The text is written straight into the HTML, matching `profile.md`. Email, phone, profile links, the résumé link and the live address live only in `js/config.js`; `js/common.js` fills them in and adds the Google search data (schema.org `Person`). A `404.html` page, `robots.txt`, `sitemap.xml` and a link-preview image (`images/og-image.jpg`) are included.
- **Alternatives considered:** Several pages (more clicks on a phone); a `profile.json` data file drawn by JavaScript (a typo would blank the page, and Google reads it less reliably).
- **Consequences:** Changing a phone number or link is a one-line edit in `js/config.js`. Changing page text means editing `index.html` and keeping `profile.md` in step. The live address appears in `index.html` (link preview tags), `robots.txt`, `sitemap.xml` and `js/config.js`; change all four if the address changes.

## D-008 — Projects: the two live websites first, then the résumé projects
- **Date:** 2026-10-04
- **Status:** Proposed
- **Context:** The owner chose to show the DK-Engineer and Aara Culture websites as well as the résumé's three projects, but didn't set an order.
- **Decision:** Show the two live websites first, large, with real screenshots in a browser frame (taken from each repo's `main` branch), then Parking Management System, Bulldozer Price Prediction and Cricket Score Management System as smaller cards with drawn covers.
- **Alternatives considered:** Résumé projects first; all five the same size.
- **Consequences:** Live, clickable work is the first thing visitors see. When either live site changes a lot, retake its screenshot (`images/projects/`, 1200 × 750 JPEG under 250 KB).
