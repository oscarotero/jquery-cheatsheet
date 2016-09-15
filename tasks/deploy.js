const gulp     = require('gulp'),
      rsync    = require('gulp-rsync'),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function () {
  config.deploy.root = path.join(paths.root, paths.build);

  gulp.src(path.join(paths.root, paths.build, '**'))
    .pipe(rsync(config.deploy));
};
