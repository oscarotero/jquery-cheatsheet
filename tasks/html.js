'use strict';

const metalsmith = require('metalsmith'),
    path         = require('path'),
    changed      = require('metalsmith-changed'),
    markdown     = require('metalsmith-markdown'),
    layouts      = require('metalsmith-layouts'),
    permalinks   = require('metalsmith-permalinks'),
    minifier     = require('metalsmith-html-minifier'),
    handlebars   = require('handlebars'),
    config       = require('../config'),
    url          = require('url'),
    paths        = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done, options) {
    options = options || {};
    let publicPath = url.parse(config.url || '/').pathname;

    //Handlerbars helpers
    handlebars.registerHelper('itemOptionData', function (type) {
      var data = { 
        sort: this.text.replace(/[^\w]/, ''),
        from: this.from,
        type: type
      };

      if (this.deprecated) {
        data.deprecated = this.deprecated;
      }

      if (this.removed) {
        data.removed = this.removed;
      }

      return JSON.stringify(data);
    });

    handlebars.registerHelper('itemClass', function () {
      var className = 'v' + (this.from.replace('.', '-')) + ' ' + (this.doc.replace('.', '-'));

      if (this.deprecated) {
        className += ' v' + (this.deprecated.replace('.', '-')) + '-d';
      }

      if (this.removed) {
        className += ' v' + (this.removed.replace('.', '-')) + '-r';
      }

      return className;
    });

    handlebars.registerHelper('reverse', function (array) {
      array.reverse();
      return array;
    });

    handlebars.registerHelper('url', (file) => path.join(publicPath, file));
    handlebars.registerHelper('js', (file) => path.join(publicPath, paths.js, file));
    handlebars.registerHelper('css', (file) => path.join(publicPath, paths.css, file));
    handlebars.registerHelper('img', (file) => path.join(publicPath, paths.img, file));

    metalsmith(paths.root)
        .metadata(config.metadata || {})
        .source(path.join(paths.src, paths.data))
        .destination(paths.build)
        .clean(false)
        .use(changed({
            ctimes: path.join(paths.root, paths.tmp, 'metalsmith-changed-ctimes.json')
        }))
        .use(markdown())
        .use(permalinks({
            relative: false
        }))
        .use(layouts({
            engine: 'handlebars',
            directory: path.join(paths.src, paths.layouts),
            partials: path.join(paths.src, paths.partials),
            exposeConsolidate: function (requires) {
                requires.handlebars = handlebars;
            }
        }))
        .use(ifTrue(!config.dev, minifier({
            removeComments: false,
        })))
        .build(function(err) {
            if (err) {
                console.error(err);
            }
            if (done) {
                done();
            }
        });
};

function ifTrue (condition, cb) {
    if (condition) {
        return cb;
    }

    return function (files, metalsmith, done) {
        done();
    };
}