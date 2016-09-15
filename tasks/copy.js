const gulp     = require('gulp'),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
  config.copy.forEach(function (file) {
    gulp
      .src(path.join(paths.root, file))
      .pipe(gulp.dest(path.join(paths.root, paths.build)));
  });

  done();
};
