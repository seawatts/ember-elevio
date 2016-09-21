// jscs:disable
/* globals define */
String.prototype.toSnakeCase = function() {
  return this.replace(/([A-Z])/g, function(string) {
    return '_' + string.toLowerCase();
  });
};

(function() {
  'use strict';
  var _elev = window._elev = {};

  function _setup(config) {
    if (!config.enabled) {
      return;
    }

    var i, e;
    i = document.createElement("script"), i.type = 'text/javascript';
    i.async = 1, i.src = "https://static.elev.io/js/v3.js", e =
      document.getElementsByTagName("script")[0], e.parentNode.insertBefore(i, e);

    if (!config.accountId) {
      throw new Error('ENV.elevio.accountId must be defined in config/environment.js');
    }

    // elevio uses snake case for all their keys.
    // All the config for this addon uses camelCase
    for (var key in config) {
      if (config.hasOwnProperty(key)) {
        _elev[key.toSnakeCase()] = config[key];
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
