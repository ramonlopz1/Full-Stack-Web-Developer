const repetir = (vaiRepetir, numVezes) => {
	const array = []
	for(let i = 0; i < numVezes; i++) {
		array.push(vaiRepetir)
	}

	return array
}

console.log(repetir('Ramon', 5))