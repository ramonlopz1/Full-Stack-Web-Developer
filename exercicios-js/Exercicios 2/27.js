/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function filtrarPorQuantidadeDeDigitos (array, tamanho) {
    let newArray = []
    let paraString = ''
    let tamanhoValorDoArray = 0

    array.forEach(function(valor, indice) {
        paraString = valor.toString()
        tamanhoValorDoArray = paraString.length

        if(tamanho === tamanhoValorDoArray) {
            newArray.push(valor)
        }
        
    })
    return newArray
    
}


console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
    

