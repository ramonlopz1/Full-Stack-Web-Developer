// não indexada e não aceita repetição
const times = new Set()

times.add('Vasco')
times.add('Sao Paulos').add('Palmeiras').add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco')) //contém vasco? CamelCase
times.delete('Sao Paulos')