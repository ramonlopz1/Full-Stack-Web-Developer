const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // qualquer requisição servirá todos os arquivos estáticos da pasta atual
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // transforma JSON em Objeto

const multer = require('multer') // interpreta formulario com arquivo upload

const storage = multer.diskStorage({ // 
    destination: function (req, file, callback) {
        callback(null, './upload') // pasta de destino que o arquivo será armazenado
    },

    filename: function(req, file, callback) { // define o nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }

})

const upload = multer({ storage }).single('arquivo') //recebe objeto storage criado anteriormente com o destino e nome do arquivo, o 'arquivo' referencia o name do input do formulário

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluindo com sucesso.')
    })
})

app.listen(8080, () => {
    console.log('Executando servidor...')
})

