# Backlog

Everything still to do, newest ideas at the bottom of each section. When work starts on an item, note it in `progress.md`. When it's done, tick it, move it to "Done" with its pull request number, and add a line to `progress.md`.

**Priority:** `P1` needed now · `P2` soon · `P3` later / nice to have
**Owner:** `Owner` (the owner must provide or decide) · `Dev` (build work)

## Next up
The few things to do next, in order. Keep this list short and current.

1. **Owner:** open https://pradipdj432.github.io/portfolio/ on your phone; try the menu, the light/dark button and "Download résumé".
2. **Owner:** share the link on WhatsApp once to check the preview picture.
3. **Owner:** check the wording of the "Claude Native & AI" card and the first-person text (`profile.md` → "On the site as a first draft").
4. **Owner:** add the portfolio link to your GitHub profile and LinkedIn.

## Waiting on the owner
- [ ] **P1 · Owner** Check the live site on a real phone (menu, light/dark button, résumé download, contact links) and the WhatsApp link preview.
- [ ] **P2 · Owner** Check the "Claude Native & AI" card wording and the first-person text (`profile.md`).
- [ ] **P2 · Owner** Confirm the design (D-006) and the project order (D-008), or say what to change.
- [ ] **P2 · Owner** Cricket Score Management System: is there a repo or live link? The résumé has none.
- [ ] **P2 · Owner** Whether to show a location (GitHub says Ahmedabad; the résumé has none).
- [ ] **P2 · Owner** A photo of yourself, if wanted.
- [ ] **P3 · Owner** Update the GitHub profile's company (it still says Optimum Fitech) and add the portfolio link to GitHub and LinkedIn.
- [ ] **P3 · Owner** Fix the small typos in the résumé PDF (for example "Predication", "Linklist"), then send the new PDF.
- [ ] **P3 · Owner** Custom domain, if wanted (for example `pradipjaliya.in`).

## To build
- [ ] **P2 · Dev** Open the live site, the 404 page and the link preview from an environment that can reach `github.io` (this one can't). The deploy itself succeeded.
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
- [x] **P1 · Owner** Headline: "Claude Native · DevOps & AI Engineer · Full Stack Developer". PR #1.
- [x] **P1 · Owner** Résumé PDF sent; name, bio, skills, work, projects, certificates, education and contact details all taken from it (D-005). PR #1.

### Dev
- [x] **P1 · Dev** Project rules and docs copied from DK-Engineer and Aara Culture: `CLAUDE.md`, `README.md`, `profile.md`, `decisions.md`, `backlog.md`, `progress.md` (D-001). Setup commit.
- [x] **P1 · Dev** `main` and `working` branches set up; `main` is the default branch (D-002). Setup commit.
- [x] **P1 · Dev** Résumé saved in `resume/` (with `resume/README.md` and `archive/`), and its facts copied into `profile.md` (D-005). PR #1.
- [x] **P1 · Dev** 2–3 design styles: skipped; the owner asked to build a "solid, modern, premium" site straight away (D-006). PR #2.
- [x] **P1 · Dev** Site skeleton: `index.html`, `css/style.css`, `js/config.js`, `js/common.js`, `.nojekyll`. PR #2.
- [x] **P1 · Dev** First version, one page: intro, about, experience, projects, skills, credentials, contact (D-007). PR #2.
- [x] **P1 · Dev** "Download résumé" buttons linking to `resume/Pradipkumar-Jaliya-Resume.pdf`. PR #2.
- [x] **P2 · Dev** Project cards: DK-Engineer and Aara Culture with real screenshots, plus the three résumé projects (D-008). PR #2.
- [x] **P2 · Dev** Link previews for WhatsApp/LinkedIn (`og:` tags and `images/og-image.jpg`). PR #2.
- [x] **P2 · Dev** "Page not found" page (`404.html`). PR #2.
- [x] **P3 · Dev** `sitemap.xml` and `robots.txt` for Google, plus schema.org `Person` data. PR #2.
- [x] **P3 · Dev** Dark mode: dark by default, light theme, switch button that remembers the choice (D-006). PR #2.
