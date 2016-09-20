'use strict';

const metalsmith = require('metalsmith'),
    filter       = require('metalsmith-filter'),
    path         = require('path'),
    config       = require('../config'),
    paths        = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    metalsmith(path.join(paths.root))
        .source(paths.src)
        .use(filter(config.copy))
        .destination(paths.build)
        .clean(false)
        .build(function(err) {
            if (err) {
                console.error(err);
            }
            if (done) {
                done();
            }
        });
};
