function aluno(n1, n2, n3) {
	var peso1 = 4
	var peso2 = 3
	var peso3 = 3

	if (n1 > n2 && n1 > n3) {
		var maior = n1
	} else if (n2 > n1 && n2 > n3) {
		var maior = n2
	} else if (n3 > n1 && n3 > n2) {
		var maior = n3
	} else {
		maior = n1
		maior = n2
		maior = n3
	}
	
	

	var nP1 = maior * peso1
	var nP2Um = n2 * peso2
	var nP2Dois = n3 * peso3

	totPeso = peso1 + peso2 + peso3
	
	var media = (nP1+nP2Um + nP2Dois)/totPeso

	return media.toFixed(2)
	
}

console.log(aluno(8, 7, 8))