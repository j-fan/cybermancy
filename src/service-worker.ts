// Casting `self` to ServiceWorkerGlobalScope
const sw = self as unknown as ServiceWorkerGlobalScope;

// Define the cache name and the files to cache initially
const CACHE_NAME = "v1";
const URLS_TO_CACHE: string[] = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/bagua.png",
  "/models/age_gender_model-shard1.shard",
  "/models/age_gender_model-weights_manifest.json",
  "/models/face_landmark_68_tiny_model-shard1",
  "/models/face_landmark_68_tiny_model-weights_manifest.json",
  "/models/tiny_face_detector_model-shard1.shard",
  "/models/tiny_face_detector_model-weights_manifest.json",
];

// Install event: cache the files
sw.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activate event: update the cache if necessary
sw.addEventListener("activate", (event: ExtendableEvent) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Fetch event: serve cached content when offline
sw.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache the new response
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

export const registerCachingWebWorker = (): void => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("ServiceWorker registration failed: ", error);
        });
    });
  }
};
