const gulp    = require('gulp'),
      clear   = require('./tasks/clear'),
      copy    = require('./tasks/copy'),
      css     = require('./tasks/css'),
      deploy  = require('./tasks/deploy'),
      favicon = require('./tasks/favicon'),
      html    = require('./tasks/html'),
      img     = require('./tasks/img'),
      js      = require('./tasks/js'),
      serve   = require('./tasks/serve'),
      config  = require('./config');


gulp.task('dev', function (done) {
      config.dev = true;
      config.url = 'http://localhost:3000';
      done();
});

gulp.task('clear', clear);
gulp.task('copy', copy);
gulp.task('css', css);
gulp.task('html', html);
gulp.task('img', img);
gulp.task('js', js);
gulp.task('favicon', favicon);
gulp.task('serve', ['dev', 'default'], serve);
gulp.task('deploy', ['default', 'favicon'], deploy);

gulp.task('default', ['clear', 'copy', 'html', 'css', 'js', 'img']);
