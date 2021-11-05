


const funcao = () => {
    const array = [1, 2, 3, 4, 9, 0, 22, 32, 9, 13, 32]
    let soma = 1
    var soma2 = 0
    let contador = 0

    for(var i = 0 ; i < array.length ; i++) {
        
        contador++
    }


    array.forEach(
        function (num, valor) {
            soma += num
        }
    )

    
    console.log(`SOMA DOS VALORES DO ARRAY: ${soma-1}`)
    console.log(`QTD DE NÚMEROS DO ARRAY: ${contador}`)
    console.log(`MÉDIA: ${((soma-1)/contador).toFixed(1)}`)

}

funcao()