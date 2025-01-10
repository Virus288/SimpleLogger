import * as enums from '../enums/index.js';
/**
 * Log passed data and save it in local files.
 */
export default class Log {
    private _counter;
    private _prefix;
    private _styleJson;
    private _logRules;
    private _context;
    private get counter();
    private set counter(value);
    private get styleJson();
    private set styleJson(value);
    private get context();
    private set context(value);
    private get prefix();
    private set prefix(value);
    /**
     * Get current date.
     * @returns Formatted date for log files.
     */
    private getDate;
    /**
     * Sets a rule for logs. If the rule returns true, the log will be shown; otherwise, it will not.
     * This is useful for adding additional rules to control logging behavior in production environments.
     * This rule will only be used to validate messages. Targets will not be validated.
     * If param used in this logger is not a string, it will be JSON.stringify. Keep this in mind, that certain params like full error objects might not work.
     * @param rule The rule to validate logs against.
     * @param target The log type to which this rule should be assigned.
     */
    setLogRule(rule: (log: string) => boolean, target: enums.ELogTypes): void;
    /**
     * Set prefix for logs location. Useful if you want to group all logs from 1 project into 1 location.
     * @param prefix Prefix to use.
     */
    setPrefix(prefix: string): void;
    /**
     * Add spaces to json stringify.
     * Setting this to false will simply stringify logs in files without formatting them to more readable state.
     * This is usefull, for when you have custom gui for logs like gcp. This will make logs more readable.
     * Default val: true.
     * @param val Boolean marking if json should include spaces.
     */
    formatJson(val: boolean): void;
    /**
     * Create context for logs.
     * Each element in context object will be mapped. Repeating keys will be overwritten. Context can be called multiple times.
     * Context will be added at the end of each log. This is usefull to group all logs with related target.
     * @param context Context to use.
     */
    createContext(context: Record<string, unknown>): void;
    private get logRules();
    /**
     * Log new error.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    error(target: string, ...messages: unknown[]): void;
    /**
     * Log new warning.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    warn(target: string, ...messages: unknown[]): void;
    /**
     * Log new log.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    log(target: string, ...messages: unknown[]): void;
    /**
     * Log new debug.
     * This log will not show up, when NODE_ENV is set to production.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    debug(target: string, ...messages: unknown[]): void;
    /**
     * Start counting time.
     * To end time counting, run `log.endtime` with the same target.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    time(target: string, ...messages: unknown[]): void;
    /**
     * End counting time.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    endTime(target: string, ...messages: unknown[]): void;
    /**
     * Trace selected data and log related params.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    trace(target: string, ...messages: unknown[]): void;
    /**
     * Console.log data from log and push it to function, which saves it.
     * @param color Chalks function, which colours logs.
     * @param type Category of log.
     * @param message Messages to save.
     */
    private buildLog;
}
