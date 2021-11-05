// \/
console.log(soma(5, 6))
/*  /\ chamando a function declaration antes dela ser criada.
 *      isso acontece porque o interpretador JS lê primeiro todas as funções, para só depois executar o código.
 */
// function declaration: o interpretador JS lê primeiro todas as functions declarations, para só depois executar o código.
function soma(x, y) {
    return x + y
}

// function expression: nesse caso a função não pode ser chamada antes de ser criada. boa prática.
const sub = function (x, y) {
    return x - y
}

// named function expression: nesse caso a função não pode ser chamada antes de ser criada. boa prática.
const mult = function mult() {
    return x * y
}
