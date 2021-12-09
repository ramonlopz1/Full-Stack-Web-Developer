const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const port = 3003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
  const user = db.newUser({
    email: req.body.email,
    pass: req.body.pass,
    passConfirm: req.body.passConfirm,
    typeuser: req.body.typeuser
  })
    res.sendFile(__dirname + '/index.html');
    console.log(req.body)
})

app.get('/users', (req, res) => {
    res.send(db.getUsers())
})

app.get('/users/:id', (req, res) => {
    res.send(db.getUser(req.params.id))
})

app.delete('/users/:id', (req, res) => {
    const user = db.deleteUser(req.params.id)
    res.send(user)
})

app.listen(port, () => {
    console.log('Server Connceted')
}) 