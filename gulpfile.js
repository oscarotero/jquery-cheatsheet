const zume = require('zume').create({
    paths: { url: 'https://oscarotero.com/jquery/'}
});
const gulp = zume.gulp();
const rsync = require('rsync');

gulp.task('clear', () => zume.clear());

gulp.task('html', () =>
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
        .urls()
        .dest()
);

gulp.task('css', () =>
    zume.css()
        .postcss()
        .dest()
);

gulp.task('js', () =>
    zume.js()
        .webpack()
        .dest()
);

gulp.task('img', () =>
    zume.img()
        .dest()
);

gulp.task('files', () =>
    zume.files({ pattern: 'files/**' })
        .dest()
);

gulp.task('default', gulp.series('clear', 'files', 'html', 'css', 'js', 'img'));
gulp.task('server', gulp.series('default', () => zume.serve()));
gulp.task('deploy', gulp.series('default', (done) => {
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
}));
