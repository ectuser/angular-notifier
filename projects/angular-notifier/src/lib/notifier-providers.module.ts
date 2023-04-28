import { ModuleWithProviders, NgModule } from '@angular/core';

import { NotifierConfig, NotifierOptions } from './models/notifier-config.model';
import { NotifierConfigToken, NotifierOptionsToken } from './notifier.tokens';
import { NotifierService } from './services/notifier.service';
import { NotifierAnimationService } from './services/notifier-animation.service';
import { NotifierQueueService } from './services/notifier-queue.service';

/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param   options - Custom notifier options
 * @returns - Notifier configuration as result
 */
export function notifierCustomConfigFactory(options: NotifierOptions): NotifierConfig {
  return new NotifierConfig(options);
}

/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @returns - Notifier configuration as result
 */
export function notifierDefaultConfigFactory(): NotifierConfig {
  return new NotifierConfig({});
}

@NgModule({
  providers: [
    NotifierAnimationService,
    NotifierService,
    NotifierQueueService,

    // Provide the default notifier configuration if just the module is imported
    {
      provide: NotifierConfigToken,
      useFactory: notifierDefaultConfigFactory,
    },
  ],
})
export class NotifierProvidersModule {
  public static withConfig(options: NotifierOptions = {}): ModuleWithProviders<NotifierProvidersModule> {
    return {
      ngModule: NotifierProvidersModule,
      providers: [
        // Provide the options itself upfront (as we need to inject them as dependencies -- see below)
        {
          provide: NotifierOptionsToken,
          useValue: options,
        },

        // Provide a custom notifier configuration, based on the given notifier options
        {
          deps: [NotifierOptionsToken],
          provide: NotifierConfigToken,
          useFactory: notifierCustomConfigFactory,
        },
      ],
    };
  }
}