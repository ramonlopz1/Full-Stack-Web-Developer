
//arguments é o valor interno de uma função, a quantidade de parâmetros que tem nela
//toda função tem esse parâmetro: arguments
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //zero parâmetros
console.log(soma(1)) //apenas 1 parâmetros
console.log(soma(1.1, 2.2, 3.3)) //vai somar os valores dos 3 argumentos
console.log('a', 'b', 'c')  // concatena a b c