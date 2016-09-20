/*jshint node:true*/
/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    dotEnv: {
      clientAllowedKeys: [
        'ELEVIO_ACCOUNT_ID'
      ]
    }
  });

  return app.toTree();
};
