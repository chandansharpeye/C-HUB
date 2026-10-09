C-HUB 2.0 + header Install button (root-path version: images stay in the repo root)
====================================================================================
UPLOAD these 4 files to the repo ROOT, replacing old ones: index.html, sw.js, manifest.json, i18n.js
DO NOT upload: translations-todo.csv, README.txt, any images (already in your repo), the old language-toggle.js.
STEPS: GitHub -> Add file -> Upload files -> remove any other queued files -> add the 4 files -> Commit to main.
After 1-2 minutes open https://chandansharpeye.github.io/C-HUB/ and refresh once. Installed app: close fully and reopen.

WHAT IS NEW
- Includes your C-HUB 2.0 modules (Typing Lab, Coding Academy, Computer Basics, Shortcuts, Job Alerts), unchanged.
- "Install" button in the top header (icon only on phones, icon + text on wide screens). Tap: the browser's native
  install dialog opens (Chrome/Edge/Android/desktop). If the browser has no install dialog (iPhone Safari, Firefox,
  or already used), a bottom sheet shows the exact manual steps in English/Hindi/Odia. Hidden once installed.
  NOTE: a website cannot silently download/install itself; the browser always asks the user to confirm.
- Update banner now also works if the page was opened offline. Cache version v7.
- Language selector, saved language, offline mode and saved data work as before.

TRANSLATION: NOT complete. See translations-todo.csv for the texts still in English (including most 2.0 module text,
which was never translated). Fill the Hindi/Odia columns and send it back to be merged. Not native-reviewed.
TESTED (headless Chromium at /C-HUB/): 26 checks pass - header button at 320/360/412 px (no new overflow), native prompt,
manual-instructions sheet (generic + iPhone UA), hidden when installed, offline reload, SW update + banner, language
persistence, option values unchanged, 2.0 tabs, sandboxed code preview, no JS errors.
NOT TESTED: real phone/browser install dialog, iPhone Safari, live GitHub Pages, upgrade from your live cache.
Known issue already in your original: 40 px sideways overflow at 320 px width.
