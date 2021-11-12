function somaArray(array) {
    /**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */
    
    array.reduce(function(acumulador, valor) {
        
        resultado = acumulador + valor
        return resultado
        
    })

    console.log(resultado)
    
}

somaArray([1, 2, 3, 4, 6])