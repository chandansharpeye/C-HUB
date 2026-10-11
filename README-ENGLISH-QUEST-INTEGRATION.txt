C-HUB English Quest integration update
=====================================

This archive is based on the C-HUB-main(1).zip you supplied. It keeps the existing app and adds the English Quest game inside C-HUB.

New features
------------
- New "English Academy (Odia -> English)" item in the Study & Exams menu.
- New #english-quest section integrated into the existing index.html.
- Three playable levels: Word Explorer, Sentence Builder, and Grammar Galaxy.
- Odia prompts, English multiple-choice answers, explanations, XP rewards, and lesson progression.
- Offline Odia-to-English phrasebook with search and topic filters.
- Optional English phrase pronunciation using the browser's built-in speech synthesis when available.
- Progress saved locally in this browser.
- english-quest.css and english-quest.js are added to the service worker precache.
- Service worker cache version incremented to v13 so updated files can be fetched.

How to test locally
-------------------
1. Extract this ZIP.
2. Open C-HUB-main/index.html in a modern browser.
3. Open Menu -> Study & Exams -> English Academy (Odia -> English).
4. Start Level 1 and answer the questions.
5. Search the phrasebook for words such as ଧନ୍ୟବାଦ or "thank you".

Offline/PWA notes
-----------------
- The built-in lessons and phrasebook are local and do not call a translation API.
- To test service-worker offline caching, serve the folder from localhost or deploy it to HTTPS; service workers generally do not register from a file:// URL.
- Existing C-HUB functionality and assets are retained.
- Game progress is stored on the current browser/device only. Clearing site data can erase it.
- The phrasebook translates included phrases, not arbitrary unlimited sentences.
- Pronunciation relies on the browser/device's installed speech voices and may not be available offline on every device.

Publishing
----------
For GitHub Pages, upload the contents of the C-HUB-main folder to the same repository location as the existing app, preserving all file paths. Commit/push and wait for the site to redeploy. The live site is not published by creating this ZIP.
