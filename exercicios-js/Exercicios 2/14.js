const objetoParaArray1 = function(obj1) {
    const newArray = []
    for (let valor in obj1) {
        newArray.push(Object.keys(obj1),(Object.values(obj1)))
        return newArray
    }
    
    
}

console.log(objetoParaArray1({ a: 1, b: 2 }))

// CORRETA
function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}
    
    
console.log(objetoParaArray({a: 1, b: 2}))