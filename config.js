module.exports = {
    url: 'http://oscarotero.com/jquery',
    deploy: 'oscarotero.com:~/www/jquery',
    paths: {
        root: __dirname,
        src: 'src',
        build: 'build',
        data: 'data',
        layouts: 'layouts',
        partials: 'layouts/partials',
        css: 'css',
        js: 'js',
        img: 'img'
    },
    metadata: {
        title: 'jQuery Cheatsheet'
    },
    copy: [
        'jquery.pdf',
        'jquery.png'
    ],
    stylecow: require('./stylecow.json'),
    webpack: require('./webpack.config'),
    favicon: require('./favicon.config')
};