const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>Parabéns usuário incluído</h1>')
})

app.post('/usuarios/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns usuário alterado</h1>')
})

app.listen(3003, () => {
    console.log('Servidor Conectado')
}) 