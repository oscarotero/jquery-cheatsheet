'use strict';

const del  = require('del'),
    path   = require('path'),
    config = require('../config'),
    paths  = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    del.sync([
        path.join(paths.root, paths.build, '/**'),
        path.join(paths.root, paths.tmp, '/**')
    ]);

    if (done) {
        done();
    }
};
