function impares (inicio = 0, fim = 100) {
    var qtdImpares = 0
    var qtdPares = 0

    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    for (var i = 0;i<fim;i++) {

        if(inicio % 2 !== 0) {
            qtdImpares++
            console.log('IMPAR: ' + inicio)
            

        } else {
            qtdPares++
            console.log('PAR: ' + inicio)
            
        }
        inicio++
    }
    console.log('QTD: ' + qtdPares)
    console.log('QTD: ' + qtdImpares)
}

impares(100, 0)