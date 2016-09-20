import Ember from 'ember';
import EmberElevioInitializer from 'dummy/initializers/ember-elevio';
import { module, test } from 'qunit';

const {
  Application,
  run
} = Ember;

let application;
let mockConfig = {
  elevio: {
    accountId: '1'
  }
};

module('Unit | Initializer | ember elevio', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.register('config:environment', mockConfig, { instantiate: false });
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberElevioInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
