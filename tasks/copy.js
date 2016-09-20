'use strict';

const gulp = require('gulp'),
    path   = require('path'),
    config = require('../config'),
    paths  = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
    gulp.src(config.copy)
        .on('error', function (error) {
            console.error(error);
            this.emit('end');
        })
        .on('end', function (error) {
            if (done) {
                done();
            }
        })
        .pipe(gulp.dest(path.join(paths.root, paths.build)));
};
