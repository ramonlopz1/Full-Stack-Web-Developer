const jurosSimples = function(capInicial, txJuros, tempoAplica) {
    var montanteMensal = 1
    var montanteFinal = 1
    for (var i = 0 ; i < tempoAplica; i++) {
        montanteMensal = capInicial * txJuros  // 10
        montanteFinal = capInicial + montanteMensal // 110
        capInicial = montanteFinal // 110
    }
    return `R$ ${capInicial.toFixed(2).replace(".", ",")}`

}

console.log(jurosSimples(100, 0.10, 12))

