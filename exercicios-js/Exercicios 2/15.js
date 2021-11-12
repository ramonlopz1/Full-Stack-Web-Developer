/**Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */

const valorEIndicePares = function(array) {
    const newArray = []
    array.forEach(function(valor, indice) {
        if(valor % 2 === 0 && indice % 2 === 0) {
            newArray.push(valor)
            
        } 
        
    })
    return newArray
}


console.log(valorEIndicePares([10, 70, 22, 43]))