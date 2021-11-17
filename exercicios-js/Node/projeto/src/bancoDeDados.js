const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //atribui ID caso não tenha
    produtos[produto.id] = produto // obj > chave > valor
    return produto
}

function getProduto(id) {
    return produtos[id] || {} //obj > chave
}

function getProdutos() {
    return Object.values(produtos) // obj
}

function excluirProduto(id) {
    const produto = produtos[id] //produto na posição id passado
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }