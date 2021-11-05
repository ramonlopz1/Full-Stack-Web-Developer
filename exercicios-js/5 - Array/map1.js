// Dentro da função MAP existe um laço que é executado, serve para fazer uma transformação no array, mapear o array para um outro array do mesmo tamanho
// O MAP não modifica o array atual, ele gera um novo array.
const nums = [1, 2, 3, 4, 5]

// o Map é um For com um propósito
// recebe 3 params, o próprio valor, o indice e o array completo
let resultado = nums.map(function(e) {  // o 'e' vai ser o valor do array
    return e * 2
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`   // transforma em float, duas casas decimais, substitui o ponto

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)   // alterando o resultado de cada map
console.log(resultado)