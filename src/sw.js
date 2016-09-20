self.importScripts('sw-toolbox.js');

self.toolbox.options.debug = true;

self.toolbox.router.default = self.toolbox.fastest;

self.addEventListener('install', function (event) {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
	event.waitUntil(self.clients.claim());
});
