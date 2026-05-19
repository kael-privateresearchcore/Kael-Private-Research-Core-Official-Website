self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Simple offline fallback – just let requests pass through
  event.respondWith(fetch(event.request));
});