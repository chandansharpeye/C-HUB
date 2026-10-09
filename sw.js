/* C-HUB service worker. To release an update, change CACHE_VERSION (e.g. v7) and upload again. */
var CACHE_VERSION = "v8";
var CACHE = "c-hub-" + CACHE_VERSION;
var SHELL = ["./", "index.html", "i18n.js", "manifest.json", "logo.webp", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon.ico", "splash-pc.webp"];
var CDN = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

/* Each file is cached on its own, so one missing file can no longer stop the whole install. */
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(new Request(u, { cache: "reload" })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("c-hub-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("message", function (e) { if (e.data === "SKIP_WAITING") self.skipWaiting(); });

function save(req, res) {
  if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
  return res;
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  /* Your own pages and files: network first (bypassing the browser HTTP cache) so updates load at once. Offline: cached copy. */
  if (url.origin === location.origin) {
    e.respondWith(fetch(req, { cache: "no-cache" }).then(function (r) { return save(req, r); }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (m) { return m || (req.mode === "navigate" ? caches.match("./") : undefined) || Response.error(); });
    }));
    return;
  }
  /* CDN libraries and fonts: serve cached copy fast, refresh in background. */
  if (CDN.test(req.url)) {
    e.respondWith(caches.match(req).then(function (m) {
      var net = fetch(req).then(function (r) { return save(req, r); }).catch(function () { return m; });
      return m || net;
    }));
  }
});
