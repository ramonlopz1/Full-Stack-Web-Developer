const aumento = function (salario, plano) {
	var caixaAlta = plano.toUpperCase()
	var a = 1.1
	var b = 1.15
	var c = 1.2

	switch(caixaAlta) {
		case 'A':
			return `Nova salário: ${salario*a}`
			break
		case 'B':
			return `Nova salário: ${salario*b}`
			break
		case 'C':
			return `Nova salário: ${salario*c}`
			break
		default:
			return `Plano inválido`
	}
	
}

console.log(aumento(1100, 'b'))

