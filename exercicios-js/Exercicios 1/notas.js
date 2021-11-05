const nota = function (valorNota) {
    var multiplo5 = Math.ceil(valorNota/5)*5  //arredonda para o próximo múltiplo de 5
    var resto = multiplo5 - valorNota //restante que servirá como critério de teste
    
    if (valorNota < 38) {
        console.log('Reprovado')
    } else if (((multiplo5 + 5) - valorNota) < multiplo5) {
        console.log('Resta: ' + resto)
        console.log('Nota arredondada: ' + (valorNota + resto))
    } else {
        console.log('Resta: ' + resto )
    }    

}

nota(46)