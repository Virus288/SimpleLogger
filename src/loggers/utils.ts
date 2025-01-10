import * as enums from '../enums/index.js';
import errLogger from '../logger.js';

export default class LoggerUtils {
  /**
   * Save log in files.
   * @param message Message to save.
   * @param type Category of log.
   * @param prefix Prefix for logs location.
   */
  static saveLog(message: unknown, type: enums.ELogTypes, prefix: string | null): void {
    const logger = errLogger(prefix);

    switch (type) {
      case enums.ELogTypes.Warn:
        logger.warn(message);
        return;
      case enums.ELogTypes.Error:
        logger.error(message);
        return;
      case enums.ELogTypes.Debug:
        logger.debug(message);
        return;
      case enums.ELogTypes.Log:
      default:
        logger.info(message);
    }
  }

  /**
   * Stringify log.
   * @param message Stringify message to save it.
   * @param styleJson Boolean marking if json should be styled or not.
   * @returns Stringified log.
   */
  static toString(message: unknown, styleJson: boolean): string {
    if (styleJson) return typeof message !== 'string' ? JSON.stringify(message, null, 2) : message;
    return typeof message !== 'string' ? JSON.stringify(message) : message;
  }
}
