// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import Ember from 'ember';
import elevio from 'elevio';

const {
  typeOf,
  isPresent,
  isEmpty,
  merge,
  Service,
  deprecate,
  computed,
  get,
  Logger
} = Ember;

String.prototype.toSnakeCase = function() {
  return this.replace(/([A-Z])/g, function(string) {
    return `_${string.toLowerCase()}`;
  });
};

export default Service.extend({
  _elevio: computed(function() {
    return elevio || {};
  }),
  /**
   * Sets the user information and traits on the elevio library.
   * See: https://elev.io/api#user-info
   *
   * See: https://elev.io/api#change-user
   *
   * @public
   * @method changeUser
   * @param {Object} userInfo
   */
  changeUser(userInfo = {}) {
    if (isPresent(userInfo.email) && isEmpty(userInfo.userHash)) {
      Logger.error(
        'When passing in an email to elevio you must also pass in the userHash. ' +
        'See: https://elev.io/api#user-hash');
    }

    let user = {};
    for (let key of Object.keys(userInfo)) {
      user[key.toSnakeCase()] = userInfo[key];
    }

    // Only call change user if the elevio library has been loaded.
    if (typeOf(get(this, '_elevio').changeUser) === 'function') {
      get(this, '_elevio').changeUser(user);
    } else {
      get(this, '_elevio').user = user;
    }
  },

  /**
   * Sets the user information and traits on the elevio library.
   * See: https://elev.io/api#user-info
   *
   * Note: this also calls elevio's changeUser method.
   * See: https://elev.io/api#change-user
   *
   * @public
   * @method identify
   * @param {Object} userInfo
   * @param {Object} traits
   *
   */
  identify(userInfo = {}, traits = {}) {
    deprecate('The elevio.identify function is being deprecated please use elevio.changeUser instead', false, {
      id: 'ember-elevio.identify',
      until: '1.0.0'
    });

    userInfo.traits = traits;
    this.changeUser(userInfo);
  },

  /**
   * Calls logoutUser on the elevio library.
   * See: https://elev.io/api#change-user
   *
   * @public
   * @method logoutUser
   */
  logoutUser() {
    // Only call change user if the elevio library has been loaded.
    this._callIfElevioIsLoaded('logoutUser');
  },

  /**
   * Calls logoutUser on the elevio library.
   * See: https://elev.io/api#change-user
   *
   * @public
   * @method logout
   */
  logout() {
    deprecate('The elevio.logout function is being deprecated please use elevio.logoutUser instead', false, {
      id: 'ember-elevio.logout',
      until: '1.0.0'
    });

    this.logoutUser();
  },

  /**
   * Overrides translations on the elevio library.
   * See: https://elev.io/api#keywords
   *
   * @public
   * @method setTranslations
   * @param {Object} translations.
   */
  setTranslations(translations = {}) {
    get(this, '_elevio').translations = merge(get(this, '_elevio').translations || {}, translations);
  },

  /**
   * Overrides keywords for a given page on the elevio library.
   * See: https://elev.io/api#keywords
   *
   * @public
   * @method setKeywords
   * @param {String} keywords, a one or more keywords to set.
   */
  setKeywords(keywords = []) {
    keywords = Array.isArray(keywords) ? keywords : [keywords];
    get(this, '_elevio').keywords = keywords;
  },

  /**
   * Calls set language on the elevio library.
   * See: https://elev.io/api#lang
   *
   * @public
   * @method setLanguage
   */
  setLanguage(language = 'en') {
    get(this, '_elevio').lang = language;
  },

  /**
   * Calls disable module on the elevio library.
   * See: https://elev.io/api#disable-module
   *
   * @public
   * @method disableModules
   * @param {String} modules, a one or more module names to disable.
   */
  disableModules(modules = []) {
    modules = Array.isArray(modules) ? modules : [modules];
    this._callIfElevioIsLoaded('disableModules', modules);
  },

  /**
   * Calls disable module on the elevio library.
   * See: https://elev.io/api#disable-module
   *
   * @public
   * @method disableModule
   * @param {String} module, a one or more module names to disable.
   */
  disableModule(module) {
    deprecate('The elevio.disableModule function is being deprecated please use elevio.disableModules instead', false, {
      id: 'ember-elevio.disableModule',
      until: '1.0.0'
    });

    this.disableModules(module);
  },

  /**
   * Calls enable module on the elevio library.
   * See: https://elev.io/api#enable-module
   *
   * @public
   * @method enableModules
   * @param {String} modules, a one or more module names to enable.
   */
  enableModules(modules = []) {
    modules = Array.isArray(modules) ? modules : [modules];
    this._callIfElevioIsLoaded('enableModules', modules);
  },

  /**
   * Opens an article by its id.
   * See: https://elev.io/api#open-module
   *
   * @public
   * @method openArticle
   * @param {String} articleId
   */
  openArticle(articleId = '') {
    this._callIfElevioIsLoaded('openArticle', articleId);
  },

  /**
   * Opens an module by its name or id.
   * See: https://elev.io/api#open-module
   *
   * @public
   * @method openModule
   * @param {String} moduleName
   */
  openModule(moduleName = '') {
    this._callIfElevioIsLoaded('openModule', moduleName);
  },

  /**
   * Sets push in to true on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method enablePushin
   */
  enablePushin() {
    get(this, '_elevio').pushin = 'true';
  },

  /**
   * Sets push in to true on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method enableMargin
   */
  enableMargin() {
    deprecate('The elevio.enableMargin function is being deprecated please use elevio.enablePushin instead', false, {
      id: 'ember-elevio.enableMargin',
      until: '1.0.0'
    });

    this.enablePushin();
  },

  /**
   * Sets push in to false on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method disablePushin
   */
  disablePushin() {
    get(this, '_elevio').pushin = 'false';
  },

  /**
   * Sets push in to false on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method disableMargin
   */
  disableMargin() {
    deprecate('The elevio.disableMargin function is being deprecated please use elevio.disablePushin instead', false, {
      id: 'ember-elevio.disableMargin',
      until: '1.0.0'
    });

    this.disablePushin();
  },
  _callIfElevioIsLoaded(func, args) {
    // Only call if the elevio library has been loaded.
    if (typeOf(get(this, '_elevio')[func]) === 'function') {
      get(this, '_elevio')[func](args);
    }
  }
});
