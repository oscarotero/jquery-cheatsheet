'use strict';

const sync = require('browser-sync').create(),
    path   = require('path'),
    css    = require('./css'),
    html   = require('./html'),
    img    = require('./img'),
    js     = require('./js'),
    config = require('../config'),
    paths  = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    sync.watch(path.join(paths.root, paths.src, paths.js, '/**'), () => js());
    sync.watch(path.join(paths.root, paths.src, paths.css, '/**'), () => css());
    sync.watch(path.join(paths.root, paths.src, paths.img, '/**'), () => img());
    sync.watch([
        path.join(paths.root, paths.src, paths.data, '/**'),
        path.join(paths.root, paths.src, paths.layouts, '/**'),
        path.join(paths.root, paths.src, paths.partials, '/**')
    ], () => html());

    sync.watch(path.join(paths.root, paths.build, '/**'), function (event, file) {
        sync.reload(path.basename(file));
    });

    sync.init({
        server: path.join(paths.root, paths.build)
    }, function () {
        if (done) {
            done();
        }
    });
};
