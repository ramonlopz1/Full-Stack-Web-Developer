// 5.4.3.2.1 = 120

const fator = function(valor) {
    
    var resultado = valor
    for (var i = 1 ; i < valor ; i++) {
        resultado = resultado * i
    }

    return resultado
}

console.log(fator(5))