const pG = (a1, n) => {
    var resultado = 1
    var soma = 0

    for(var i = 0; i < n; i++) {
        soma = soma + resultado
        resultado = resultado * a1
        console.log('PG: ' + resultado)
        soma = soma + resultado
    }
    console.log('Soma total: ' + (soma))
}

pG(5, 4)