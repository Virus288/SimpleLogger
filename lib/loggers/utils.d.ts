import * as enums from '../enums/index.js';
export default class LoggerUtils {
    /**
     * Save log in files.
     * @param message Message to save.
     * @param type Category of log.
     * @param prefix Prefix for logs location.
     */
    static saveLog(message: unknown, type: enums.ELogTypes, prefix: string | null): void;
    /**
     * Stringify log.
     * @param message Stringify message to save it.
     * @param styleJson Boolean marking if json should be styled or not.
     * @returns Stringified log.
     */
    static toString(message: unknown, styleJson: boolean): string;
}
