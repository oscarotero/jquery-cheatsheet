const gulp     = require('gulp'),
      sync     = require('browser-sync').create(),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function () {
	gulp.watch(path.join(paths.root, paths.js, '/**/*.js'), ['js']);
	gulp.watch(path.join(paths.root, paths.css, '/**/*.css'), ['css']);
	gulp.watch(path.join(paths.root, paths.img, '/**/*.{jpg,png,gif,svg}'), ['img']);
	gulp.watch([
		path.join(paths.root, paths.src, '/**/*'),
		path.join(paths.root, paths.layouts, '/**/*'),
		path.join(paths.root, paths.partials, '/**/*')
	], ['html']);

	gulp.watch(path.join(paths.root, paths.build, '/**/*'), function (event) {
		sync.reload(path.basename(event.path));
	});

	sync.init({
		server: path.join(paths.root, paths.build)
	});
};
