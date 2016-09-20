importScripts('js/sw.js');

toolbox.precache([
	'/',
	'/css/styles.css',
	'/css/styles-print.css',
	'/js/1.1.js',
	'/js/main.js',
]);

toolbox.router.get('/', toolbox.networkFirst);
