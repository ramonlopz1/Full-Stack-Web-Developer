const funcao = () => {
    var array = [1, 5, 9, 23, 11, -2, -5, -9, 9, -1*5]
    var contador = 0
    array.forEach (
        function cont(num, indice) {
            if (num < 0) {
                contador++
            }
        }
    )   
    console.log('QUANTIDADE DE NEGATIVOS NO ARRAY: ' + contador)
}

funcao()