// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {          // função anônima, sem nome atribuido à função. a constante armazena uma função
    console.log(a + b)
}  

imprimirSoma(2, 3)

// Armazenando uma funcao em arrow "=>" em uma variavel

//arrow function:
const soma = (a, b) => {  // a seta substitui o nome function
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // Quando não há chaves, será executado apenas uma linha, logo será retornado automaticamente o resultado da execução desta função

console.log(subtracao(2, 3))