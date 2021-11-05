function calcular(a, b, operacao) {
    var caixaAlta = operacao.toUpperCase()
    var operacoes = {
        somar: `Soma: ${a} + ${b} = ${a+b}`,
        subtrair: `Subtração: ${a} - ${b} = ${a-b}`,
        multiplicar: `Multiplicação: ${a} x ${b} = ${a*b}`,
        dividir: `Divisão: ${a} / ${b} = ${a/b}`
    }

    switch(caixaAlta) {
        case 'SOMAR':
            return operacoes.somar
            break
        case 'SUBTRAIR':
            return operacoes.subtrair
            break
        case 'MULTIPLICAR':
            return operacoes.multiplicar
            break
        case 'DIVIDIR':
            return operacoes.dividir
            break
        default:
            console.log('Digite uma operação válida')
    }
}

console.log(calcular(5, 4, 'somar'))

