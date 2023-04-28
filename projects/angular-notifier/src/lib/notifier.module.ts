import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotifierContainerComponent } from './components/notifier-container.component';
import { NotifierNotificationComponent } from './components/notifier-notification.component';
import { NotifierOptions } from './models/notifier-config.model';
import { NotifierOptionsSingleton } from './notifier.options';

/**
 * Notifier module
 */
@NgModule({
  declarations: [NotifierContainerComponent, NotifierNotificationComponent],
  exports: [NotifierContainerComponent],
  imports: [CommonModule],
})
export class NotifierModule {
  /**
   * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
   *
   * @param   [options={}] - Custom notifier options
   * @returns - Notifier module with custom providers
   */
  public static withConfig(options: NotifierOptions = {}) {
    NotifierOptionsSingleton.Instance.options = options;
  }
}
