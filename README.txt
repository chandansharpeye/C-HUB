C-HUB — Language selector update

UPLOAD these files to the ROOT of your existing GitHub repository (C-HUB), replacing files with the same names:
- index.html
- i18n.js (new)
- sw.js
- manifest.json

Do not delete your existing image/icon files or other app files. Keep them in the repository root.

Steps: GitHub repository → Add file → Upload files → select the 4 files above → Commit changes to main.
Wait 1–3 minutes, then open https://chandansharpeye.github.io/C-HUB/ and refresh. If the installed PWA shows the old version, fully close and reopen it.

Language selector: English / हिन्दी / ଓଡ଼ିଆ. The selector remembers the chosen language on this device. Existing app code and saved localStorage data are retained.

Important: this is a language-layer update, not a fully human-reviewed translation of every sentence. Unknown text remains in English. AI output language selectors already present in the app are unchanged. The app needs its existing repository assets (logo.webp, icons, etc.) to remain in place.
