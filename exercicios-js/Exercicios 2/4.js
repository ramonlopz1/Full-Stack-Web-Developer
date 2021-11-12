/**Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos: */

const nomeDoMes = mes => {
	switch(mes) {
		case 1:
			console.log('JAN')
			break
		case 2:
			console.log('FEV')
			break
		case 3:
			console.log('MAR')
			break
		case 4:
			console.log('ABR')
			break
		case 5:
			console.log('MAI')
			break
	}
}

nomeDoMes(3)