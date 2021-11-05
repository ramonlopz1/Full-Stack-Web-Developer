// Object.preventExtensions: não consegue adicionar novos atributos

const produto = Object.preventExtensions({
    nome: 'Qaulquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('EXTENSÍVEL:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto) 

// Object.seal //selar: não consegue inserir ou excluir novos atributos, mas consegue modificar os existentes

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

