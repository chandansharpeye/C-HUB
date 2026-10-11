# C-HUB 2.0 — Study, Skills & Tools

C-HUB is a static, mobile-friendly student toolkit. Version 2.1 adds an offline-ready English Academy and a School Study Library interface for Classes 5–10, official textbook portal links, visual study cards, original starter Q&A, local revision cards, and local PDF/image preview.

## Publish on GitHub Pages
1. Download/backup the current repository first.
2. Upload the contents of this folder to the repository root (not the outer folder), replacing matching files.
3. Commit to the branch used by GitHub Pages (usually `main`).
4. Wait for Pages to rebuild, then open the published site and refresh.
5. Close and reopen an installed C-HUB app to load the new service-worker cache.

## Included in v2.0
- Existing C-HUB tools, branding, theme and install flow retained.
- English Academy with offline lessons, multiple-choice practice, XP/progress tracking and a local vocabulary notebook.
- New School Study Library for Classes 5–10 with class/subject selection.
- Official SCERT Odisha and BSE Odisha textbook-resource links.
- Original illustrative study cards and starter practice questions. These are not official answer keys.
- Local textbook PDF/image preview, custom revision-card saving and JSON export.
- Service-worker cache version bumped to v12.

## Important content note
The official textbook links lead to board/SCERT portals. The exact available books and syllabus may change by academic year. Full chapter-by-chapter textbook answers for all classes are not bundled because each answer must be sourced and checked against the current textbook. The English Academy lesson content and School Study Library UI support English, Hindi and Odia. The legacy translation dictionary is still dictionary-based, so uncommon/legacy text may remain in English until added to i18n.js.

## Files to upload
Upload all files in this folder to the repository root, including `school-library.js` and `school-library.css`. Keep the existing image/icon files. Do not upload only `index.html` without the new library files.
