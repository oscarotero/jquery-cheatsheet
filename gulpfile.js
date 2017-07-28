const gulp = require('gulp');
const zume = require('zume').create();
const rsync = require('rsync');

gulp.task('clear', () => zume.clear());

gulp.task('html', done => {
    zume.html()
        .frontMatter({
              title: 'jQuery Cheat Sheet',
              description: 'jQuery cheat sheet in HTML with links to the original API documentation. Created by Oscar Otero',
              author: 'Oscar Otero - https://oscarotero.com',
              keywords: 'jQuery, javascript, cheatsheet, api, resource, web developer',
              twitter: '@misteroom'
          })
        .markdown()
        .permalink()
        .ejs()
        .dest(done);
});

gulp.task('css', done => {
    zume.css()
        .stylecow()
        .dest(done);
});

gulp.task('js', done => {
    zume.js()
        .webpack()
        .dest(done);
});

gulp.task('img', done => {
    zume.img()
        .dest(done);
});

gulp.task('files', done => {
    zume.files({ pattern: 'files/**' })
        .dest(done);
});

gulp.task('deploy', ['default'], done => {
    const deploy = new rsync()
        .shell('ssh')
        .source(zume.dest('**'))
        .recursive()
        .destination('oscarotero.com:~/www/jquery');

    deploy.execute(error => {
        if (error) {
            console.error(error);
        }

        done();
    });
});

gulp.task('server', ['default'], () => zume.serve());
gulp.task('default', ['clear', 'files', 'html', 'css', 'js', 'img']);
