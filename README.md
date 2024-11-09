# SimpleLogger

This project is simple logger for node.js. It utilizes winston under the hood

TLDR;
1. [Use this package](#1-use-package)
2. [Work on this project](#1-work-on-this-project)

## 1. Use this package

### General introduction

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
```
[2024-11-08T18:05:03.311Z] info: I am doing something
```

Notice that winston does not save the 'target', but only messages related to it.

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
    if(icandomath > 2) log.warn('numner', 'number is above 2. this can break in the future!')
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

Debug is a debugging log, which is disabled in console and files, while your application is in production mode ( based on NODE_ENV ). This log is intended to show additional debugging data in development / tests

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

Decorators are marked for async and sync functions, because I am unable to properly type those.

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
@Log.decorateSyncError('This function should not be run!')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async error
```ts
@Log.decorateError('This function should not run!')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync warn
```ts
@Log.decorateSyncWarn('This function should not be run!')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async warn
```ts
@Log.decorateWarn('This function should not run!')
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
@Log.decorateSyncDebug('I am debugging here')
function doSomething() {
    const iCanDoMath = 1+1
    return iCanDoMath
}
```

- Async debug
```ts
@Log.decorateDebug('I am debugging here')
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

- Async debug time
```ts
@Log.decorateDebugTime('Just finished doing something. This will not show up in production')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

- Sync debug time
```ts
@Log.decorateDebugSyncTime('Just finished doing something. This will not show up in production')
async function doSomething() {
    return new Promise(resolve => {
        resolve(2)
    })
}
```

## 2. Work on this project

### 2.1 How to start

#### Install dependencies

```shell
npm install / yarn
```

#### Prepare environment

### 2.2. How to build

```shell
npm run build / yarn build
```

If you even encounter strange build behavior, tsconfig is set to create build with cache. Set option `incremental` in tsConfig to false. In addition to that, remove `tsconfig.tsbuildinfo`, which contains cached information about build

After compiling this code, you can also run 

```shell
npm run build:common / yarn build:common
```

Above command will transpile compiled code into commonJS files, which will work in non-esm projects 

### 2.3. Useful information

#### 2.3.1 Logs folder, where every log from this application is stored. You can change it in `src/tools/logger/logger.ts`

##### Linux

```text
~/.cache/"package.json -> productName"/logs
```

##### Windows

```text
~/AppData/Roaming/"package.json -> productName"/logs
```