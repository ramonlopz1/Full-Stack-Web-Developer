console.log(typeof Array, typeof new Array, typeof []) //função | objeto | objeto
//trabalhe com valores homogêneos em arrays. Com tipos iguais

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Forma não recomendada de criação de array
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana'] // Forma recomendada de criação de array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


aprovados[3] = 'Paulo' //atribuindo por index
aprovados.push('Abia') // adicionando elemento
console.log(aprovados.length) // tamanho do array
aprovados[9] = 'Rafael'
console.log(aprovados.length) // todos os elementos antes do índice 9 passarão a existir:       <4 empty items>
console.log(aprovados[8] === undefined) // TRUE


aprovados.sort() // Essa função reordena o Array

delete aprovados[1] // Exclui valor do array (o índice permanece, porém como undefinede) pelo index (DA MESMA FORMA QUE DELETA UM ATRIBUTO EM OBJETOS)

aprovados = ['Bia', 'Carlos', 'Ana']



// Essa função adiciona, remove ou (adiciona e remove ao mesmo tempo)
//            aprovados.splice(1, 2)      ----->  A partir do index 1, exclua 2 valores (irá excluir 'Carlos' e 'Ana')
// Para excluir e adicionar ao mesmo tempo:
aprovados.splice(1, 1, 'NovoElemento1', 'NovoElemento2') // Irá excluir 'Carlos' e 'Bia' e Substituir seus valores pelos parâmetros passados: 'NovoElemento1' e 'NovoElemento2'


