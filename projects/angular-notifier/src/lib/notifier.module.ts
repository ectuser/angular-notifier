import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotifierContainerComponent } from './components/notifier-container.component';
import { NotifierNotificationComponent } from './components/notifier-notification.component';
import { NotifierProvidersModule } from './notifier-providers.module';

/**
 * Notifier module
 */
@NgModule({
  declarations: [NotifierContainerComponent, NotifierNotificationComponent],
  exports: [NotifierContainerComponent],
  imports: [CommonModule, NotifierProvidersModule],
})
export class NotifierModule {}
