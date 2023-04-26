import { InjectionToken } from '@angular/core';

import { NotifierConfig, NotifierOptions } from './models/notifier-config.model';
import { NotifierOptionsSingleton } from './notifier.options';

/**
 * Injection Token for notifier options
 */
export const NotifierOptionsToken: InjectionToken<NotifierOptions> = new InjectionToken<NotifierOptions>(
  '[angular-notifier] Notifier Options',
  {
    providedIn: 'root',
    factory() {
      return NotifierOptionsSingleton.Instance.options;
    },
  },
);

/**
 * Injection Token for notifier configuration
 */
export const NotifierConfigToken: InjectionToken<NotifierConfig> = new InjectionToken<NotifierConfig>(
  '[anuglar-notifier] Notifier Config',
  {
    providedIn: 'root',
    factory() {
      return new NotifierConfig(NotifierOptionsSingleton.Instance.options);
    },
  },
);
