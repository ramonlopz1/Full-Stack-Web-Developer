/**Criar uma função que receba um array de números e retorne o menor número desse array. */

const menorNumero = (array) => {
	const menorNumero = valor => Math.min.apply(null, array)
	return array.map(menorNumero)[0]
}

console.log(menorNumero([5, -15, 50, 3]))