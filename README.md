# ember-elevio

[![Build Status](https://travis-ci.org/seawatts/ember-elevio.svg?branch=master)](https://travis-ci.org/seawatts/ember-elevio)
[![Ember Observer Score](https://emberobserver.com/badges/ember-elevio.svg)](https://emberobserver.com/addons/ember-elevio)
[![npm version](https://badge.fury.io/js/ember-elevio.svg)](https://badge.fury.io/js/ember-elevio)

[Elevio](http://elev.io) for Ember.js apps. 

This README outlines the details of collaborating on this Ember addon.


## Setup

**Install this addon with ember-cli** `ember install ember-elevio`

The elevio widget should appear once the app has initialized.

## Global Configuration

**In your `config/environment.js` file, you must provide your `accountId` all other options are optional**

**Your account id can be found on [elev.io](https://app.elev.io/installation) in the `Installation Code` section**

```js
// config/environment.js
module.exports = function(environment) {
  var ENV = {
    elevio: {
      accountId: '1234',
      theme: 'dark', // or 'light'
      side: 'left', // or 'right'
      dockedPosition: 'wall', // or 'floor' or 'button'
      tabTeaser: 'Need a hand?',
      mainColor: '#000000', // or 'black' or 'rgb(0, 0, 0)'
      lang: 'en',
      pushin: 'true', // or 'false
      translations: {
        general: {
          search: 'Find'
        },
        modules: {
          articles: {
            related_articles: 'These articles might help'
          }
        }
      }
    },
    disabledModules: [123, 321]
  }
  
  return ENV;
};
```

## Using the service
```js
import Ember from 'ember';

const {
  Component,
  inject: {
    service
  }
} = Ember;

export default Component.extend({
  elevio: service(),
  actions: {
    changeUser() {
      get(this, 'elevio').changeUser({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phoneNumber: '555-555-555', // used by some of the live chat clients
        userHash: '98aad46fd8124d2f8096fdfd2f56951850623403f683a6d85f795f96d3439b7d',
        groups: 'gold',
        traits: {
          Plan: 'Gold',
          'Monthly Spend': '$99'
        }
      });
    },
    logout() {
      get(this, 'elevio').logoutUser();
    }
  }
});
```

### Available functions
* changeUser(userInfo)
* logoutUser()
* setTranslations(translations)
* setKeywords(keywords)
* setLanguage(language)
* disableModules(modules)
* enableModules(modules)
* openArticle(articleId)
* openModule(moduleIdOrName)
* enablePushin()
* disablePushin()
* on(eventName, callback)
 
## Using the mixin

```js
import Ember from 'ember';
import ElevioEvents from 'ember-elevio/mixins/elevio-events'

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend(ElevioEvents, {
  elevio: service(),
  actions: {
    afterElevioLoaded() {
      // what you'd like to do after elevio has loaded, e.g.,
      get(this, 'elevio').openModule('articles');
    }
  }
});
```

## Show Articles
**Inline component**
```hbs
{{elevio-article article="10" text="My article"}}
```

**Block component** 
```hbs
{{#elevio-article article="10"}}
  <button>My Article</button>
{{/elevio-article}}
```

## Show Inline Tips 

**Inline component**
```hbs
{{elevio-inline inline="270" text="My inline tip"}}
```

**Block component** 
```hbs
{{#elevio-inline inline="270"}}
  <button>My inline tip</button>
{{/elevio-inline}}
```

## Show Modules
**Inline component - Module ID**
```hbs
{{elevio-module module="270" text="Support"}}
```

**Inline component - Module Name**
```hbs
{{elevio-module module="support" text="Support"}}
```

**Block component**
```hbs
{{#elevio-module module="270"}}
  <button>My module</button>
{{/elevio-module}}
```

# Contributing 

## Installation

* `git clone <repository-url>` this repository
* `cd ember-elevio`
* `npm install`
* `bower install`
 
## Running
* Set the environment variable ELEVIO_ACCOUNT_ID={Your account id}
* Your account id can be found on [elev.io](https://app.elev.io/installation) in the `Installation Code` section
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
