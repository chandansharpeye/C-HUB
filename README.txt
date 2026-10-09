C-HUB update v2: English / हिन्दी / ଓଡ଼ିଆ selector, working Install button, safer updates
=====================================================================================

UPLOAD (repo root, same folder as your current index.html) - 3 files, replace/add:
  1. index.html   (modified - replace)
  2. sw.js        (modified - replace; cache v5 -> v6)
  3. i18n.js      (NEW - add)
OPTIONAL: translations-todo.csv is only a work list for a translator. Do NOT upload it to the site.

DO NOT UPLOAD / REPLACE: manifest.json, everything in icons/, language-toggle.js and the old sw.js from the
earlier partial ZIP (they conflict with this version).

STEPS
  1. Back up / note your current commit.
  2. GitHub -> Add file -> Upload files -> drop the 3 files -> Commit to main.
  3. After 1-2 minutes open https://chandansharpeye.github.io/C-HUB/ and refresh once.
  4. Installed app: close it fully and reopen; a "New version ready. Tap to refresh." button appears once the update loaded.

BEFORE YOU UPLOAD: your files use icons/... paths (icons/logo.webp, icons/icon-192.png ...). The GitHub repo page showed
these images at the repo root. Make sure the images really are in an icons/ folder, or logo/icons/install will not work.

TRANSLATION STATUS (honest)
  Translated (Hindi + Odia): menu and navigation, section headings, hero, Top Tools, install/update messages,
  search, and a set of common labels (Subject, Class, Date, Clear, No file chosen, Print / Save as PDF ...).
  NOT translated: 1,110 other strings (about 33,000 characters) - most form labels, placeholders, explanations,
  FAQs, Privacy Policy, Terms, About text, study tips, formulas, career data, quiz questions, government-link
  descriptions, Welcome tour. They stay in English; nothing breaks.
  The full list is in translations-todo.csv (columns: English, Hindi, Odia, times on page).
  Hindi/Odia wording has not been reviewed by a native speaker.
  Deliberately left in English: names that are also saved values or used by app logic (subject lists, class
  names, option values, career names, timer Start/Pause) - translating them could break saved data.

TO ADD TRANSLATIONS: open i18n.js, add lines inside RAW:   "English text": ["हिन्दी","ଓଡ଼ିଆ"],
  (exact English text; emoji at the start are ignored; several English texts can share one line with "A|B").

TESTED (headless Chromium, served at /C-HUB/): language switch en/hi/or, back to English restores exact text,
  choice saved in localStorage and restored after reload, select option values unchanged across languages,
  existing features (quick note, skill tracker, menu search, theme button) still work and keep saved data,
  install button (real prompt path + manual instructions), all 10 shell files cached under /C-HUB/ (icons/ paths),
  manifest icons and start_url load, offline reload (Odia + saved data intact), service-worker update v6->v7
  (old cache deleted, banner shown, changed file served immediately), no horizontal overflow at 360 and 412 px, no JS errors.
NOT TESTED: real phone, iPhone Safari, real Android install prompt, live GitHub Pages, upgrade from your live v5 cache,
  Odia font rendering on old phones.
KNOWN ISSUE (already in your original file): at 320 px width the page is 40 px too wide (Top Tools cards).
