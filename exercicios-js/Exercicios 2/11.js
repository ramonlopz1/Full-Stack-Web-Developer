/**Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
 */

const receberPrimeiroEUltimoElemento = (array = []) => {
	var newArray = []
	newArray.push(array[0])
	newArray.push(array[array.length - 1])
	console.log(newArray)
}

receberPrimeiroEUltimoElemento([4, 2, 3, 4, 7, 8])