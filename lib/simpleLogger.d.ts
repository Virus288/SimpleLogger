/**
 * Log passed data and save it in local files.
 */
export default class Log {
    private static _counter;
    private static get counter();
    private static set counter(value);
    /**
     * Get current date.
     * @returns Formatted date for log files.
     */
    private static getDate;
    /**
     * Log new error.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static error(target: string, ...messages: unknown[]): void;
    /**
     * Log new error in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateError<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Log new error in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncError<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Log new warning.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static warn(target: string, ...messages: unknown[]): void;
    /**
     * Log new warning in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateWarn<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Log new warning in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncWarn<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Log new log.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static log(target: string, ...messages: unknown[]): void;
    /**
     * Log new log in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateLog<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Log new log in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncLog<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Log new debug.
     * This log will not show up, when NODE_ENV is set to production.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static debug(target: string, ...messages: unknown[]): void;
    /**
     * Log new log in async decorator.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebug<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Log new log in sync decorator.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncDebug<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Start counting time.
     * To end time counting, run `log.endtime` with the same target.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static time(target: string, ...messages: unknown[]): void;
    /**
     * End counting time.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static endTime(target: string, ...messages: unknown[]): void;
    /**
     * Decorator, which will counts how much time async function took to run.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Decorator, which will counts how much time async function took to run.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebugTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Decorator, which will counts how much time sync function took to run.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Decorator, which will counts how much time sync function took to run.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebugSyncTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Trace selected data and log related params.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static trace(target: string, ...messages: unknown[]): void;
    /**
     * Trace selected data and log related params in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateTrace<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return | Promise<Return>, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>) => (this: This, ...args: Args) => Promise<Return>;
    /**
     * Trace selected data and log related params in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncTrace<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]): (target: (this: This, ...args: Args) => Return, _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) => (this: This, ...args: Args) => Return;
    /**
     * Console.log data from log and push it to function, which saves it.
     * @param color Chalks function, which colours logs.
     * @param type Category of log.
     * @param message Messages to save.
     */
    private static buildLog;
    /**
     * Save log in files.
     * @param message Message to save.
     * @param type Category of log.
     */
    private static saveLog;
    /**
     * Stringify log.
     * @param message Stringify message to save it.
     * @returns Stringified log.
     */
    private static toString;
}
