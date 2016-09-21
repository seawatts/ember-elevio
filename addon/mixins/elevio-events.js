import Ember from 'ember';
import elevio from 'elevio';

const {
  Mixin
} = Ember;

export default Mixin.create({
  /**
   * Sets an event name to fire a callback in elevio
   * See: https://elev.io/api#events
   *
   * @public
   * @method on
   * @param {String} eventName (currently only supports 'afterLoad')
   * @param {Function} callback
   */
  _on(eventName, callback) {
    elevio.events[eventName] = callback;
  },
  init() {
    this._super(...arguments);

    this._on('afterLoad', () => {
      this.send('afterElevioLoaded');
    });
  }
});
