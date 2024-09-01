
// Define the cache name and the files to cache initially
const CACHE_NAME = "v1";
const BASE_PATH = '/cybermancy';  // Base path for GitHub Pages
const URLS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/images/assets.png`,
  `${BASE_PATH}/images/bagua.png`,
  `${BASE_PATH}/images/career.png`,
  `${BASE_PATH}/images/children.png`,
  `${BASE_PATH}/images/env.env`,
  `${BASE_PATH}/images/fortune.png`,
  `${BASE_PATH}/images/health.png`,
  `${BASE_PATH}/images/info.png`,
  `${BASE_PATH}/images/marriage.png`,
  `${BASE_PATH}/images/popularity.png`,
  `${BASE_PATH}/images/scanlines.png`,
  `${BASE_PATH}/images/wealth.png`,
  `${BASE_PATH}/models/age_gender_model-shard1.shard`,
  `${BASE_PATH}/models/age_gender_model-weights_manifest.json`,
  `${BASE_PATH}/models/face_landmark_68_tiny_model-shard1`,
  `${BASE_PATH}/models/face_landmark_68_tiny_model-weights_manifest.json`,
  `${BASE_PATH}/models/tiny_face_detector_model-shard1.shard`,
  `${BASE_PATH}/models/tiny_face_detector_model-weights_manifest.json`,
  `${BASE_PATH}/font/OpenSans.ttf`,
  `${BASE_PATH}/font/UnicaOne-Regular.ttf`,
];

// Install event: cache the files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activate event: update the cache if necessary
self.addEventListener("activate", (event) => {
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
self.addEventListener("fetch", (event) => {
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

