const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },

    filename: function(req, file, callback) {
        callback(null, `${Date.now}_${file.originalname}`)
    }
})

const upload = nulter({storage}).single('arquivos')

app.post('/arquivos', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro')
        }
    })
})

app.listen(8081, () => {
    console.log("Ativo...")
})