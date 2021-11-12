/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

const repetir = (vaiRepetir, numVezes) => {
	const array = []
	for(let i = 0; i < numVezes; i++) {
		array.push(vaiRepetir)
	}

	return array
}

console.log(repetir('Ramon', 5))