// JavaScript Object Notation: É UM FORMATO DE DADOS para interoperabilidade entre sistemas
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma () {
        return a+b+c
    }
}

console.log(JSON.stringify(obj)) //a função não será retornada, pois o JSON é um formato de DADOS, não é algo que pode ser executável

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) dará erro

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) //dará erro

// em JSON o atributo deve ser limitado por aspas duplas ""

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // JSON válido

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) //aceita num, string, boolean, objetos e arrays
