import Ember from 'ember';
import ElevioEventsMixin from 'ember-elevio/mixins/elevio-events';
import {
  module,
  test
} from 'qunit';

const {
  Object: EmberObject
} = Ember;

module('Unit | Mixin | elevio events');

// Replace this with your real tests.
test('it works', function(assert) {
  let ElevioEventsObject = EmberObject.extend(ElevioEventsMixin, {
    _on() {
    }
  });

  let subject = ElevioEventsObject.create();
  assert.ok(subject);
});
