const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

///

const chavesVariadas = new Map([
    [function () { }, 'Função'],  // chave e valor
    [{}, 'Objeto'], // chave e valor
    [123, 'Número'] // chave e valor
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
}) 

console.log(chavesVariadas.has(123)) // 123 está contido em chaves variadas
chavesVariadas.delete(123)
console.log(chavesVariadas.size) // quantos elementos estão dentro