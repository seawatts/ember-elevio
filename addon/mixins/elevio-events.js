import Ember from 'ember';
import elevio from 'elevio';

const {
  Mixin,
  get,
  computed,
  assert
} = Ember;

export default Mixin.create({
  _elevio: computed(function() {
    return elevio || {
        events: {}
      };
  }),
  /**
   * Sets an event name to fire a callback in elevio
   * See: https://elev.io/api#events
   *
   * @private
   * @method on
   * @param {String} eventName (currently only supports 'afterLoad')
   * @param {Function} callback
   */
  _on(eventName, callback) {
    get(this, 'elevio').events[eventName] = callback;
  },
  init() {
    this._super(...arguments);
    this._on('afterLoad', this.afterElevioLoaded);
  },
  afterElevioLoaded() {
    assert('Please override the afterElevioLoaded function to handle the afterLoad event', true);
  }
});
