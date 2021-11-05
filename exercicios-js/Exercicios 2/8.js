const multiplicar = (num1, num2) => {
	var resultado = 0
	
	if (num1 >= 0 && num2 >= 0) {
		for(let i = 0; i < num2; i++) {
			resultado += num1
		}
		return resultado
	} else {
		return `Insira um número positivo`
	}
} 

console.log(multiplicar(3, 7))