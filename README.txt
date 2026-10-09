C-HUB: redesigned header (Install, Language, Theme, Menu) - root-path version
=============================================================================
UPLOAD these 4 files to the repo ROOT, replacing old ones: index.html, sw.js, manifest.json, i18n.js
DO NOT upload: translations-todo.csv, README.txt, any images (already in your repo).
STEPS: GitHub -> Add file -> Upload files -> remove any other queued files -> add the 4 files -> Commit to main.
After 1-2 minutes open the site and refresh once. Installed app: close fully and reopen (cache is now v8).

HEADER (phones): row 1 = logo (kept clear of the sound button); row 2 = [Install icon] [Language] [Theme] [Menu].
Install = yellow icon button (icon + text on wider screens); Language = pill with globe; Theme = soft round button;
Menu = dark pill. All 44 px tall. Desktop: one row. Moved the language selector into the header (no separate row).
Install button still opens the browser's native install dialog; it cannot install silently. If unavailable (iPhone
Safari, Firefox) a sheet with manual steps appears.

TESTED (headless Chromium): header geometry in 36 combinations (English/Hindi/Odia x 320/360/390/412/600/800 px x normal and
extra-wide font): no overlaps, nothing outside the screen, all buttons >= 44 px; regression suites (language, saved data,
offline, SW update, install flow, 2.0 modules) pass; screenshots checked at 360 px (English, Odia), dark mode, desktop.
KNOWN: with an extra-wide font the PAGE is 6 px too wide at 360 px (46 at 320) - same in your original 2.0 file; caused by
buttons further down the page, not the header. At 320 px the language name may be shortened with "...".
NOT TESTED: your real phone, iPhone Safari, live GitHub Pages.
Translation is still incomplete (see translations-todo.csv).
