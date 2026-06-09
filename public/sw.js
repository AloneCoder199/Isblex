const CACHE_NAME = "prifya-v1";
const ASSETS_TO_CACHE = [
  "/", 
  "/offline.html"
];

// 1. INSTALL EVENT: Assets ko cache mein save karna
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching core assets");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting()) // Naye service worker ko instantly activate karne ke liye
  );
});

// 2. ACTIVATE EVENT: Purani outdated cache ko clear karna (Bohot zaroori hai!)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Clearing old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Tamam browser tabs par control instantly active karne ke liye
  );
});

// 3. FETCH EVENT: Network request ko handle karna aur offline screen dikhana
self.addEventListener("fetch", (event) => {
  // Sirf GET requests ko intercept karna hai (POST, PUT ko nahi)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Agar asset cache mein hai to yahin se de do
      }

      return fetch(event.request).catch((error) => {
        // Agar network fail ho jaye aur user kisi page (navigation) par ja raha ho
        if (event.request.mode === "navigate") {
          return caches.match("/offline.html");
        }
        
        // Baki asset assets (like missing image) ke liye normal fail response return karein
        return null;
      });
    })
  );
});
