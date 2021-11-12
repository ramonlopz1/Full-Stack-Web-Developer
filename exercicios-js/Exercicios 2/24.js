/**A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
 */

const buscarPalavrasSemelhantes = (palavra, arrayPalavras) => {
	var tamanhoPalavra = palavra.split("").length
	var newArray = []
		
	arrayPalavras.forEach(function(valor) {
		var resultado = valor.substring(0, tamanhoPalavra)
		if(resultado === palavra) {
			newArray.push(valor)
		}
	})
	return newArray
	
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional", "desktop", "procura"]))
