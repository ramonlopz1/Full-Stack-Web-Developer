function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}

console.log(soma1()) //retorna 3 pois nao foi passado parâmetro 1 + 1 + 1
console.log(soma1(3)) // soma 1 + 1 + 3
console.log(soma1(1, 2, 3))  // soma normal
console.log(soma1(0, 0, 0))  // vai ignorar o zero e passar 1 + 1 + 1

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //se existir 1 em argumentos, pegue o valor de b, senao pegue o valor de 1
    c = isNaN(c) ? 1 : c //se for not a number, retorne $1, senão retorne $c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//ARGUMENTOS PADRÃO:
//USE ESTE:
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))