/**Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
 */

function contarCaractere(caractere, stringg) {
	var splitado = stringg.split("")
	var contador = 0
	splitado.forEach(function(valor, indice) {
		if(caractere === valor) {
			contador++
		}
	})
	return contador
	
}

contarCaractere("L", "RAaamon LLLLopes")