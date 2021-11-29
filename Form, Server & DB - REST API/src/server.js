const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const app = express()
const port = 3003

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res, next) => {
    const usuario = db.salvarUsuario({
        nome: req.body.nome,
        senha: req.body.senha,
        tipousuario: req.body.tipousuario,
        ativo: req.body.ativo,
        genero: req.body.genero
    })
    console.log(req.body)
    res.send('<h1>Usuário Cadastrado</h1>')

})

app.listen(port, () => {
    console.log('Server Connected')
})
