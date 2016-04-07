/* jshint node: true */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
    }
  };

  if (environment === 'development') {

    ENV.elevio = {
      enabled: true,
      accountId: process.env.ELEVIO_ACCOUNT_ID,
      theme: 'dark',
      side: 'right',
      dockedPosition: 'floor',
      tabTeaser: 'Hi ember app',
      mainColor: 'black'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
