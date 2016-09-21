import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('elevio-inline', 'Integration | Component | elevio inline', {
  integration: true
});

test('it renders an inline element with the correct data attributes set', function(assert) {
  assert.expect(2);
  this.render(hbs`{{elevio-inline inline="1" text="foo"}}`);

  assert.ok(this.$('span[data-elevio-inline=1]'));
  assert.equal(this.$('span[data-elevio-inline=1]').text().trim(), 'foo');
});

test('it renders an block element with the correct data attributes set', function(assert) {
  this.render(hbs`
    {{#elevio-inline inline="1"}}
      foo
    {{/elevio-inline}}
  `);
  assert.ok(this.$('span[data-elevio-inline=1]'));
  assert.equal(this.$('span[data-elevio-inline=1]').text().trim(), 'foo');
});
