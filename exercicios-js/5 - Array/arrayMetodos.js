// Um array constante: 
// O identificador 'pilotos' sempre vai apontar para o array, porém ele poderá ter seus valores modificados
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Exclui a última posição do array.
pilotos.push('Verstappen') // Add a última posição
pilotos.shift() // Exclui a primeira posição do array
pilotos.unshift('Hamilton') // Add a primeira posição


pilotos.splice(2, 0, 'Bottas', 'Massa') // No indice 2 > Não exclua ninguém > Adicione 'Valor1' > Adicione 'Valor2'

const algunsPilotos = pilotos.slice(2, 4) // Retorna um novo array a partir do index X até o index Y