self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // This is a dummy fetch to satisfy the installability requirements
  e.respondWith(fetch(e.request));
});