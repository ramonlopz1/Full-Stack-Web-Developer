function imprimirSoma(a, b) { //não foi utilizada palavra reservada(var, let, const) nem tipo primitivo(int, floar, double)
    console.log(a+b);
}

imprimirSoma(5, 6)
imprimirSoma(2) // Retorna Not a Number
imprimirSoma(1, 2, 3, 4, 5, 6, 7) // Vai somar apenas o primeiro e segundo
imprimirSoma();

// Função com retorno

function soma(a, b = 1) {
    return a + b
} // Por padrão o valor é 0

console.log(soma(1)) // retornar 2
console.log(soma(2, 3)) // para obter o resultado da soma através de return, é preciso chamar a função dentro do console.log

function nomeAluno (a, b) {
    return a + b
}

console.log(nomeAluno('Ramon', 'lopes'))