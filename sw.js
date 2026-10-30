/* Service worker: ilova qobig'ini keshlaydi — internet bo'lmasa ham test ishlaydi.
   Yangi versiya chiqarganda VERSION ni o'zgartiring. */
const VERSION = "v5";
const CACHE = "kunlik-test-" + VERSION;
const SHELL = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "data/questions.js",
  "data/questions-ru.js",
  "manifest.json",
  "img/logo.webp",
  "img/favicon-32.png",
  "img/icon-192.png",
  "img/icon-512.png"
];
/* Tashqi resurslar (Firebase SDK va Google Fonts) — birinchi yuklanganda keshga olinadi */
const CDN = /^https:\/\/(www\.gstatic\.com\/firebasejs|cdnjs\.cloudflare\.com\/ajax\/libs\/firebase|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("kunlik-test-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    /* Sahifa: avval tarmoq (yangilanishlar darhol ko'rinsin), bo'lmasa kesh */
    if (req.mode === "navigate") {
      e.respondWith(
        fetch(req)
          .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("index.html", copy)); return res; })
          .catch(() => caches.match("index.html"))
      );
      return;
    }
    /* Boshqa fayllar: keshdan darhol, fonda yangilash (stale-while-revalidate) */
    e.respondWith(
      caches.open(CACHE).then((c) =>
        c.match(req, { ignoreSearch: true }).then((hit) => {
          const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        })
      )
    );
    return;
  }

  if (CDN.test(req.url)) {
    e.respondWith(
      caches.open(CACHE).then((c) =>
        c.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }))
      )
    );
  }
  /* Firebase Realtime Database / Auth so'rovlari keshlanmaydi */
});
