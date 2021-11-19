const produtos = {}

const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}

function getProduto(id) {
    return produtos[id] || {}
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProdutos, getProduto, excluirProduto }