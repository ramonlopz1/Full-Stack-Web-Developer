const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') // busca pelo nome INDEX.JS

console.log(saudacao.ola)

const c = require('./pastaC') // busca o index
console.log(c.ola2)

// resposta e requisicao feita pelo browser
const http = require('http') // modulo interno do node

http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)