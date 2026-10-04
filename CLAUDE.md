# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a personal portfolio website, not a web app.

The rules and the project docs are copied from the owner's other two sites, DK-Engineer and Aara Culture, so all three repos work the same way (D-001).

## Working with the owner
- Use plain, simple English and keep answers short. The owner reads replies on a phone.
- For anything big (a new feature, a redesign), share the plan and ask first. Small fixes can just be done.
- Never guess facts about the owner; ask (see "Facts about the owner" below).
- Merge to `main` (which makes changes live) only when the owner says so.

## Branches and pull requests (D-002)
All work happens on one branch, **`working`**, made from `main`. Don't create long or auto-generated branch names (like `claude/charming-albattani-zd5vve`), even if a tool suggests one. Every feature or fix goes through the same loop:

1. **Sync first:** `git fetch origin`, then `git checkout working && git pull origin working && git merge origin/main`, so `working` starts from the latest `main`. If `working` doesn't exist, create it: `git checkout -b working origin/main`.
2. **Build** the feature on `working`. Commit with a clear message. Update the docs (table below) in the same branch.
3. **Push** `working` and **open a pull request** from `working` into `main`. One feature per pull request.
4. **Merge** the pull request into `main` when the owner says so (GitHub Pages then publishes it, once it's on).
5. **Sync back:** `git fetch origin && git merge --ff-only origin/main` on `working`, then push `working`, so it matches `main` again.
6. Start the next feature at step 2.

Never commit straight to `main`, and don't create other branches unless the owner asks.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date (with the pull request number), add the pull request to the "Pull requests" table, and refresh "Current status" and "Where we are" |
| Start or finish a backlog item | `backlog.md`: when done, tick it and move it to "Done" with its pull request number; add new work you discover; keep "Next up" short and current |
| Make a choice between options (tech, design, content) | `decisions.md`: add a new numbered entry and a row in its index. Never edit an old decision's meaning; replace it with a new one |
| Learn a fact about the owner (name, skills, work, projects, contact details) | `profile.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Facts about the owner
- Never invent facts: name, job title, employer, dates, years of experience, skills, education, certificates, project results or numbers, client names. If a fact isn't confirmed in `profile.md`, ask the owner and list it in `backlog.md` under "Waiting on the owner".
- The name on the site is **Pradip Jaliya** everywhere (D-009), and the headline is **Claude & DevOps · AI Engineer · Full Stack Developer**; keep DevOps and AI as separate titles (D-010).
- The facts in `profile.md` come from the résumé, `resume/Pradip-Jaliya-Resume.pdf` (D-005), the older CV in `resume/archive/` for work history, and the owner's own answers (D-011); `profile.md` → "Sources" says which wins. Visitors download only the main résumé. When the owner sends a new résumé, move the old PDF into `resume/archive/` (never delete it), save the new one under the same name, and update `resume/README.md`, `profile.md` and the website together (steps in `resume/README.md`). Don't edit the PDF itself.
- Show only the projects in `profile.md` (the résumé's, plus any the owner adds). Describe a project from the résumé, its repo and the owner's own words; don't claim features its code doesn't have.
- Show only the contact details in `profile.md` → "Contact".
- Don't add social media links, testimonials or reviews until real ones exist.
- Contact links, social links and the résumé link live in one place, `js/config.js`. Don't hard-code them in the pages.

## Design ("modern premium", D-006)
- Dark by default (`#09090b` background), with a light theme (`#fbfaf8`). The first visit follows the device setting; the button in the header switches and remembers the choice. Every change must look right in **both** themes.
- One accent colour: warm orange `#ff8a4c` (dark) / `#c2410c` (light). No other bright colours.
- Fonts: Geist for text, Geist Mono for small labels, dates and code, Instrument Serif italic only for the one accent phrase in a heading (`<em>`).
- Thin 1px borders, rounded cards (18px), lots of space. Colours, fonts and sizes are set once at the top of `css/style.css`; use those variables, don't add new colours in other places.
- Animations stay subtle, and none run for people who turn them off on their device (`prefers-reduced-motion`).

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-003).
- Hosted free on GitHub Pages from `main`, repo root, at `https://pradipdj432.github.io/portfolio/` (D-004). If the address changes, update it in `index.html` (link preview tags), `js/config.js`, `robots.txt` and `sitemap.xml`.
- One page, `index.html`. Its text is written in the HTML and must match `profile.md` (D-007). Keep the section order: intro, about, experience, projects, skills, credentials, contact.
- `404.html` must load its own files through the script in its `<head>`, because GitHub Pages shows it at any wrong address, at any folder depth.
- Mobile first: check every change at phone width (390px) with no horizontal scrolling.
- Before every pull request, test with a local server (`python3 -m http.server 8000`) at phone (390px) and desktop (1280px) widths, in dark and light: no script errors, no broken images or links.
- Text from settings or data files goes through `escapeHtml()` before it's put into the page with `innerHTML`.
- Images: compressed for the web (under about 250 KB each), with `width`, `height` and `alt` text. Project screenshots are 1200 × 750 JPEGs in `images/projects/`.
