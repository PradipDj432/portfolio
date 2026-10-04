# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it, move it to "Done" with its pull request number, and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (the owner must provide or decide) · `Dev` (build work)

## Next up
The few things to do next, in order. Keep this list short and current.

1. **Owner:** open the live site on your phone and share the link on WhatsApp once to check the preview.
2. **Owner:** confirm "4+ years" (your work on the site starts March 2023), and the tech you used for HFSS, if you want it shown.
3. **Owner:** send an updated resume; the one visitors download still says 3 years and doesn't list Eagerminds or Optimum.

## Waiting on the owner
- [ ] **P2 · Owner** HFSS: the tech used, if it should be shown (the site describes the product from hfss.ch).
- [ ] **P2 · Owner** Confirm "4+ years": the work history on the site starts March 2023 (about 3.5 years). Keep 4+ or change to 3+.
- [ ] **P2 · Owner** An updated resume PDF to replace `resume/Pradip-Jaliya-Resume.pdf` (fix the small typos such as "Predication" and "Linklist" too).
- [ ] **P2 · Owner** Company name style: "Eagerminds" or "EagerMinds"?
- [ ] **P1 · Owner** Check the live site on a real phone (menu, light/dark button, resume download, contact links) and the WhatsApp link preview.
- [ ] **P2 · Owner** Confirm the design (D-006) and the project order (D-008), or say what to change.
- [ ] **P2 · Owner** Cricket Score Management System: is there a repo or live link? The resume has none.
- [ ] **P2 · Owner** Whether to show a location (GitHub says Ahmedabad; the resume has none).
- [ ] **P2 · Owner** A photo of yourself, if wanted.
- [ ] **P3 · Owner** Update the GitHub profile's company (it still says Optimum Fitech) and add the portfolio link to GitHub and LinkedIn.
- [ ] **P3 · Owner** Custom domain, if wanted (for example `pradipjaliya.in`).

## To build
- [ ] **P2 · Dev** Open the live site, the 404 page and the link preview from an environment that can reach `github.io` (this one can't). The deploy itself succeeded.
- [ ] **P2 · Dev** Add the HFSS tech once the owner answers.
- [ ] **P2 · Dev** Swap in the updated resume when it arrives (steps in `resume/README.md`).
- [ ] **P2 · Dev** Add a photo to the intro once the owner sends one.
- [ ] **P3 · Dev** Retake the DK-Engineer and Aara Culture screenshots when those sites change a lot.
- [ ] **P3 · Dev** Free, privacy-friendly visitor counter (for example GoatCounter), if the owner wants to see visits.
- [ ] **P3 · Dev** Connect a custom domain once bought.

## Done

### Owner
- [x] **P1 · Owner** Plain HTML/CSS/JS (D-003) and the address `pradipdj432.github.io/portfolio` (D-004): yes.
- [x] **P1 · Owner** Company name: Dhitech Solutions is current.
- [x] **P2 · Owner** Show the DK-Engineer and Aara Culture websites as projects: yes.
- [x] **P1 · Owner** Merge PR #1: yes, merged.
- [x] **P1 · Owner** Review the first version: "merge". PR #2 merged.
- [x] **P1 · Owner** Turn on GitHub Pages: done; the site is live (D-004).
- [x] **P1 · Owner** Name on the site: "Pradip", everywhere (D-009). PR #3.
- [x] **P1 · Owner** Headline: "Claude & DevOps · AI Engineer · Full Stack Developer", DevOps and AI kept apart (D-010). PR #3.
- [x] **P1 · Owner** Work history: Optimum Financial Solutions (older CV), Dhitech from July 2024, Eagerminds since April 2026, with live links for HFSS, Call Clutch, the gift card system and Drive PG (D-011). PR #3.
- [x] **P2 · Owner** New certificate (Professional Cloud Architect) and Credly link; numbers: 4+ years, 5+ certificates, 12+ projects, 800+ LeetCode (D-011). PR #3.
- [x] **P2 · Owner** "Claude Native" wording: replaced by the owner's own line, "I use Claude Code and Codex to improve and deliver faster" (D-010). PR #3.
- [x] **P1 · Owner** Job titles: Senior Software Architect at Eagerminds, Senior Software Engineer at Dhitech. PR #3.
- [x] **P2 · Owner** Professional Cloud Architect year: 2026. PR #3.
- [x] **P1 · Owner** Merge PR #3: yes, merged and live.
- [x] **P1 · Owner** First title is "Cloud & DevOps", not "Claude"; Claude Code and Codex go with AI (D-013).
- [x] **P2 · Owner** Dhitech end month: March 2026. Company links: dhitech.solutions, optimumfintech.com, jmfinancialmf.com.
- [x] **P1 · Owner** Merge PR #4: yes, merged and live.
- [x] **P2 · Owner** Plain "resume" spelling everywhere, and Credly only with the contact links (D-012). PR #3.
- [x] **P1 · Owner** Headline: "Claude Native · DevOps & AI Engineer · Full Stack Developer". PR #1.
- [x] **P1 · Owner** Resume PDF sent; name, bio, skills, work, projects, certificates, education and contact details all taken from it (D-005). PR #1.

### Dev
- [x] **P1 · Dev** Project rules and docs copied from DK-Engineer and Aara Culture: `CLAUDE.md`, `README.md`, `profile.md`, `decisions.md`, `backlog.md`, `progress.md` (D-001). Setup commit.
- [x] **P1 · Dev** `main` and `working` branches set up; `main` is the default branch (D-002). Setup commit.
- [x] **P1 · Dev** Resume saved in `resume/` (with `resume/README.md` and `archive/`), and its facts copied into `profile.md` (D-005). PR #1.
- [x] **P1 · Dev** 2–3 design styles: skipped; the owner asked to build a "solid, modern, premium" site straight away (D-006). PR #2.
- [x] **P1 · Dev** Site skeleton: `index.html`, `css/style.css`, `js/config.js`, `js/common.js`, `.nojekyll`. PR #2.
- [x] **P1 · Dev** First version, one page: intro, about, experience, projects, skills, credentials, contact (D-007). PR #2.
- [x] **P1 · Dev** "Download resume" buttons linking to `resume/Pradipkumar-Jaliya-Resume.pdf`. PR #2.
- [x] **P2 · Dev** Project cards: DK-Engineer and Aara Culture with real screenshots, plus the three resume projects (D-008). PR #2.
- [x] **P2 · Dev** Link previews for WhatsApp/LinkedIn (`og:` tags and `images/og-image.jpg`). PR #2.
- [x] **P2 · Dev** "Page not found" page (`404.html`). PR #2.
- [x] **P3 · Dev** `sitemap.xml` and `robots.txt` for Google, plus schema.org `Person` data. PR #2.
- [x] **P3 · Dev** Dark mode: dark by default, light theme, switch button that remembers the choice (D-006). PR #2.
- [x] **P1 · Dev** Owner's changes: name, headline and About cards, three companies with live project links, fifth certificate and Credly, new numbers, Claude Code and Codex, new link-preview image; resume file renamed and older CV archived (D-009 to D-011). PR #3.
- [x] **P1 · Dev** HFSS described from hfss.ch's own pages (Helvetia Financial Services, Zurich: payments, crypto exchange, custody, currency exchange, debit cards). PR #3.
- [x] **P1 · Dev** Headline changed to "Cloud & DevOps · AI Engineer · Full Stack Developer" everywhere; Claude Code and Codex moved to the AI card and skills; company and project links; Dhitech dates; smaller name in the intro; footer line removed; whole page read through so every place says the same thing (D-013).
