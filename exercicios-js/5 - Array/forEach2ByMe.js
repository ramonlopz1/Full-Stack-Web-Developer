
function forEach2(array = [], funcao = function exec () {}) {
    
    for(var indice = 0; indice < array.length ; indice++) {
        
        valor = array[indice]
        console.log(indice + ' ' + valor)
        funcao()
        
    }
}


meuArray = ['a', 'b', 'c', 'd']

forEach2(meuArray, function () {
    console.log('Exec funcao...')
})


