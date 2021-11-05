function getPreco (imposto = 0, moeda = 'R$') {

    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco

}


//acessando as variaveis de forma global, apenas para exemplo:
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

//CALL
const carro = {preco: 49990, desc: 0.20}
 // chama os valores do objeto carro através da função getPreco()
 //pode passar os valores do objeto:
console.log(getPreco.call(carro, 0.17, '$'))


//APPLY
// chama os valores do objeto carro através da função getPreco()
//nesse caso os valores são passados através de um array
console.log(getPreco.apply(carro, [0.17, '$'])) 

