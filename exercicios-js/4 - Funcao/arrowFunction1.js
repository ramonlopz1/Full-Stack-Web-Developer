//FUNÇÃO NORMAL
let dobro = function (a) {
    return 2 * a
}


//FUNÇÃO ARROW COM PARÊNTESES E CHAVES
dobro = (a) => {
    return 2 * a
}

//FUNÇÃO ARROW REDUZIDA, RETORNO IMPLÍCITO
dobro = a => 2 * a

//EX

console.log(dobro(Math.PI))

ola = () => 'Olá' //sem parâmetro
ola = _ => 'Olá' // _ é parâmetro
console.log(ola())