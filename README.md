# Portfolio — Website

The personal portfolio website of **Pradipkumar Jaliya** ([PradipDj432](https://github.com/PradipDj432) on GitHub): Claude Native · DevOps & AI Engineer · Full Stack Developer. It introduces the owner, shows their work, projects, skills and certificates, offers the résumé as a download, and makes it easy to get in touch.

**Status:** Built. The first version is in a pull request; it goes live once it's merged and GitHub Pages is turned on (see "How changes go live"). Where the project stands: `progress.md`. What's next: `backlog.md` → "Next up".

**Address (once live):** https://pradipdj432.github.io/portfolio/

## Project docs
| File | What's in it |
|---|---|
| `README.md` | This file: how the code works and how to run and edit it |
| `profile.md` | Facts about the owner, taken from the résumé: name, headline, skills, work, projects, education, contact details |
| `decisions.md` | Every choice made and why (numbered D-001, D-002, …) |
| `backlog.md` | Everything still to do, with priority |
| `progress.md` | Current status and a dated work log |
| `CLAUDE.md` | Rules for keeping these docs and the code up to date |
| `resume/README.md` | The résumé PDF, its checksum, and what to do when a new résumé arrives |

These are the same docs as the DK-Engineer and Aara Culture repos. `profile.md` does the job `business.md` does there (D-001).

## How it works
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step (D-003).
- Hosted free on **GitHub Pages** from the `main` branch, repo root (D-004).
- **One page**, `index.html`, with these sections: intro, about, experience, projects, skills, credentials, contact. The text is written straight into the HTML and matches `profile.md` (D-007).
- **Contact details and links** (email, phone, GitHub, LinkedIn, LeetCode, the résumé file and the live address) are in **one file, `js/config.js`**. `js/common.js` fills them into the page and adds the details Google shows in search results.
- **Design:** "modern premium", dark by default with a light theme. The button in the header switches between them; the first visit follows the phone or computer setting (D-006).
- **Résumé:** the "Download résumé" buttons link to `resume/Pradipkumar-Jaliya-Resume.pdf` (D-005).
- **Link previews:** when the address is shared on WhatsApp or LinkedIn, it shows `images/og-image.jpg` with the name and headline.

## How we work (branches)
All changes are made on the **`working`** branch, one feature at a time: sync `working` with `main` → build the feature → open a pull request from `working` into `main` → merge it when the owner says so → sync `working` with `main` again. The exact steps are in `CLAUDE.md` → "Branches and pull requests" (D-002).

## Folder layout
```
portfolio/
├── index.html         The website (one page)
├── 404.html           "Page not found" (GitHub Pages shows it for any wrong address)
├── css/style.css      All styles; colours and fonts are set at the top (mobile first)
├── js/
│   ├── config.js      Contact details, profile links, résumé file, live address
│   └── common.js      Fills in contact details; menu, light/dark button, scroll effects
├── images/
│   ├── projects/      Screenshots of the live projects (1200 × 750 JPEG)
│   ├── og-image.jpg   Link preview picture (1200 × 630)
│   ├── favicon.svg    Browser tab icon
│   └── apple-touch-icon.png   Icon when the site is saved to a phone's home screen
├── resume/
│   ├── Pradipkumar-Jaliya-Resume.pdf   The current résumé (download + source of facts)
│   ├── README.md                       What's here, and steps for a new résumé
│   └── archive/                        Older résumés
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
- `links`: `url` is the full address; `handle` is the short text shown in the contact section.

### Change page text
Open `index.html` → pencil icon → find the words and change only the text between the tags. For example, in `<h3>Call Clutch</h3>` change only `Call Clutch`. → **Commit changes**. Then update `profile.md` to match.

### Add a project
In `index.html`, find the `<!-- Projects -->` section. Copy a whole small card, from `<article class="project card` to its closing `</article>`, and paste it after the last one. Change the title, the type (`project-kind`), the description, the tags (`<li>…</li>`) and the links. Then add the project to `profile.md`.

### Replace a project screenshot
Make a 1200 × 750 JPEG under about 250 KB, upload it to `images/projects/` with the **same file name** (for example `dk-engineer.jpg`), and commit.

### Update the résumé
Follow the steps in `resume/README.md`: move the old PDF into `resume/archive/`, upload the new one with the same name, then update `profile.md` and the page text.

## How changes go live
**First time only:** after the first version is merged into `main`, turn on GitHub Pages: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**. The site appears at https://pradipdj432.github.io/portfolio/ about a minute later.

After that, every merge into `main` goes live in a minute or two. To check a deploy, open the repo's **Actions** tab and look for the latest **"pages build and deployment"** run (green tick = live).

### Adding a custom domain later
Settings → Pages → **Custom domain**, then follow GitHub's DNS steps. Then change the address in `index.html` (the `og:` and `canonical` tags), `js/config.js` (`siteUrl`), `robots.txt` and `sitemap.xml` (D-004).
