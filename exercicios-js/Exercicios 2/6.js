const inverso = valor => {
	if (valor === true || valor === false) {
		return !valor
	} else if (Number.isInteger(valor)) {
		console.log(valor * -1)
	} else {
		return `Insira um valor numérico ou booleano`
	}
}

console.log(inverso(true))