const porta = 3003 

const express = require('express')
const app = express() //servidor
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// converte o conteúdo recebido do body, para objeto
app.use(bodyParser.urlencoded({ extended: true }))


// retorna lista de produtos
app.get('/produtos', (req, res, next) => { //passa o caminho e passa uma função middleware
    const produtos = bancoDeDados.getProdutos()
    res.send(data) //retornar todos produtos
})

// retorna produto pelo ID
app.get('/produtos/:id', (req, res, next) => {
    const product = bancoDeDados.getProduto(req.params.id)
    res.send(product)
}) 

// insere informações
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // req.body > atribui valor passado no form
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//substitui as informações, caso existam, pelo ID
app.put('/produtos/:id', (req, res, next) => { //coloque no ID passado na URL:
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,  // requisitou o id pelo url
        nome: req.body.nome, // passou a alteração pelo form
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// deleta pelo ID
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id) //exclui pelo id do URL
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})