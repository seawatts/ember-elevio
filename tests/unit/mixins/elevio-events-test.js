import Ember from 'ember';
import ElevioEventsMixin from 'ember-elevio/mixins/elevio-events';
import {
  module,
  test
} from 'qunit';

const {
  Object: EmberObject,
  get
} = Ember;

module('Unit | Mixin | elevio events');

test('it sends the afterElevioLoaded action', function(assert) {
  assert.expect(1);

  let ElevioEventsObject = EmberObject.extend(ElevioEventsMixin, {
    elevio: {
      events: {}
    },
    afterElevioLoaded() {
      assert.ok(true);
    }
  });

  let subject = ElevioEventsObject.create();
  get(subject, 'elevio.events').afterLoad();
});
