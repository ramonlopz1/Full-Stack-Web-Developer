console.log(typeof String) // String é uma função
console.log(typeof Array) // Array é uma função
console.log(typeof Object) // É uma função
// logo toda função tem um atributo chamado .prototype


//Adicionando novas funções à um prototype
String.prototype.reverse = function () {
    return this.split('').reverse().join('') //criação da função reverse: o split gera um array do valor passado na string
}

console.log('Escola Cod3r'.reverse())

//Adicionando função à um protype
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())


String.prototype.toString = function () { //sobrescrevendo uma função existente
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())