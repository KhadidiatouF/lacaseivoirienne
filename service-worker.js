const CACHE_NAME = "la-case-ivoirienne-v21";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/assets/Brochettes/brochettes de blanc de poulet.jpeg",
  "/assets/Brochettes/brochettes de lotte.jpeg",
  "/assets/Brochettes/brochettes de viande de boeuf.jpeg",
  "/assets/Brochettes/brochettes gambas.jpeg",
  "/assets/Sauces/Sauce Gombo avec du gari.jpeg",
  "/assets/Sauces/Sauce Graine.jpeg",
  "/assets/Choukouya/Choukouya Poulet.jpeg",
  "/assets/Choukouya/Choukouya mouton.jpeg",
  "/assets/Sauces/sauce arachide.jpg",
  "/assets/Sauces/sauce aubergine.avif",
  "/assets/Soupes/kedjenou de cabri.jpeg",
  "/assets/Soupes/kedjenou de mouton.avif",
  "/assets/Soupes/kedjenou de poisson.jpeg",
  "/assets/Soupes/kedjenou pate de boeuf.jpeg",
  "/assets/Soupes/kedjenou poulet.jpeg",
  "/assets/Soupes/soupe pate de boeuf.jpeg",
  "/assets/Volailles/caille braisé.jpeg",
  "/assets/Volailles/dinde braisé.jpg",
  "/assets/Volailles/pigeon braisé.jpeg",
  "/assets/Volailles/poulet braisé.jpeg",
  "/assets/accompagnements/abolo.jpeg",
  "/assets/accompagnements/akassa.jpeg",
  "/assets/accompagnements/alloco.jpeg",
  "/assets/accompagnements/attiéké.jpg",
  "/assets/accompagnements/baton de manioc.jpeg",
  "/assets/accompagnements/foutou banane.jpeg",
  "/assets/accompagnements/foutou igname.jpeg",
  "/assets/accompagnements/frites d'ignames.jpg",
  "/assets/accompagnements/frites de patates douces.jpeg",
  "/assets/accompagnements/frites de pomme de terres.jpeg",
  "/assets/boissons/Jus de bissap.jpeg",
  "/assets/boissons/coca.jpeg",
  "/assets/boissons/fanta.jpeg",
  "/assets/boissons/jus de gingembre.jpeg",
  "/assets/boissons/jus de passion.jpeg",
  "/assets/boissons/sprite.jpeg",
  "/assets/poissons /carpe braisé.jpeg",
  "/assets/poissons /dorade braisé.jpeg",
  "/assets/poissons /sol.jpeg",
  "/assets/poissons /thon frit.jpeg",
  "/assets/Attieke croupion de dinde_.jpeg",
  "/assets/Attiéké Poisson.jpeg",
  "/assets/attiéképoulet.jpeg",
  "/assets/boissons/jus de passion.jpeg",
  "/assets/garba.jpeg",
  "/assets/poisson braisé.jpeg",
  "/assets/Volailles/poulet braisé.jpeg",
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
