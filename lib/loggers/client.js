import chalk from 'chalk';
import Utils from './utils.js';
import * as enums from '../enums/index.js';
/**
 * Log passed data and save it in local files.
 */
export default class Log {
    _counter = [];
    _prefix = null;
    _styleJson = true;
    _logRules = new Map();
    _context = {};
    get counter() {
        return this._counter;
    }
    set counter(val) {
        this._counter = val;
    }
    get styleJson() {
        return this._styleJson;
    }
    set styleJson(val) {
        this._styleJson = val;
    }
    get context() {
        return this._context;
    }
    set context(val) {
        this._context = val;
    }
    get prefix() {
        return this._prefix;
    }
    set prefix(prefix) {
        this._prefix = prefix;
    }
    /**
     * Get current date.
     * @returns Formatted date for log files.
     */
    getDate() {
        const date = new Date();
        const h = date.getHours().toString().length === 1 ? `0${date.getHours()}:` : `${date.getHours()}:`;
        const m = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`;
        const s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
        return `${h}${m}${s}`;
    }
    /**
     * Sets a rule for logs. If the rule returns true, the log will be shown; otherwise, it will not.
     * This is useful for adding additional rules to control logging behavior in production environments.
     * This rule will only be used to validate messages. Targets will not be validated.
     * If param used in this logger is not a string, it will be JSON.stringify. Keep this in mind, that certain params like full error objects might not work.
     * @param rule The rule to validate logs against.
     * @param target The log type to which this rule should be assigned.
     */
    setLogRule(rule, target) {
        this.logRules.set(target, rule);
    }
    /**
     * Set prefix for logs location. Useful if you want to group all logs from 1 project into 1 location.
     * @param prefix Prefix to use.
     */
    setPrefix(prefix) {
        this.prefix = prefix;
    }
    /**
     * Add spaces to json stringify.
     * Setting this to false will simply stringify logs in files without formatting them to more readable state.
     * This is useful, for when you have custom gui for logs like gcp. This will make logs more readable.
     * Default val: true.
     * @param val Boolean marking if json should include spaces.
     */
    formatJson(val) {
        this.styleJson = val;
    }
    /**
     * Create context for logs.
     * Each element in context object will be mapped. Repeating keys will be overwritten. Context can be called multiple times.
     * Context will be added at the end of each log. This is useful to group all logs with related target.
     * @param context Context to use.
     */
    createContext(context) {
        if (typeof context !== 'object') {
            this.error('Logger', 'Provided context is not object type !', context);
            return;
        }
        if (Object.keys(context).length === 0)
            return;
        Object.entries(context).forEach(([k, v]) => (this.context[k] = v));
    }
    get logRules() {
        return this._logRules;
    }
    /**
     * Log new error.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    error(target, ...messages) {
        messages.forEach((m) => {
            this.buildLog(() => chalk.red(`Log.ERROR: ${target}`), enums.ELogTypes.Error, target, m);
        });
    }
    /**
     * Log new warning.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    warn(target, ...messages) {
        messages.forEach((m) => {
            this.buildLog(() => chalk.yellow(`Log.WARN: ${target}`), enums.ELogTypes.Warn, target, m);
        });
    }
    /**
     * Log new log.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    log(target, ...messages) {
        messages.forEach((m) => {
            this.buildLog(() => chalk.blue(`Log.LOG: ${target}`), enums.ELogTypes.Log, target, m);
        });
    }
    /**
     * Log new debug.
     * This log will not show up, when NODE_ENV is set to production.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    debug(target, ...messages) {
        if (process.env.NODE_ENV === 'production')
            return;
        messages.forEach((m) => {
            this.buildLog(() => chalk.magenta(`Log.Debug: ${target}`), enums.ELogTypes.Debug, target, m);
        });
    }
    /**
     * Start counting time.
     * To end time counting, run `log.endtime` with the same target.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    time(target, ...messages) {
        this.counter.push({ target, start: Date.now() });
        messages.forEach((m) => {
            this.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, target, m);
        });
    }
    /**
     * End counting time.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    endTime(target, ...messages) {
        const localTarget = this.counter.filter((e) => e.target === target);
        if (localTarget.length === 0) {
            this.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, target, 'Could not find time start');
        }
        else {
            this.counter = this.counter.filter((e) => e.target !== localTarget[0].target && e.start !== localTarget[0].start);
            this.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, target, `Time passed: ${((Date.now() - localTarget[0].start) / 1000).toFixed(2)}s`);
        }
        messages.forEach((m) => {
            this.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, target, m);
        });
    }
    /**
     * Trace selected data and log related params.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    trace(target, ...messages) {
        console.trace(chalk.yellowBright(target));
        messages.forEach((m) => {
            this.buildLog(() => chalk.yellowBright(`Log.TRACE: ${target}`), enums.ELogTypes.Log, target, m);
        });
    }
    /**
     * Console.log data from log and push it to function, which saves it.
     * @param color Chalks function, which colours logs.
     * @param type Category of log.
     * @param header Header to use.
     * @param message Messages to save.
     */
    buildLog(color, type, header, message) {
        if (this.logRules.get(type)) {
            const shouldLog = this.logRules.get(type)(Utils.toString(message, this.styleJson));
            if (typeof shouldLog === 'boolean' && shouldLog === false)
                return;
        }
        console.info(`[${chalk.gray(this.getDate())}] ${color()} ${Utils.toString(message, this.styleJson)}`, JSON.stringify(this.context));
        let mess = Utils.toString(message, this.styleJson);
        mess = `${header} - ${mess} - ${JSON.stringify(this.context)}`;
        Utils.saveLog(mess, type, this.prefix);
    }
}
