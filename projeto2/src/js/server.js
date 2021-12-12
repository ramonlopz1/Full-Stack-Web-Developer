const express = require('express')
const bodyParser = require('body-parser')
const db = require('./dataBase')
const port = 3003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    const user = db.newUser({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        genre: req.body.genre,
        bornDate: req.body.bornDate,
        usertype: req.body.usertype
    })
    
    if(user.password !== user.passwordConfirm) {
        res.send('<h1>Senhas não conferem.</h1>')
    } else {
        res.send('<h1>Usuário Cadastrado</h1>')
    }

    console.log(req.body)
})

app.get('/users', (req, res) => {
    res.send(db.getUsers())
})

app.get('/users/:id', (req, res) => {
    res.send(db.getUserById(req.params.id))
})

app.delete('/users/:id', (req, res) => {
    res.send(db.deleteUserById(req.params.id))
})


app.listen(port, () => {
    console.log('Server Connected')
})