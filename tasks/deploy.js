const gulp     = require('gulp'),
      rsync    = require('rsync'),
      path     = require('path'),
      config   = require('../config'),
      paths    = config.paths;

/**
 * EXPORTS
 */
module.exports = function (done) {
  const deploy = new rsync()
    .shell('ssh')
    .source(path.join(paths.root, paths.build, '/**'))
    .recursive()
    .destination(config.deploy);

  deploy.execute(function (error, code, cmd) {
    if (error) {
      console.error(error);
    }

    done();
  });
};
