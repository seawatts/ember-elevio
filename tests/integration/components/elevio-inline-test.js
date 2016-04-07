import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('elevio-inline', 'Integration | Component | elevio inline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{elevio-inline}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#elevio-inline}}
      template block text
    {{/elevio-inline}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
