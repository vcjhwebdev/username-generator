const CACHE_NAME = 'static-v1.0.0';

var urlsToCache = [
	'index.html',
	'assets/css/style.css',
	'assets/js/calculator.js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
			.then(function() {
				self.skipWaiting();
			})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			cache.match(event.request, {ignoreSearch: true});
		})
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});

<script>
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
  		navigator.serviceWorker.register('sw.js').then(function(registration) {
  		// Registration was successful
  		console.log('ServiceWorker registration successful with scope: ', registration.scope);
  	}, function(err) {
  		// registration failed :(
  		console.log('ServiceWorker registration failed: ', err);
  	});
  });
}
</script>
