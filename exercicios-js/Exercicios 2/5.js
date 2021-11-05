const maiorOuIgual = (num1, num2) => {
	if (num1 > num2) {
		return `Primeiro é maior`
	} else if(num2 > num1) {
		return `Segundo é maior`
	} else {
		return `São iguais`
	}
}

console.log(maiorOuIgual(3, 2))