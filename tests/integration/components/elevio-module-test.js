import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('elevio-module', 'Integration | Component | elevio module', {
  integration: true
});

test('it renders an inline element with the correct data attributes set', function(assert) {
  assert.expect(2);
  this.render(hbs`{{elevio-module module="1" text="foo"}}`);

  assert.ok(this.$('span[data-elevio-module=1]'));
  assert.equal(this.$('span[data-elevio-module=1]').text().trim(), 'foo');
});

test('it renders an block element with the correct data attributes set', function(assert) {
  this.render(hbs`
    {{#elevio-module module="1"}}
      foo
    {{/elevio-module}}
  `);
  assert.ok(this.$('span[data-elevio-module=1]'));
  assert.equal(this.$('span[data-elevio-module=1]').text().trim(), 'foo');
});
