/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    babel: {
      optional: ['es6.spec.symbols'],
      includePolyfill: true
    },
    dotEnv: {
      clientAllowedKeys: [
        'ELEVIO_ACCOUNT_ID'
      ]
    }
  });

  return app.toTree();
};
