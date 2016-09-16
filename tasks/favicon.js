const gulp     = require('gulp'),
      favicon  = require('gulp-real-favicon'),
      url      = require('url'),
      path     = require('path'),
      fs       = require('fs'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
  config.favicon.dest = path.join(paths.root, paths.build);
  config.favicon.iconsPath = url.parse(config.url || '/').pathname;
  config.favicon.markupFile = path.join(paths.root, 'faviconData.json');
  config.favicon.masterPicture = path.join(paths.root, paths.src, config.favicon.masterPicture);

  favicon.generateFavicon(config.favicon, function () {
    const data = JSON.parse(fs.readFileSync(config.favicon.markupFile));

    gulp.src(path.join(config.favicon.dest, '**/*.html'))
      .on('error', function (error) {
          console.error(error);
          this.emit('end');
      })
      .pipe(favicon.injectFaviconMarkups(data.favicon.html_code))
      .pipe(gulp.dest(config.favicon.dest));

    done();
  });
};
