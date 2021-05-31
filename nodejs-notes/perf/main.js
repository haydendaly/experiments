process.env.UV_THREADPOOL_SIZE = 4
const http = require('http')
const bcrypt = require('bcrypt')

// Default = 3360 req/sec
// UV_THREADPOOL_SIZE = 1 | 980 req/sec
// UV_THREADPOOL_SIZE = 2 | 1890 req/sec
// UV_THREADPOOL_SIZE = 4 | 3300 req/sec

http.createServer((req, res) => {
    bcrypt.hash('hello world', 2).then((hash) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(hash)
        res.end()
    })
}).listen(1337)
