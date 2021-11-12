/**Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
 */
function removerVogais(string_) {
	
var splitado = string_.split("")
var newString = ""

splitado.forEach(function(valor){
	if(valor !== "a" && valor !== "e" && valor !== "i" && valor !== "o" && valor !== "u") {
			newString = newString.concat(valor)
		}
	})	

	return newString
}

console.log(removerVogais("ramon aaa um lopes"))