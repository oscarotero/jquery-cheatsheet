const gulp    = require('gulp'),
      css     = require('./tasks/css'),
      html    = require('./tasks/html'),
      img     = require('./tasks/img'),
      js      = require('./tasks/js'),
      favicon = require('./tasks/favicon'),
      deploy  = require('./tasks/deploy'),
      serve   = require('./tasks/serve'),
      config  = require('./config');


gulp.task('dev', function (done) {
	config.dev = true;
	config.url = 'http://localhost:3000';
	done();
});

gulp.task('css', css);
gulp.task('html', html);
gulp.task('img', img);
gulp.task('js', js);
gulp.task('favicon', favicon);
gulp.task('serve', ['dev', 'default'], serve);
gulp.task('deploy', ['default', 'favicon'], deploy);

gulp.task('default', ['html', 'css', 'js', 'img']);
