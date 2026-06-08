const CACHE_NAME = 'sngames-v1';
const CORE_ASSETS = [
  'index.html',
  'game.html',
  'style.css',
  'jogos.js',
  'translations.js',
  'rating_system.js',
  'manifest.json',
  'assets/logosite/logo/logo.webp',
  'assets/logosite/icon/16x16.png',
  'assets/logosite/icon/32x32.png',
  'assets/logosite/icon/64x64.png'
];

// This will be populated dynamically if possible, or we intercept and cache on demand.
// Since we want offline support for self-hosted games, we should cache their entry points and assets.

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Strategy: Cache First, falling back to Network
  // For self-hosted games, we want to make sure they are cached when first accessed or pre-cached if we knew all files.
  // Given the instruction to cache "all self-hosted game files", we will cache them as they are fetched.
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Check if we should cache this response
        // We cache CORE_ASSETS and any file that belongs to a self-hosted game
        // Self-hosted games are in games/ directory
        const isSelfHosted = url.pathname.includes('/games/');
        const isAsset = url.pathname.includes('/assets/');
        
        if (networkResponse && networkResponse.status === 200 && (isSelfHosted || isAsset || CORE_ASSETS.some(asset => url.pathname.endsWith(asset)))) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      }).catch(() => {
        // Offline fallback could be added here if needed
      });
    })
  );
});
