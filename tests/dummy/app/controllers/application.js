import Ember from 'ember';

const {
  Controller,
  inject: {
    service
  },
  get
} = Ember;

export default Controller.extend({
  elevio: service(),
  actions: {
    changeUser() {
      get(this, 'elevio').identify();
    }
  }
});
