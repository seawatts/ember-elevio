// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/* globals define */
(function() {
  'use strict';
  var _elev = window._elev = {};

  function _setup(config) {
    var i, e;
    i = document.createElement("script"), i.type = 'text/javascript';
    i.async = 1, i.src = "https://static.elev.io/js/v3.js", e =
      document.getElementsByTagName("script")[0], e.parentNode.insertBefore(i, e);

    if (!config.accountId) {
      throw new Error('ENV.elevio.accountId must be defined in config/environment.js');
    }

    _elev.account_id = config.accountId;
    _elev.theme = config.theme || ''; // or 'light'
    _elev.side = config.side || ''; // or 'left'
    _elev.docked_position = config.dockedPosition || '';  // or 'floor' or 'button'
    _elev.tab_teaser = config.tabTeaser || '';
    _elev.mainColor = config.mainColor || ''; // or 'black', or 'rgb(0, 0, 0)'
  }

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      Object.defineProperty(values, '__esModule', {
        value: true
      });

      return values;
    });
  }

  generateModule('elevio', {
    default: _elev,
    _setup: _setup
  });
})();
