/**
 * Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

const mediaSimples = (array) => {
	resultado = 0
	contador = 0
	array.forEach(function(valor, indice) {
		resultado = resultado + valor
		contador++
	})
	var media = resultado/contador

	console.log(media)
	
}

mediaSimples([1, 2, 3, 4, 7])