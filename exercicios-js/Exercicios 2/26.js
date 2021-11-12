/**Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.

 */

const inverter = function(objeto) {
    var novoObjeto = {}
    var chaves = Object.keys(objeto)   //   a b c
    var valores = Object.values(objeto) //  1 2 3
    var invertedor = [chaves, valores] = [valores, chaves]
    return Object.assign(novoObjeto, chaves, valores)
}


console.log(inverter({ a: 1, b: 2, c: 3, d: 4}))


// CORRETA : 

function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter2({ a: 1, b: 2, c: 3, d: 4}))