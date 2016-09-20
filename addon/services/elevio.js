// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import Ember from 'ember';
import elevio from 'elevio';

const {
  isArray,
  Service
} = Ember;

export default Service.extend({
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
    let user = {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      phone_number: userInfo.phoneNumber, // used by some of the live chat clients
      user_hash: userInfo.id,
      groups: userInfo.groups,
      traits
    };

    // Only call change user if the elevio library has been loaded.
    if (typeof elevio.changeUser === 'function') {
      elevio.changeUser(user);
    } else {
      elevio.user = user;
    }
  },

  /**
   * Calls logout on the elevio library.
   * See: https://elev.io/api#change-user
   *
   * @public
   * @method logout
   */
  logout() {
    elevio.logoutUser();
  },

  /**
   * Calls set language on the elevio library.
   * See: https://elev.io/api#lang
   *
   * @public
   * @method setLanguage
   */
  setLanguage(language) {
    elevio.lang = language;
  },

  /**
   * Calls disable module on the elevio library.
   * See: https://elev.io/api#disable-module
   *
   * @public
   * @method disableModule
   * @param {String} module, a single module name to disable.
   */
  disableModule(module) {
    if (!isArray(elevio.disabledModules)) {
      elevio.disabledModules = [module];
    }

    elevio.disabledModules.push(module);
  },

  /**
   * Opens an article by its id.
   * See: https://elev.io/api#open-module
   *
   * @public
   * @method openArticle
   * @param {String} articleId
   */
  openArticle(articleId) {
    elevio.openArticle(articleId);
  },

  /**
   * Opens an module by its name.
   * See: https://elev.io/api#open-module
   *
   * @public
   * @method openModule
   * @param {String} moduleName
   */
  openModule(moduleName) {
    elevio.openArticle(moduleName);
  },

  /**
   * Sets push in to true on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method enableMargin
   */
  enableMargin() {
    elevio.pushin = 'true';
  },

  /**
   * Sets push in to false on the elevio library.
   * See: https://elev.io/api#pushin
   *
   * @public
   * @method disableMargin
   */
  disableMargin() {
    elevio.pushin = 'false';
  }
});
