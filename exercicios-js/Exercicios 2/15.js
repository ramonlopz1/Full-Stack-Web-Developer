const valorEIndicePares = function(array) {
    const newArray = []
    array.forEach(function(valor, indice) {
        if(valor % 2 === 0) {
            newArray.push(valor)
            
        } 
        
    })
    return newArray
}


console.log(valorEIndicePares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))