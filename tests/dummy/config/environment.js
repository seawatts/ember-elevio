/* jshint node: true */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    APP: {
    },
    elevio: {
      accountId: process.env.ELEVIO_ACCOUNT_ID
    }
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
