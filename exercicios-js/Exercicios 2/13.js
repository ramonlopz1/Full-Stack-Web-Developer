const newArray = []
const filterNumeros = valor => Number.isInteger(valor)
// const filterNumeros = valor => Number.isInteger(valor) ? newArray.push(valor) : false

const array = [1, 3, "oi", 2, 3, 4, "a", "b"]

array.filter(filterNumeros)

console.log(array.filter(filterNumeros))