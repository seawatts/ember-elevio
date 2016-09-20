# ember-elevio

[![Build Status](https://travis-ci.org/seawatts/ember-elevio.svg?branch=master)](https://travis-ci.org/seawatts/ember-elevio)
[![Ember Observer Score](https://emberobserver.com/badges/ember-elevio.svg)](https://emberobserver.com/addons/ember-elevio)
[![npm version](https://badge.fury.io/js/ember-elevio.svg)](https://badge.fury.io/js/ember-elevio)

[Elevio](http://elev.io) for Ember.js apps. 

This README outlines the details of collaborating on this Ember addon.


## Setup

**Install this addon with ember-cli** `ember install ember-elevio`

The elevio widget should appear once the app has initialized.

## Configuration

**In your `config/environment.js` file, you must provide your `accountId` all other options are optional**

**Your account id can be found on [elev.io](https://app.elev.io/installation) in the `Installation Code` section**

```js
module.exports = function(environment) {
  ...
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
  ...
};
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
