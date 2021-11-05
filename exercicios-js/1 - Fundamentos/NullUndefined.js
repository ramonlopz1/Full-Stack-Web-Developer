let valor // não atribuido, retorna undefined, foi criado mas não atribuido
console.log(valor)
//console.log(valor2) // is not defined, não foi nem criado

valor = null //não tem nenhum valor (ausência de valor - não aponta para nenhum objeto na memória, está vazia.) e nem endereço na memória: ela foi inicializada mas está vazia, retorna null
console.log(valor)

const produto = {}
console.log(produto.preco) //o preço não está definido = undefined

produto.preco = 3.5;
console.log(produto) 

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) // !! - diz o estado booleano do atributo
// delete produto.preco
console.log(produto)

produto.preco = null // produto sem preço

console.log(produto.preco)
console.log(produto)

//sempre use NULL para zerar um valor de uma variável.