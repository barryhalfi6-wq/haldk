const CACHE_NAME = 'litterature-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installation du cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Récupération des fichiers hors-ligne
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});