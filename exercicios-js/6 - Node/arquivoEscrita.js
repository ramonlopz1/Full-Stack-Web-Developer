const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 015
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // a callback vai ser o erro
    console.log(err || 'Arquivo salvo!') // se o erro for nulo, retornará 'arquivo salvo'
})