'use strict';

const metalsmith = require('metalsmith'),
    imagemin     = require('metalsmith-imagemin/lib/node4'),
    changed      = require('metalsmith-changed'),
    path         = require('path'),
    config       = require('../config'),
    paths        = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    metalsmith(path.join(paths.root))
        .source(path.join(paths.src, paths.img))
        .use(ifProd(imagemin()))
        .destination(path.join(paths.build, paths.img))
        .clean(false)
        .use(changed({
            ctimes: path.join(paths.root, paths.tmp, 'metalsmith-changed-ctimes.json')
        }))
        .build(function(err) {
            if (err) {
                console.error(err);
            }
            if (done) {
                done();
            }
        });
};

function ifProd (cb) {
    if (!config.dev) {
        return cb;
    }

    return function (files, metalsmith, done) {
        done();
    };
}