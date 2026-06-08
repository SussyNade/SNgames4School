const CACHE_NAME = 'sngames-v1';
const CORE_ASSETS = [
  './',
  'index.html',
  'game.html',
  'offline.html',
  'offline-bar.js',
  'style.css',
  'jogos.js',
  'translations.js',
  'rating_system.js',
  'age-system.js',
  'manifest.json',
  'assets/logosite/logo/logo.webp',
  'assets/logosite/icon/16x16.png',
  'assets/logosite/icon/32x32.png',
  'assets/logosite/icon/64x64.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching core assets');
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

  // NAVIGATION REQUESTS
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // If navigation fails (offline), try these fallbacks:
        if (url.pathname.endsWith('game.html')) {
          return caches.match('game.html', { ignoreSearch: true }).then(res => res || caches.match('offline.html'));
        }
        // For index.html or any other page, show the dedicated offline page
        return caches.match('offline.html') || caches.match('index.html');
      })
    );
    return;
  }

  // ASSETS AND OTHER REQUESTS
  const isCoreAsset = CORE_ASSETS.some(asset => 
    url.pathname.endsWith(asset) || (asset === './' && url.pathname.endsWith('/'))
  );

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Update core assets in background
        if (isCoreAsset) {
          fetch(event.request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          }).catch(() => {});
        }
        return cachedResponse;
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
        // If asset fetch fails and not in cache, try to return nothing or a fallback image
        return null;
      });
    })
  );
});
