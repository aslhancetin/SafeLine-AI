const CACHE_NAME = "safeline-static-v1";

// Offline açılış için minimum cache.
const CORE_ASSETS = ["/", "/index.html", "/service-worker.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();

      // Eski cache'leri temizle.
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k)))
      );
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    (async () => {
      // Navigation isteklerinde önce cache'e bak.
      if (req.mode === "navigate") {
        const cached = await caches.match("/index.html");
        if (cached) return cached;
      }

      // Diğer GET'lerde network önce denenir, hata olursa cache fallback.
      try {
        return await fetch(req);
      } catch (err) {
        const cached = await caches.match(req);
        if (cached) return cached;
        throw err;
      }
    })()
  );
});

