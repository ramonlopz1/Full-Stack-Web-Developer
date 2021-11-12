// commonJS: sistema de módulos do node
const moduloA = require('./moduloA') // caminho do moduloA (caminho relativo)
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemmVindo)
console.log(moduloA.ateLogo)

//modulo importado pelo require
console.log(moduloA) 

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

//modulo importado pelo require
console.log(moduloB)