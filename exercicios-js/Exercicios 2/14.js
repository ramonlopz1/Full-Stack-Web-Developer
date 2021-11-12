/**Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

*/ const objetoParaArray1 = function(obj1) {
    const arrayDeObjeto = Object.entries(obj1)
    return arrayDeObjeto
    
}
console.log(objetoParaArray1({ a: 1, b: 2 }))



// OU
function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}
console.log(objetoParaArray({a: 1, b: 2}))