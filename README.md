# Portfolio — Website

The personal portfolio website of **Pradip Jaliya** ([PradipDj432](https://github.com/PradipDj432) on GitHub): Cloud & DevOps Engineer · AI Engineer · Full Stack Developer. It introduces the owner, shows their work, projects, skills and certificates, offers the resume as a download, and makes it easy to get in touch.

**Live:** https://pradipdj432.github.io/portfolio/ · Where the project stands: `progress.md`. What's next: `backlog.md` → "Next up".

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `profile.md` | Facts about the owner (from the resume, the older CV and the owner's answers) and the exact wording the site uses |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |
| `resume/README.md` | The resume PDF, its checksum, and what to do when a new resume arrives |

These are the same docs as the DK-Engineer and Aara Culture repos. `profile.md` does the job `business.md` does there (D-001).

## How it works
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-003).
- Hosted free on **GitHub Pages** from the `main` branch, repo root (D-004).
- **One page**, `index.html`, with these sections: intro, about, experience, projects, skills, credentials, contact. The text is written straight into the HTML and matches `profile.md` (D-007).
- **Contact details and links** (email, phone, GitHub, LinkedIn, LeetCode, Credly, the resume file and the live address) are in **one file, `js/config.js`**. `js/common.js` fills them into the page and adds the details Google shows in search results (schema.org `Person`: name, job title, company, headline, links).
- **Design:** "modern premium", dark by default with a light theme. The button in the header switches between them; the first visit follows the phone or computer setting (D-006).
- **Resume:** the "Download resume" buttons link to `resume/Pradip-Jaliya-Resume.pdf` (D-005).
- **Link previews:** when the address is shared on WhatsApp or LinkedIn, it shows `images/og-image.jpg`. The picture has the name, headline, current job and numbers drawn into it, so it has to be remade when any of those change.

## How we work (branches)
All changes are made on the **`working`** branch, one feature at a time: sync `working` with `main` → build the feature → open a pull request from `working` into `main` → merge it when the owner says so → sync `working` with `main` again. The exact steps are in `CLAUDE.md` → "Branches and pull requests" (D-002).

## Folder layout
```
portfolio/
├── index.html         The website (one page)
├── 404.html           "Page not found" (GitHub Pages shows it for any wrong address)
├── css/style.css      All styles; colours and fonts are set at the top (mobile first)
├── js/
│   ├── config.js      Contact details, profile links, resume file, live address
│   └── common.js      Fills in contact details; menu, light/dark button, scroll effects
├── images/
│   ├── projects/      Screenshots of the live projects (1200 × 750 JPEG)
│   ├── og-image.jpg   Link preview picture (1200 × 630)
│   ├── favicon.svg    Browser tab icon
│   └── apple-touch-icon.png   Icon when the site is saved to a phone's home screen
├── resume/
│   ├── Pradip-Jaliya-Resume.pdf   The current resume (the file visitors download)
│   ├── README.md                  What's here, and steps for a new resume
│   └── archive/                   Older resumes, not linked from the site
│       └── Pradipkumar-Jaliya-CV-2026-03.pdf   Older CV, the source for the work history
├── robots.txt, sitemap.xml   For Google
├── .nojekyll          Tells GitHub Pages to serve the files as they are
└── CLAUDE.md, README.md, profile.md, decisions.md, backlog.md, progress.md   Project docs
```

## Run it on your computer
Start a small local server in the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` by double-clicking it also works.)

## Edit the website (from the GitHub website or app)
All changes go through the `working` branch (D-002). On GitHub, pick **`working`** in the branch menu (top left) before you open a file, commit your change there, then open a pull request into `main` and merge it.

### Change your email, phone or a profile link
Open `js/config.js` → pencil icon (✏️) → change the value inside the quotes → **Commit changes**. It updates everywhere on the page.

- `phone`: `number` is for the call link (`+91` and the number, no spaces); `display` is what people see.
- `links`: GitHub, LinkedIn, LeetCode and Credly. `url` is the full address; `handle` is the short text shown in the contact section.
- `name`, `headline`, `jobTitle` and `company` are only used for the Google search data. The same words are also written in `index.html` (and drawn into `images/og-image.jpg`), so change them there too.

### Change page text
Open `index.html` → pencil icon → find the words and change only the text between the tags. For example, in `<h4>Call Clutch</h4>` change only `Call Clutch`. → **Commit changes**. Then update `profile.md` to match. If the same fact appears in other places (the intro, a card, the profile card, the numbers), change it everywhere, so the page never says two different things.

### Add a project
In `index.html`, find the `<!-- Projects -->` section. Copy a whole small card, from `<article class="project card` to its closing `</article>`, and paste it after the last one. Change the title, the type (`project-kind`), the description, the tags (`<li>…</li>`) and the links. Then add the project to `profile.md`.

### Change a job or a work project
In `index.html`, find the `<!-- Experience: newest company first -->` section. Each company is one `<article class="job">` with its name, title and dates at the top. Each work project inside it is one `<li class="timeline-item">`: copy one, paste it under the last, and change the name, the link, the tags and the bullet points. Then update `profile.md` → "Work experience".

### Replace a project screenshot
Make a 1200 × 750 JPEG under about 250 KB, upload it to `images/projects/` with the **same file name** (for example `dk-engineer.jpg`), and commit.

### Update the resume
Follow the steps in `resume/README.md`: move the old PDF into `resume/archive/`, upload the new one with the same name, then update `profile.md` and the page text.

## How changes go live
GitHub Pages is **on**: it serves the `main` branch from the repo root at https://pradipdj432.github.io/portfolio/. Every merge into `main` goes live in a minute or two. To check a deploy, open the repo's **Actions** tab and look for the latest **"pages build and deployment"** run (green tick = live).

If GitHub Pages is ever turned off: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**.

### Adding a custom domain later
Settings → Pages → **Custom domain**, then follow GitHub's DNS steps. Then change the address in `index.html` (the `og:` and `canonical` tags), `js/config.js` (`siteUrl`), `robots.txt` and `sitemap.xml` (D-004).
