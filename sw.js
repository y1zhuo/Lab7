// sw.js - Service Worker

// You will need 3 event listeners:
//   - One for installation
const CACHE_NAME = 'lab7-cache';
const urlsToCache = [
  '/',
  '/style.css',
  '/scripts/script.js',
  '/scripts/router.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
//   - One for activation ( check out MDN's clients.claim() for this step )
//   - One for fetch requests
