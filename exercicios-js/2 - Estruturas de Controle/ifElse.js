const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(5)
imprimirResultado('Epa') //VAI RETORNAR FALSO, POIS NÃO É NÚMERO, LOGO RETORNARÁ 'REPROVADO' #TOMECUIDADO