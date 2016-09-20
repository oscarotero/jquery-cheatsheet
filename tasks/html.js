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
 * HELPERS
 */
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

/**
 * EXPORTS
 */
module.exports = function (done) {
    const publicPath = url.parse(config.url || '/').pathname;

    handlebars.registerHelper('url', function (file) {
        return path.join(publicPath, file);
    });

    handlebars.registerHelper('js', function (file) {
        return path.join(publicPath, paths.js, file);
    });

    handlebars.registerHelper('css', function (file) {
        return path.join(publicPath, paths.css, file);
    });

    handlebars.registerHelper('img', function (file) {
        return path.join(publicPath, paths.img, file);
    });

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
        .use(ifProd(minifier({
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

function ifProd (cb) {
    if (!config.dev) {
        return cb;
    }

    return function (files, metalsmith, done) {
        done();
    };
}