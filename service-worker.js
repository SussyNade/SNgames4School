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
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // Special case: game.html with search params should serve the cached game.html
      if (url.pathname.endsWith('game.html')) {
        return caches.match('game.html', { ignoreSearch: true });
      }

      return fetch(event.request).then((networkResponse) => {
        const isSelfHosted = url.pathname.includes('/games/');
        const isAsset = url.pathname.includes('/assets/');
        const isCDN = url.hostname === 'unpkg.com' || url.hostname === 'cdnjs.cloudflare.com';
        
        if (networkResponse && networkResponse.status === 200 && (isSelfHosted || isAsset || isCDN)) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      }).catch(() => {
        // Offline fallbacks
        if (event.request.mode === 'navigate') {
          if (url.pathname.endsWith('game.html')) {
            return caches.match('game.html', { ignoreSearch: true });
          }
          return caches.match('index.html');
        }
      });
    })
  );
});
