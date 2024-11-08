import chalk from 'chalk';
import * as enums from './enums/index.js';
import errLogger from './logger.js';

/**
 * Log passed data and save it in local files.
 */
export default class Log {
  private static _counter: { target: string; start: number }[] = [];

  private static get counter(): { target: string; start: number }[] {
    return this._counter;
  }

  private static set counter(val: { target: string; start: number }[]) {
    this._counter = val;
  }

  /**
   * Get current date.
   * @returns Formatted date for log files.
   */
  private static getDate(): string {
    const date = new Date();
    const h = date.getHours().toString().length === 1 ? `0${date.getHours()}:` : `${date.getHours()}:`;
    const m = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`;
    const s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    return `${h}${m}${s}`;
  }

  /**
   * Log new error.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static error(target: string, ...messages: unknown[]): void {
    messages.forEach((m) => {
      Log.buildLog(() => chalk.red(`Log.ERROR: ${target}`), enums.ELogTypes.Error, m);
    });
  }

  /**
   * Log new error in async decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateError<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        const result = await target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.red(`Log.ERROR: ${targetMessage}`), enums.ELogTypes.Error, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new error in sync decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncError<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        const result = target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.red(`Log.ERROR: ${targetMessage}`), enums.ELogTypes.Error, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new warning.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static warn(target: string, ...messages: unknown[]): void {
    messages.forEach((m) => {
      Log.buildLog(() => chalk.yellow(`Log.WARN: ${target}`), enums.ELogTypes.Warn, m);
    });
  }

  /**
   * Log new warning in async decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateWarn<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        const result = await target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.yellow(`Log.WARN: ${targetMessage}`), enums.ELogTypes.Warn, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new warning in sync decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncWarn<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        const result = target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.yellow(`Log.WARN: ${targetMessage}`), enums.ELogTypes.Warn, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new log.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static log(target: string, ...messages: unknown[]): void {
    messages.forEach((m) => {
      Log.buildLog(() => chalk.blue(`Log.LOG: ${target}`), enums.ELogTypes.Log, m);
    });
  }

  /**
   * Log new log in async decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateLog<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        const result = await target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.blue(`Log.LOG: ${targetMessage}`), enums.ELogTypes.Log, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new log in sync decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncLog<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        const result = target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.blue(`Log.LOG: ${targetMessage}`), enums.ELogTypes.Log, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new debug.
   * This log will not show up, when NODE_ENV is set to production.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static debug(target: string, ...messages: unknown[]): void {
    if (process.env.NODE_ENV === 'production') return;
    messages.forEach((m) => {
      Log.buildLog(() => chalk.magenta(`Log.Debug: ${target}`), enums.ELogTypes.Debug, m);
    });
  }

  /**
   * Log new log in async decorator.
   * This log will not show up, when NODE_ENV is set to production.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateDebug<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        if (process.env.NODE_ENV === 'production') return target.apply(this, args);

        const result = await target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.magenta(`Log.Debug: ${targetMessage}`), enums.ELogTypes.Debug, m);
        });
        return result;
      };
    };
  }

  /**
   * Log new log in sync decorator.
   * This log will not show up, when NODE_ENV is set to production.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncDebug<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        if (process.env.NODE_ENV === 'production') return target.apply(this, args);

        const result = target.apply(this, args);

        messages.forEach((m) => {
          Log.buildLog(() => chalk.magenta(`Log.Debug: ${targetMessage}`), enums.ELogTypes.Debug, m);
        });
        return result;
      };
    };
  }

  /**
   * Start counting time.
   * To end time counting, run `log.endtime` with the same target.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static time(target: string, ...messages: unknown[]): void {
    Log.counter.push({ target, start: Date.now() });
    messages.forEach((m) => {
      Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, m);
    });
  }

  /**
   * End counting time.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static endTime(target: string, ...messages: unknown[]): void {
    const localTarget = Log.counter.filter((e) => e.target === target);
    if (localTarget.length === 0) {
      Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, 'Could not find time start');
    } else {
      Log.counter = Log.counter.filter((e) => e.target !== localTarget[0]!.target && e.start !== localTarget[0]!.start);
      Log.buildLog(
        () => chalk.bgBlue(`Log.TIME: ${target}`),
        enums.ELogTypes.Log,
        `Time passed: ${((Date.now() - localTarget[0]!.start) / 1000).toFixed(2)}s`,
      );
    }

    messages.forEach((m) => {
      Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), enums.ELogTypes.Log, m);
    });
  }

  /**
   * Decorator, which will counts how much time async function took to run.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        const start = Date.now();

        messages.forEach((m) => {
          Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = await target.apply(this, args);

        Log.buildLog(
          () => chalk.bgBlue(`Log.TIME: ${targetMessage}`),
          enums.ELogTypes.Log,
          `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`,
        );
        return result;
      };
    };
  }

  /**
   * Decorator, which will counts how much time async function took to run.
   * This log will not show up, when NODE_ENV is set to production.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateDebugTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        if (process.env.NODE_ENV === 'production') return target.apply(this, args);

        const start = Date.now();

        messages.forEach((m) => {
          Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = await target.apply(this, args);

        Log.buildLog(
          () => chalk.bgBlue(`Log.TIME: ${targetMessage}`),
          enums.ELogTypes.Log,
          `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`,
        );
        return result;
      };
    };
  }

  /**
   * Decorator, which will counts how much time sync function took to run.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        const start = Date.now();

        messages.forEach((m) => {
          Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = target.apply(this, args);

        Log.buildLog(
          () => chalk.bgBlue(`Log.TIME: ${targetMessage}`),
          enums.ELogTypes.Log,
          `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`,
        );
        return result;
      };
    };
  }

  /**
   * Decorator, which will counts how much time sync function took to run.
   * This log will not show up, when NODE_ENV is set to production.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateDebugSyncTime<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        if (process.env.NODE_ENV === 'production') return target.apply(this, args);

        const start = Date.now();

        messages.forEach((m) => {
          Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = target.apply(this, args);

        Log.buildLog(
          () => chalk.bgBlue(`Log.TIME: ${targetMessage}`),
          enums.ELogTypes.Log,
          `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`,
        );
        return result;
      };
    };
  }

  /**
   * Trace selected data and log related params.
   * @param target Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   */
  static trace(target: string, ...messages: unknown[]): void {
    console.trace(chalk.yellowBright(target));
    messages.forEach((m) => {
      Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${target}`), enums.ELogTypes.Log, m);
    });
  }

  /**
   * Trace selected data and log related params in async decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateTrace<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return | Promise<Return>,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>,
    ): (this: This, ...args: Args) => Promise<Return> {
      return async function (this: This, ...args: Args): Promise<Return> {
        console.trace(chalk.yellowBright(target));
        messages.forEach((m) => {
          Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = await target.apply(this, args);
        return result;
      };
    };
  }

  /**
   * Trace selected data and log related params in sync decorator.
   * @param targetMessage Log target used as prefix for log.
   * @param {...unknown} messages All messages that you want to log.
   * @returns Decorator data.
   */
  static decorateSyncTrace<This, Args extends unknown[], Return>(targetMessage: string, ...messages: unknown[]) {
    return function (
      target: (this: This, ...args: Args) => Return,
      _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
    ): (this: This, ...args: Args) => Return {
      return function (this: This, ...args: Args): Return {
        console.trace(chalk.yellowBright(target));
        messages.forEach((m) => {
          Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${targetMessage}`), enums.ELogTypes.Log, m);
        });

        const result = target.apply(this, args);
        return result;
      };
    };
  }

  /**
   * Console.log data from log and push it to function, which saves it.
   * @param color Chalks function, which colours logs.
   * @param type Category of log.
   * @param message Messages to save.
   */
  private static buildLog(color: () => string, type: enums.ELogTypes, message: unknown): void {
    console.info(`[${chalk.gray(Log.getDate())}] ${color()} ${Log.toString(message)}`);
    Log.saveLog(message, type);
  }

  /**
   * Save log in files.
   * @param message Message to save.
   * @param type Category of log.
   */
  private static saveLog(message: unknown, type: enums.ELogTypes): void {
    const mess = typeof message !== 'string' ? JSON.stringify(message, null, 2) : message;

    switch (type) {
      case enums.ELogTypes.Warn:
        errLogger.warn(mess);
        return;
      case enums.ELogTypes.Error:
        errLogger.error(mess);
        return;
      case enums.ELogTypes.Debug:
        errLogger.debug(mess);
        return;
      case enums.ELogTypes.Log:
      default:
        errLogger.info(mess);
    }
  }

  /**
   * Stringify log.
   * @param message Stringify message to save it.
   * @returns Stringified log.
   */
  private static toString(message: unknown): string {
    return typeof message !== 'string' ? JSON.stringify(message, null, 2) : message;
  }
}
