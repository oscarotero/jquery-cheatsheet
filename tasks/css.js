const gulp     = require('gulp'),
      stylecow = require('gulp-stylecow'),
      rename   = require('gulp-rename'),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
  if (config.dev) {
    config.stylecow.code = 'normal';
    config.stylecow.cssErrors = true;
  } else {
    config.stylecow.code = 'minify';
  }

  config.stylecow.files.forEach(function (file) {
    gulp
      .src(path.join(paths.root, paths.css, file.input))
      .pipe(stylecow(config.stylecow))
      .on('error', function (error) {
          console.log(error.toString());
          this.emit('end');
      })
      .pipe(rename(file.output))
      .pipe(gulp.dest(path.join(paths.root, paths.build, paths.css)));
  });

  done();
};
