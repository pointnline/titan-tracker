// Titan Tracker — Service Worker (PWA)
var CACHE_NAME = 'titan-tracker-v1';
var PRECACHE = [
  './', './index.html', './titans-data.js', './titan-nav.js', './config.js',
  './study.html', './search.html', './report.html', './dashboard.html',
  './digest.html', './insights.html', './signals.html',
  './privacy.html', './terms.html'
];

// Install: precache static assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE);
    }).then(function() { return self.skipWaiting(); })
  );
});

// Activate: clean old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

// Fetch: network-first for API/RSS, cache-first for static
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Network-first for API calls and RSS feeds
  if (url.includes('googleapis.com') || url.includes('rss2json') || url.includes('news.google.com')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Cache-first for static assets
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache successful responses
        if (response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      }).catch(function() {
        // Offline fallback
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
