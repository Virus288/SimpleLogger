# SimpleLogger

This project is simple logger for node.js. It utilizes winston under the hood

TLDR;
1. [Use this package](#1-use-package)
2. [Work on this project](#1-work-on-this-project)

## 1. Use this package

### 1.1 General introduction

This package only supports node.js and will not work on frontend. You can modify it and exclude winston for it to work.

This app has only 1 purpose, which is to log data. Most of logs require at least 2 params, where first param is 'target' and others are messages related to it. For example

```ts
function doSomething() {
    const iCanDoMath = 1+1
    Log.log('Something', 'I am doing something')
    return iCanDoMath
}
```

Will output data in terminal like this
```log
[18:05:03] Log.LOG: Something I am doing something
```

And save it in logs using winston:
```log
[2024-11-08T18:05:03.311Z] info: Something - I am doing something
```

In addition to default logger, there is also contextLogger/clientLogger. This logger is used to log params with context. Its logs will look like this:

```log
[18:05:03] Log.LOG: Something I am doing something - { contextParam: contextParamValue }
```

And save it in logs using winston:
```log
[2024-11-08T18:05:03.311Z] info: Something - I am doing something - { "contextParam": "contextParamValue" }
```

### Log types

#### Basic

There are multiple log types. In no particular order:

- Log
```ts
function doSomething() {
    const iCanDoMath = 1+1
    Log.log('Something', 'I am doing something')
    return iCanDoMath
}
```

Log is generic log, which is used to log everything

- Error
```ts
function doSomething() {
    try {
        throw new Error("test")
    } catch (err) {
        Log.error('Something', 'We got an error!', err.message, err.stack)
    }
}
```

Error is used to mark errors. Currently pushing full error object does not log trace to files. Please make sure to log it the same way I did above

- warn
```ts
function dosomething(anothernumber) {
    const icandomath = 1+anothernumber
    if(icandomath > 2) log.warn('Number', 'Number is above 2. this can break in the future!')
    return icandomath
}
```

warn is warning log, which is used to mark data that did not throw an error, but might be incorrect, or any other type of warning

- Trace
```ts
function doSomething() {
    const iCanDoMath = 1+1
    Log.trace('Something', 'I am here')
    return iCanDoMath
}
```

Trace log is just a simple trace, which marks flow of your code.

- Debug
```ts
function doSomething() {
    Log.debug('Something', 'I am here')
    const iCanDoMath = 1+1
    Log.debug('Something', 'And now here')
    return iCanDoMath
}
```

Debug is a debugging log, which is disabled in console and files, while your application is in production mode ( based on NODE_ENV === `production` ). This log is intended to show additional debugging data in development / tests

- Time
```ts
function doSomething() {
    Log.time('Doing something', 'Just started doing something')
    const iCanDoMath = 1+1
    Log.endTime('Doing something', 'Finished doing something')
    return iCanDoMath
}
```

Time will count time between `time` and `endTime` methods. Remember, that 'target' allows function to actually start and finish counters.

#### Decorators

Decorators are marked for async and sync functions, because I am unable to properly type those. Every decorator will trigger after function is finished

There are multiple log types. In no particular order:

- Sync log
```ts
@Log.decorateSyncLog('I am logging data')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async log
```ts
@Log.decorateLog('I am logging data')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync error
```ts
@Log.decorateSyncError('Finished doSomething. This function should not run!')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async error
```ts
@Log.decorateError('Finished doSomethhing. This function should not run!')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync warn
```ts
@Log.decorateSyncWarn('Finished doSomething. This function might change in the future!')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async warn
```ts
@Log.decorateWarn('Finished doSomething. This function might change in the future!')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync trace
```ts
@Log.decorateSyncTrace('I am here')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async trace
```ts
@Log.decorateTrace('I am here')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync debug
```ts
@Log.decorateSyncDebug('Debbuging that doSomething just finished')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async debug
```ts
@Log.decorateDebug('Debbuging that doSomething just finished')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync time
```ts
@Log.decorateSyncTime('Just finished doing something')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async time
```ts
@Log.decorateTime('Just finished doing something')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync debug time
```ts
@Log.decorateDebugSyncTime('Just finished doing something. This will not show up in production')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async debug time
```ts
@Log.decorateDebugTime('Just finished doing something. This will not show up in production')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- ClientLogger/ContextLogger

This logger has to be initialized for each request / client, allowing you to "follow" user's actions.

```ts
import { ClientLog } from 'simpleLogger'

const log = new ClientLog()
log.createContext({param: val, param2: val2, param3: val2})
```

Now logging data will result with "context" being attached to each log. Example:

```ts
log.debug('Something', "I am doing something")
```

```log
[18:05:03] Log.LOG: Something I am doing something - { "param": "val", "param2": "val2", "param3": "val2" }
```

Params can be overwritten on the run. Simply add another context param with the same key as before:

```ts
log.createContext({param: val5})
```

> [!TIP]
> There is no way to overwrite nested keys. In order to do that, overwrite full parent

### 1.2 Saves logs location

All logs are saved in files.

#### On linux

```text
~/.cache/"package.json -> productName"/logs
```

#### On windows

```text
~/AppData/Roaming/"package.json -> productName"/logs
```

You can also trigger function 


```js
Log.setPrefix('test');
```

### 1.3 Prefix in saved logs

Above function will group all logs from your app under folder `test`. Example:
This app will prioritize env `APP_NAME`. If its not set, `name` in your package.json will be used as your log. Lets say that your `name` is "Authorizations" and APP_NAME is not set

- No prefix set
```
~/.cache/Authroizations/logs
```

- Prefix set to `test`
```
~/.cache/test/Authroizations/logs
```

### 1.4 Validation rules

This logger includes validation rules, which can be used to disable certain logs. 

```js
const validateLog = (log) => {
    if(log.includes('test')) return false
    return true
}

Log.setLogRule(validateLog, ELogTypes.Error)
```

Above function is a basic example of disabling all error logs, which include 'test' in message. More realistic usage can be:

```js
function doSomething() {
    Log.debug('I am doing something')

    try {
        doSomethingElse()
    } catch(err) {
        Log.error('DoSomething', `We got an error! ${err.message}, code: ${err.code}`)
    }
}

const validateLog = (log) => {
    if(/\d/.test(log)) return false
    return true
}

Log.setLogRule(validateLog, ELogTypes.Error)
```

In above example, I am using debug log, which will not show up in production, but I am also using error, which will show in production. 
Errors that I throw include additional field "code", which defines what kind of error was thrown. If I do not care to see errors thrown by me and I only want to see unexpected errors, I can disable errors logging for errors with code.
Without above rule, I would get 2 logs
```log
[2024-11-08T18:05:03.311Z] error: We got an error! Email was not provided, code: 22 
[2024-11-08T18:05:03.311Z] error: We got an error! Cannot read property of undefined, reading 'something', code:
```

With above rule:
```log
[2024-11-08T18:05:03.311Z] error: We got an error! Cannot read property of undefined, reading 'something', code:
```

## 2. Work on this project

### 2.1 How to start

#### Install dependencies

```shell
npm install / yarn
```

### 2.2. How to build

```shell
npm run build / yarn build
```

If you even encounter strange build behavior, tsconfig is set to create build with cache. Set option `incremental` in tsConfig to false. In addition to that, remove `tsconfig.tsbuildinfo`, which contains cached information about build

After compiling this code, you can also run 

```shell
npm run build:common / yarn build:common
```

Above command will transpile compiled code into commonJS files, which will work in non-esm projects. Make sure to run this after every build, unless you do not work with commonJS