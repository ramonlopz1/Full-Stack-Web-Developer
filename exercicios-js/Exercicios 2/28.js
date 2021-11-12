/**Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
 */

// descobrir o maior
// tirar o maior do array
// descobrir o maior do novo array

const segundoMaior = (array) => {
    var maiorArray = Math.max.apply(null, array)
    const newArray = []
    const resultadoArray = []
    array.forEach(function(valor) {
        if (valor !== maiorArray) {
            newArray.push(valor)
        }
        segundoMaiorArray = Math.max.apply(null, newArray)
    }) 

    resultadoArray.push(segundoMaiorArray)
    return resultadoArray
}

console.log(segundoMaior([12, 16, 1, 5]))