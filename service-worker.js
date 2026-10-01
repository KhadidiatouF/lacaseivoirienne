const CACHE_NAME = "la-case-ivoirienne-v7";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/assets/Attieke croupion de dinde_.jpeg",
  "/assets/Attiéké Poisson.jpeg",
  "/assets/Gnamakoudji.jpeg",
  "/assets/Jus de bissap.jpeg",
  "/assets/alloco.jpeg",
  "/assets/attiéképoulet.jpeg",
  "/assets/choukouya.jpeg",
  "/assets/croupillon de dinde.jpeg",
  "/assets/foutou gombo.jpeg",
  "/assets/foutou graine.jpeg",
  "/assets/foutou grainee.jpeg",
  "/assets/garba attiéké.jpeg",
  "/assets/garba.jpeg",
  "/assets/logocaseivoirienne.jpeg",
  "/assets/placali gombo.jpeg",
  "/assets/placali graine.jpeg",
  "/assets/placaligombo.jpeg",
  "/assets/poisson braisé.jpeg",
  "/assets/poisson frit.jpeg",
  "/assets/riz gombo.webp",
  "/assets/riz graine.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => caches.match("/index.html"))
      );
    })
  );
});
