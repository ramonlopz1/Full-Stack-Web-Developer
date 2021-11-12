const http = require('http')
http.createServer((req, res) => {
    res.write('Oi')
    res.end()
}).listen(8080)