/**Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */
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