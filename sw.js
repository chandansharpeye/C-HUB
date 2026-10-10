/* C-HUB service worker upgrade — v13
 * Core app shell is precached. Optional PDF libraries are cached when online;
 * an unavailable CDN never prevents installation.
 */
const CACHE_VERSION = "v13";
const CACHE = "c-hub-" + CACHE_VERSION;
const SHELL = [
  "./", "./index.html", "./manifest.json", "./i18n.js", "./school-library.js", "./school-library.css",
  "./logo.webp", "./icon-192.png", "./icon-512.png",
  "./icon-maskable-512.png", "./apple-touch-icon.png",
  "./favicon-32.png", "./favicon-48.png", "./favicon.ico",
  "./chub-upgrade.js", "./english-academy.js", "./english-academy.css", "./mr-chandan-robot.svg"
];
const OPTIONAL_LIBS = [
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"
];
const CDN = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    // Optional resources: do not fail installation if the network/CDN is unavailable.
    await Promise.allSettled(OPTIONAL_LIBS.map(async url => {
      try {
        const response = await fetch(url, {mode:"cors"});
        if (response.ok) await cache.put(url, response);
      } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith("c-hub-") && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function cacheResponse(request, response) {
  if (response && (response.ok || response.type === "opaque")) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).then(r => cacheResponse(req,r)).catch(async () =>
      (await caches.match(req)) || (await caches.match("./index.html")) || (await caches.match("./"))));
    return;
  }
  if (url.origin === self.location.origin || CDN.test(req.url)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      const network = fetch(req).then(r => cacheResponse(req,r)).catch(() => cached);
      return cached || network;
    })());
  }
});
