self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('progress-tracker-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        // Add other files to cache if you have them, like css, images etc.
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});