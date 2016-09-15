const gulp     = require('gulp'),
      gulpif   = require('gulp-if'),
      imagemin = require('gulp-imagemin'),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
  gulp
    .src(path.join(paths.root, paths.img, '/**/*.{jpg,png,gif,svg}'))
    .on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulpif(!config.dev, imagemin()))
    .pipe(gulp.dest(path.join(paths.root, paths.build, paths.img)));

  done();
};
