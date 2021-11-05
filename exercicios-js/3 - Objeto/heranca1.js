const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)  // acessa o protótip o do objeto ferrari, o superobjeto, o objeto pai (superclass), como a palavra super em java
console.log(ferrari.__proto___ === Object.prototype)
console.log(Object.prototype.__proto__)