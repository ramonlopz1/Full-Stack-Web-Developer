const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
const path = require('path')
const port = 9000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../../public')))

/**
 * app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
 */

app.post('/newreservation', (req, res) => {
    const reservation = db.newReservation({
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        adults: req.body.adults,
        children: req.body.children
    })
    
    console.log(req.body)
    res.send(reservation)
})

app.get('/reserve/:id', (req, res) => {
    res.send(db.getReserve(req.params.id))
})

app.get('/reservations', (req, res) => {
    res.send(db.getReservations())
})

app.delete('/deletereservation/:id', (req, res) => {
    const reserve = db.deleteReserve(req.params.id)
    res.send(reserve)
})

app.listen(port, () => {
    console.log('Server Conneceted')
})
