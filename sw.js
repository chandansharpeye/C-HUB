/* C-HUB service worker. To release an update, change CACHE_VERSION (e.g. v3) and upload again. */
var CACHE_VERSION = "v6";
var CACHE = "c-hub-" + CACHE_VERSION;
var SHELL = ["./", "index.html", "manifest.json", "logo.webp", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon.ico"];
var CDN = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("c-hub-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function save(req, res) {
  if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
  return res;
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  /* Pages: network first, so users get the newest version. Offline: cached copy. */
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(function (r) { return save(req, r); }).catch(function () {
      return caches.match(req).then(function (m) { return m || caches.match("./"); });
    }));
    return;
  }
  /* Own files and CDN libraries/fonts: serve cached copy fast, refresh in background. */
  if (url.origin === location.origin || CDN.test(req.url)) {
    e.respondWith(caches.match(req).then(function (m) {
      var net = fetch(req).then(function (r) { return save(req, r); }).catch(function () { return m; });
      return m || net;
    }));
  }
});
