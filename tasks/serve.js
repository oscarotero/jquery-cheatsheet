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
    let watchOptions = {
        cwd: paths.root,
        ignoreInitial: true,
        ignored: '.DS_Store'
    };

    sync.watch('**', watchOptions, function (event, file) {
        if (file.indexOf(paths.build) === 0) {
            return sync.reload(path.basename(file));
        }

        if (file.indexOf(path.join(paths.src, paths.js)) === 0) {
            return js();
        }

        if (file.indexOf(path.join(paths.src, paths.css)) === 0) {
            return css();
        }

        if (file.indexOf(path.join(paths.src, paths.img)) === 0) {
            return img();
        }

        if (file.indexOf(path.join(paths.src, paths.data)) === 0) {
            return html();
        }

        if (file.indexOf(paths.src) === 0) {
            return html(undefined, {all: true});
        }
    });

    sync.init({
        server: path.join(paths.root, paths.build),
        watchOptions: watchOptions,
        reloadOnRestart: true,
        open: false
    }, function () {
        if (done) {
            done();
        }
    });
};