/**Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

const simboloMais = (numVezes) => {
	var concatenar = ""
	for(let i = 0; i < numVezes; i++) {
		concatenar = concatenar.concat("+")
		
	}

	return concatenar
}

console.log(simboloMais(5))