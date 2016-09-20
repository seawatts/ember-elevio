/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-elevio',
  isDevelopingAddon() {
    return true;
  },
  included(app) {
    this._super.included(app);
    app.import('vendor/elevio-shim.js');
  }
};
