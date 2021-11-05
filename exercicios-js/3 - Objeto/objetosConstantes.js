// pessoa -> 123 -> {...} (pessoa aponta para endereço de memória 123 e o endereço aponta para o valor)
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ana'} // dará erro pois a constante já foi definida

Object.freeze(pessoa) // congela o objeto pessoa, não permitindo sua alteração

pessoa.nome = 'Maria'

console.log(pessoa) // irá retornar