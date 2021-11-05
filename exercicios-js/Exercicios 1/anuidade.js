function anuidade(valor, mes) {
	var juros = 1.05
	for(var i = 0; i < mes; i++) {
		valor = valor * juros
	}

	return `VALOR A SER PAGO: ${valor.toFixed(2)}`
}


console.log(anuidade(100, 4))