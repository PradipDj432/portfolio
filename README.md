# Portfolio — Website

The personal portfolio website of **Pradipkumar Jaliya** ([PradipDj432](https://github.com/PradipDj432) on GitHub): Claude Native · DevOps & AI Engineer · Full Stack Developer. It will introduce the owner, show their skills, work and projects, offer the résumé as a download, and make it easy to get in touch.

**Status:** Setup. The rules, project docs and résumé are in place; there's no website code yet. Where the project stands: `progress.md`. What's next: `backlog.md` → "Next up".

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

## How it works (proposed)
Nothing is built yet. The plan, still to confirm with the owner (D-003, D-004):
- A static website: plain **HTML, CSS and JavaScript**. No framework and no build step.
- Hosted free on **GitHub Pages** from the `main` branch, repo root.
- Contact links, social links and the résumé link in **one file, `js/config.js`**.
- The page text comes from `profile.md`, which comes from the résumé in `resume/` (D-005).

## How we work (branches)
All changes are made on the **`working`** branch, one feature at a time: sync `working` with `main` → build the feature → open a pull request from `working` into `main` → merge it when the owner says so → sync `working` with `main` again. The exact steps are in `CLAUDE.md` → "Branches and pull requests" (D-002).

## Folder layout
```
portfolio/
├── CLAUDE.md      Rules for people and AI working on this repo
├── README.md      This file
├── profile.md     Facts about the owner
├── decisions.md   Decision log
├── backlog.md     To-do list
├── progress.md    Status and work log
└── resume/
    ├── Pradipkumar-Jaliya-Resume.pdf   The current résumé (download + source of facts)
    ├── README.md                       What's here, and steps for a new résumé
    └── archive/                        Older résumés
```
The website files (`index.html`, `css/`, `js/`, `images/`) will be added when the first page is built. Update this tree when they are.

## Run it on your computer
Once there's a page, start a small local server in the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## How changes go live
GitHub Pages isn't on yet. After the first page is merged into `main`, turn it on: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**. After that, every merge into `main` goes live in a minute or two. To check a deploy, open the repo's **Actions** tab and look for the latest **"pages build and deployment"** run (green tick = live).
