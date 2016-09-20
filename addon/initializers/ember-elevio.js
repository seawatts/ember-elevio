import { _setup } from 'elevio';

export function initialize(application) {
  if (typeof FastBoot === 'undefined') {
    let config;

    if (application.resolveRegistration) {
      config = application.resolveRegistration('config:environment');
    } else {
      config = application.registry.resolve('config:environment');
    }

    _setup(config.elevio || {});
  }
}

export default {
  name: 'ember-elevio',
  initialize
};
