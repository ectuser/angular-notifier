import { NotifierOptions } from './models/notifier-config.model';

export class NotifierOptionsSingleton {
  private static _instance: NotifierOptionsSingleton;

  public options: NotifierOptions = {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
