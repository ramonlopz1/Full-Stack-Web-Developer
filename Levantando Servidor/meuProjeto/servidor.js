const porta = 3004
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send('produtos')
})


app.listen(porta, () => {
    console.log('Servidor Online')
})