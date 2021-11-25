console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // o 'a' será visivel fora do arquivo
exports.b = 2 // sera visível fora do arquivo
module.exports.c = 3 // sera visível fora do arquivo