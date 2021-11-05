

//CRIANDO FUNÇÃO, TIPO NUMBER, CHAMADA $ENTRE, PARA SER PASSADO VALOR DE INÍCIO E FIM
//O RETORNO SE THIS FUNCTION >= INICIO && THIS FUNCTION <=FIM
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim  //SÓ RETORNA SE O VALOR ESTIVER ENTRE OS PARÂMETROS PASSADOS.
}
//FOCO DA AULA:
const imprimirResultado = function (nota) {
    
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)