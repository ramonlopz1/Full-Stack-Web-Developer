const simboloMais = (numVezes) => {
	var concatenar = ""
	for(let i = 0; i < numVezes; i++) {
		concatenar = concatenar.concat("+")
		
	}

	return concatenar
}

console.log(simboloMais(5))