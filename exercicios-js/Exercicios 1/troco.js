const troco = function (valor) {
	var centena = Math.floor(valor/100)
	var dezena = Math.floor((valor - (centena*100))/10)
	var cinco = Math.floor((valor - (centena*100 + dezena * 10))/5)
	var unidade = valor - ((centena*100) + (dezena*10) + (cinco * 5))
	
	console.log('Nota de cem: ' + centena)
	console.log('Nota de dez: ' + dezena)
	console.log('Nota de cinco: ' + cinco)
	console.log('Nota de um: ' + unidade)
	
}

troco(22)