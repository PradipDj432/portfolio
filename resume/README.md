# Résumé

The owner's résumé (CV). It's the source for the facts in `profile.md`, and the site's "Download résumé" buttons link to it (D-005).

## What's here
| File | What it is |
|---|---|
| `Pradip-Jaliya-Resume.pdf` | The current résumé, exactly as the owner sent it. This is the file visitors download (renamed from `Pradipkumar-Jaliya-Resume.pdf` by D-009) |
| `archive/` | Older résumés, kept as a backup, not linked from the site |
| `archive/Pradipkumar-Jaliya-CV-2026-03.pdf` | Older CV (March 2026, the owner's file was `PRADIP_JALIYA_CV_2026.pdf`). The source for the work history at Optimum Financial Solutions and Dhitech Solutions (D-011). SHA-256 `d70d304bb0b9bf0ad62b2852bc5ff5c4e764795c7de2266233303fc452434a79` |

**Current résumé:** 2 pages, made April 2026, added 2026-10-04 (the owner's file was `PRADIP_JALIYA_PROFILE_2026.pdf`).
SHA-256: `94b0b284fe10f6e2f632fe1929b3f2ec18efa3249ca179c9c1bb872e810f1f98`

The repo is public, so anyone can open these PDFs, including the phone number and email on them.

**Note:** the current résumé is out of date compared with the website: it says 3 years, 700+ LeetCode, four certificates and Dhitech from March 2023, and doesn't list Eagerminds or Optimum. Replace it when the owner has an updated one (D-011).

## When a new résumé arrives
1. Move the current PDF into `archive/` with its year and month in the name, for example `archive/Pradip-Jaliya-Resume-2026-04.pdf`. Never delete an old résumé.
2. Save the new PDF here under the **same name**, `Pradip-Jaliya-Resume.pdf`, so the download links keep working.
3. Update the date and SHA-256 above (`sha256sum Pradip-Jaliya-Resume.pdf`).
4. Update `profile.md` to match the new résumé, then the website pages that show those facts.
