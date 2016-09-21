// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

const {
  merge
} = Ember;

moduleFor('service:elevio', 'Unit | Service | elevio', {});

test('it calls changeUser with the correct userInfo', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      changeUser(userInfo) {
        assert.deepEqual(userInfo, {
          id: 1,
          first_name: 'bob',
          car: 'foo',
          traits: {
            myTrait: 'bar'
          }
        });
      }
    }
  });

  service.changeUser({
    id: '1',
    firstName: 'bob',
    car: 'foo',
    traits: {
      myTrait: 'bar'
    }
  });
});

test('it calls logoutUser if elevio has been loaded', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      logoutUser() {
        assert.ok(true);
      }
    }
  });

  service.logoutUser();
});

test('it does nothing when calling logoutUser if elevio has not been loaded', function(assert) {
  assert.expect(1);

  let service = this.subject();
  service.logoutUser();
  assert.ok(true);
});

test('it adds new translations when calling setTranslations', function(assert) {
  assert.expect(1);

  let expectedTranslations = {
    general: {
      search: 'Find'
    }
  };

  let service = this.subject({
    _elevio: {
      translations: expectedTranslations
    }
  });

  let addedTranslations = {
    modules: {
      articles: {
        relatedArticles: 'related'
      }
    }
  };

  service.setTranslations(addedTranslations);

  assert.deepEqual(service._elevio.translations, merge(expectedTranslations, addedTranslations));
});

test('it sets keywords when calling setKeywords with a single keyword', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      keywords: []
    }
  });

  service.setKeywords('foo');
  assert.deepEqual(service._elevio.keywords, ['foo']);
});

test('it sets keywords when calling setKeywords with a multiple keywords', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      keywords: []
    }
  });

  service.setKeywords(['foo', 'bar']);
  assert.deepEqual(service._elevio.keywords, ['foo', 'bar']);
});

test('it sets the language when calling setLanguage', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      lang: 'en'
    }
  });

  service.setLanguage('fr');
  assert.equal(service._elevio.lang, 'fr');
});

test('it disables modules when calling disableModule with a single module', function(assert) {
  assert.expect(1);
  let expectedModule = 'foo';

  let service = this.subject({
    _elevio: {
      disableModules(module) {
        assert.deepEqual(module, [expectedModule]);
      }
    }
  });

  service.disableModules(expectedModule);
});

test('it disables modules when calling disableModule with multiple modules', function(assert) {
  assert.expect(1);
  let expectedModules = ['foo', 'bar'];

  let service = this.subject({
    _elevio: {
      disableModules(module) {
        assert.deepEqual(module, expectedModules);
      }
    }
  });

  service.disableModules(expectedModules);
});

test('it disables modules when calling disableModule with a single module', function(assert) {
  assert.expect(1);
  let expectedModule = 'foo';

  let service = this.subject({
    _elevio: {
      enableModules(module) {
        assert.deepEqual(module, [expectedModule]);
      }
    }
  });

  service.enableModules(expectedModule);
});

test('it disables modules when calling disableModule with multiple modules', function(assert) {
  assert.expect(1);
  let expectedModules = ['foo', 'bar'];

  let service = this.subject({
    _elevio: {
      enableModules(module) {
        assert.deepEqual(module, expectedModules);
      }
    }
  });

  service.enableModules(expectedModules);
});

test('it calls openArticle with the correct article id', function(assert) {
  assert.expect(1);
  let expectedArticleId = '1';

  let service = this.subject({
    _elevio: {
      openArticle(articleId) {
        assert.equal(articleId, expectedArticleId);
      }
    }
  });

  service.openArticle(expectedArticleId);
});

test('it calls openModule with the correct module id', function(assert) {
  assert.expect(1);
  let expectedModuleId = '1';

  let service = this.subject({
    _elevio: {
      openModule(moduleId) {
        assert.equal(moduleId, expectedModuleId);
      }
    }
  });

  service.openModule(expectedModuleId);
});

test('it sets the pushin flag to true when calling enablePushin', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      pushin: 'false'
    }
  });

  service.enablePushin();
  assert.equal(service._elevio.pushin, 'true');
});

test('it sets the pushin flag to false when calling disablePushin', function(assert) {
  assert.expect(1);

  let service = this.subject({
    _elevio: {
      pushin: 'true'
    }
  });

  service.disablePushin();
  assert.equal(service._elevio.pushin, 'false');
});
