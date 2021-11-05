function somaArray(array) {
    array.reduce(function(acumulador, valor) {
        
        resultado = acumulador + valor
        return resultado
        
    })

    console.log(resultado)
    
}

somaArray([1, 2, 3, 4, 6])