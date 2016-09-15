module.exports = {
	url: 'http://oscarotero.com/jquery-dev',
	deploy: {
		hostname: 'oscarotero.com',
		destination: '~/jquery-dev',
	},
	paths: {
		root: __dirname,
		build: 'build',
		src: 'src',
		layouts: 'layouts',
		partials: 'layouts/partials',
		css: 'css',
		js: 'js',
		img: 'img',
	},
	metadata: {
		title: 'jQuery Cheatsheet'
	},
    copy: ['jquery.pdf', 'jquery.png'],
	stylecow: require('./stylecow.json'),
    webpack: require('./webpack.config'),
	favicon: require('./favicon.config')
};