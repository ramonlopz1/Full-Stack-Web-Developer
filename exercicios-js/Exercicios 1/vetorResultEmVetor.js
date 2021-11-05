function funcao(vetor = [2], inteiro) {
	var vetor2 = []
	
	vetor.forEach(
		function (num, indice) {
			vetor2.push(num*inteiro)
		}
	)

	console.log(vetor)
	console.log(vetor2)
}


funcao([2,3,4], 3)