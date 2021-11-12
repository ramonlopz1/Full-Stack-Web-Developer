const http = require('http')

http.createServer((req, res) => {
    res.write('Testando')
    res.end()
}).listen(8080)