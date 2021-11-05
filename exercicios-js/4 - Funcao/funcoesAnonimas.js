//FUNÇÃO SEM NOME
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))   //vai pegar a operação que está referenciada à função soma, e colocar os parâmetros passados na função imprimirResultado
}

imprimirResultado(3, 4) // passando a função $soma implicitamente para os parâmetros da função imprimirResultado
imprimirResultado(3, 4) // poassando a função $soma explicitamente para os parâmetros da função imprimirResultado

imprimirResultado(3, 4, function (x, y) {   // passando função anônima dentro dos parâmetros
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // passando arrowfunction

const pessoa = { // passando função anônima dentro de objeto
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()