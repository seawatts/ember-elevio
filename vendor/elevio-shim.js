// jscs:disable
/* globals define */
function toSnakeCase(string) {
  return string;
}

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

    for (var key in config) {
      if (config.hasOwnProperty(key)) {
        _elev[toSnakeCase(key)] = config[key];
      }
    }
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
