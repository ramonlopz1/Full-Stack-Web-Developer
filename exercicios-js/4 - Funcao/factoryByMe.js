function criarProduto (nome, preco) {
    const self = this
    self.nome = nome
    self.preco = preco
    
    return {
        nome: self.nome,
        preco: self.preco
    }
}

console.log(criarProduto('Carro', 55))

const carro1 = criarProduto('Ferrari', 50999)
const carro2 = criarProduto('Fusca', 500)

console.log(carro1)
console.log(carro2)