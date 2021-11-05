function produto(nome, preco) {
    this.nome = nome
    this.preco = preco

    

    this.dadosProduto = function() {
        return {
            name: nome,
            price: preco
        }
    }
}

var p1 = new produto('calca', 22)
var p2 = new produto('bolsa', 95)
var p3 = new produto('blusa', 99)
console.log(p1.dadosProduto())

console.log(p2.dadosProduto())

console.log(p3.dadosProduto())