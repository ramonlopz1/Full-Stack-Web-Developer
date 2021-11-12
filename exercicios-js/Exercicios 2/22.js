/**Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 */

const contarPalavras = (valor) => {	
	var splitado = valor.split(" ")
	var contador = 0
	
	for(let i = 0; i < splitado.length; i++) {
		contador++
	}
	return contador
}

console.log(contarPalavras("Ramon Lopes Faustino"))