const estaEntre = function (num, min, max, inclusivo = false) {
	if (num >= min && num <= max) {
		return `Está entre.`
	} else {
		return `Não está entre.`
	}
}

console.log(estaEntre(20, 50, 30))