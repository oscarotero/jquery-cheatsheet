module.exports = {
    url: 'http://oscarotero.com/jquery',
    deploy: 'oscarotero.com:~/www/jquery',
    paths: {
        root: __dirname,
        src: 'src',
        build: 'build',
        tmp: 'tmp',
        data: 'data',
        layouts: 'layouts',
        partials: 'layouts/partials',
        css: 'css',
        js: 'js',
        img: 'img'
    },
    metadata: {
        title: 'jQuery Cheat Sheet',
        description: 'jQuery cheat sheet in HTML with links to the original API documentation. Created by Oscar Otero',
        author: 'Oscar Otero - https://oscarotero.com',
        keywords: 'jQuery, javascript, cheatsheet, api, resource, web developer',
        twitter: '@misteroom',
    },
    copy: [
        'jquery.pdf',
        'jquery.png',
        'sw.js',
    ],
    stylecow: require('./stylecow.json'),
    webpack: require('./webpack.config'),
    favicon: require('./faviconDescription.json')
};