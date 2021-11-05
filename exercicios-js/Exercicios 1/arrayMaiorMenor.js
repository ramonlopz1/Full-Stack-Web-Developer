const maiorMenorArray = () => {
    var array = [4, 3, 4, 9, 2, 11, 5, 27]
    var maior = 0
    var menor = 0
    array.forEach(
        function (num, indice) {
            maior = Math.max.apply(null, array)
            menor = Math.min.apply(null, array)
            
        }
    )
    console.log('MAIOR: ' + maior)
    console.log('MENOR: ' + menor)
}

maiorMenorArray()