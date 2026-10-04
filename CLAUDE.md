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
- The résumé, `resume/Pradipkumar-Jaliya-Resume.pdf`, is the source for the facts in `profile.md` (D-005). When the owner sends a new résumé, move the old PDF into `resume/archive/` (never delete it), save the new one under the same name, and update `resume/README.md`, `profile.md` and the website together (steps in `resume/README.md`). Don't edit the PDF itself.
- Show only the projects in `profile.md` (the résumé's, plus any the owner adds). Describe a project from the résumé, its repo and the owner's own words; don't claim features its code doesn't have.
- Show only the contact details in `profile.md` → "Contact".
- Don't add social media links, testimonials or reviews until real ones exist.
- Once the site has code, contact links, social links and the résumé link live in one place, `js/config.js`. Don't hard-code them in the pages.

## Code
The tech and hosting below are **proposed** (D-003, D-004). Confirm them with the owner before building the first page; once confirmed, they're rules.
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-003).
- Hosted free on GitHub Pages from `main`, repo root (D-004).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- Before every pull request, test with a local server (`python3 -m http.server 8000`) at phone (390px) and desktop (1280px) widths: no script errors, no broken images or links.
- Text from settings or data files goes through `escapeHtml()` before it's put into the page.
- Images: compressed for the web (under about 250 KB each), with `width`, `height` and `alt` text.
