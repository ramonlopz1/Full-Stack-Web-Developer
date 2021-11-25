console.log(this === global) // false: this === module.exports, pois o this pertence ao arquivo atual, já o global a todos os arquivos.
console.log(this === module) // false: não, porque this é um objeto. This é a referência de module.exports.

console.log(this === module.exports) // true
console.log(this === exports) //  true this === module.exports e exports

// Ao acessar o this dentro de uma função, 
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // false, dentro da função o this não aponta para o exports
    console.log(this === module.exports) // false, dentro da função o this não aponta para o module.exports
    console.log(this === global) // """"true, dentro da função o this aponta para o global. Então cuidado ao utilziar o this dentro das funções. Pois você pode apontar para o global, algo que não se deve. Ou alterar um objeto com o mesmo nome, que esteja em outro módulo""""

    
}

logThis()