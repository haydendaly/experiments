# Node.js

## Basics

### Hello World

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
```

### V8

Based upon Chrome V8 engine for just-in-time (JIT) compilation.

### Exiting

Control-C vs. `process.exit(0)`. Status code of `0` is for successful exit code.

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
```

Signal `SIGTERM` is a POSIX intercommunication and notifies of internal events. `SIGTERM` is graceful termination while `SIGKILL` is immediate termination. This can also be sent with `process.kill(process.pid, 'SIGTERM')`.

### Environment Variables

Environment variables are on `process.env` object.

### Arguments

`node app.js joe` and `node app.js name=joe`

```js
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
```

```js
const args = process.argv.slice(2)
```

### Logging

`console.log()` works and has `console.log('My %s has %d years', 'cat', 2)` where `%s` is string, `%d` is number, `%i` is integer, and `%o` is object.

`console.clear()` clears console.

`console.count()` is helpful too.

`console.trace()` traces a function call.

```js
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
```

`console.error()` for `stderr` stream.

### Input

Takes input from `process.stdin`.

```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
```

```js
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})
```

### Modules

```js
// car.js
const car = {
  brand: 'Ford',
  model: 'Fiesta'
}

module.exports = car
```

```js
// index.js
const car = require('./car')
```

### Event Loop

Runs on a single thread. The call stack is a LIFO stack. There is a message queue and job queue meant to be executed after the current callstack.

#### `process.nextTick()`

Set callback to be called on next tick of the callstack.

#### `setImmediate()`

Will execute a piece of code asynchronously but as soon as possible.

### Timers

`setTimeout(callback, milliseconds)` and technically returns and id which can provide for this workflow:

```js
const id = setTimeout(() => {
  // should run after 2 seconds
}, 2000)

// I changed my mind
clearTimeout(id)
```

`setInterval(callback, milliseconds)` runs until told to stop. Can be told to stop with id assignment and `clearInterval()`. It's common to even call `clearInterval()` in the callback:

```js
const interval = setInterval(() => {
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval)
    return
  }
  // otherwise do things
}, 100)
```

### Asynchronous Programming

```js
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone()
```

A promise is a proxy for a value that will eventually become available. Avoid callback hell at all costs.

`async` / `await` use promises behind the scenes.

Promises have pending, rejected, and resolved states. Once it reaches resolved or rejected it is passed to the callback functions in `then` and `catch`.

You can promisfy a callback function as such:

```js
const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err))
```

`Promise.all()` can be used to synchronize different promises:


```js
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })
```

`Promise.race()` takes an array of promises and returns the first one resolved.

```js
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})
```

### Async/Await

Can simplify this:

```js
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
```

Into this:

```js
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
```

All functions prepended by async become promises.

```js
const aFunction = async () => {
  return 'test'
}

aFunction().then(alert) // This will alert 'test'
```

Async/Await ex:

```js
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}

getFirstUserData()
```

### Event Emitter

Can emit events across code:

```js
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('started')
})
```

Then when you run the below, the callback will be triggered.

```js
eventEmitter.emit('start')
```

You can also pass values:

```js
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`)
})
eventEmitter.emit('start', 1, 100)
```

There are one time listeners `once()`, removing listeners `removeListener() / off()`, and removing all listeners for an event `removeAllListeners()`.

### HTTP Requests

```js
const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
```

### Axios

```js
const axios = require('axios')

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
```

### File Descriptors

```js
const fs = require('fs')

fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd is our file descriptor
})
```

```js
const fs = require('fs')

try {
  const fd = fs.openSync('/Users/joe/test.txt', 'r')
} catch (err) {
  console.error(err)
}
```

```js
const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
})
```

#### Read

```js
const fs = require('fs')

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}
```

#### Write

```js
const fs = require('fs')

const content = 'Some content!'

try {
  const data = fs.writeFileSync('/Users/joe/test.txt', content)
  //file written successfully
} catch (err) {
  console.error(err)
}
```

#### More

All here: https://nodejs.dev/learn/the-nodejs-fs-module

### Path

`const path = require('path')` includes `dirname()`, `basename()`, and `extname()`. Also includes `join()` and `resolve()` `normalize()` can be used to simplyify a calculated path.

```js
path.normalize('/users/joe/..//test.txt') //'/users/test.txt'
```

### Folders

You can use `fs.access()` and create folder:

```js
const fs = require('fs')

const folderName = '/Users/joe/test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
```

You read a path with:

```js
const fs = require('fs')

const folderPath = '/Users/joe'

fs.readdirSync(folderPath)
```

There is also `rename()` and `renameSync()`. Also `rmdir()` and `rmdirSync()`. For more, there is `fs-extra` which is third party.

### OS

`arch()` returns the underlying arch, `cpus()` returns array of available CPUs, `endianness()` returns whether it was compiled with BE or LE, `freemem()` returns the free memory in the system, `homedir()` returns the home dir of user, `hostname()`, `loadavg()` returns the OS load average, `networkInterfaces()` returns network interfaces, `platform()` returns playform, `release()` returns OS release number, and the rest are here: https://nodejs.dev/learn/the-nodejs-os-module

### Buffers

Buffers represent array of bytes of data. Usually like an overload of data when a stream processor receives data faster than it can digest.

### Streams

Memory and time efficient. 

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
```

`pipe()` method can be used on a stream directly. There are:

* Readable: can pipe from but not into
* Writable: pipe into but not from
* Duplex: both pipe into and from
* Transform: like duplex but output is transformation of input

To create a readable stream:

```js
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.write('hey!\n')

writableStream.end()
```

#### Transforms

```js
const { Transform } = require('stream')
const TransformStream = new Transform;

TransformStream._transform = (chunk, encoding, callback) => {
  console.log(chunk.toString().toUpperCase());
  callback();
}

process.stdin.pipe(TransformStream);
```

### Errors

`throw new Error('Ran out of coffee')`

Can also create errors:

```js
class NotEnoughCoffeeError extends Error {
  //...
}
throw new NotEnoughCoffeeError()
```

### Debugging

Can run with `--inspect` flag to open websocket for debug on port 9229 but `node inspect hello.js`

### Profiling

```sh
$ NODE_ENV=production node --prof profile.js
$ curl -X GET "http://localhost:8080/newUser?username=matt&password=password"
ab -k -c 20 -n 250 "http://localhost:8080/auth?username=matt&password=password"
```

Presents output using ApacheBench (ab) of performance.

Can use this to process log files:

```sh
node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
```