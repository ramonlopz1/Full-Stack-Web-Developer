class Produto {

    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = nome
    }

    getPreco() {
        return this.preco
    }

    setPreco(preco) {
        this.preco = preco 
    }

    

}


var p1 = new Produto('calça', 55)
p1.setNome('CocaCola')
console.log(p1)

var p2 = new Produto('blusa', 22)

