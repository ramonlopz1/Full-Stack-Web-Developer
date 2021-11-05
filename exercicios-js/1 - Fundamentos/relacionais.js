console.log('1 - ', '1' == 1) //RETORNA TRUE, pois a verificação lógica é pelo valor e não pelo tipo.
console.log('2 - ', '1' === 1) //RETORNA FALSE, pois a verificação lógica é pelo tipo e não pelo valor.

console.log('3 - ', '3' != 3) //RETORNA FALSE, pois a verificação lógica é pelo valor e não pelo tipo
console.log('4 -', '3' !== 3) //RETORNA TRUE, pois a verificação lógica é pelo tipo e não pelo valor

const d1 = new Date(0) //instancia objeto da funcao Date, o $0 é o marco do tempo do JS
const d2 = new Date(0)

console.log('09 -', d1 === d2) //NESTE CASO COMPARA A REFERÊNCIA DE MEMÓRIA, LOGO DARÁ FALSO, POIS SÃO DIFERENTES
console.log('10 - ', d1 == d2)//NESTE CASO COMPARA A REFERÊNCIA DE MEMÓRIA, LOGO DARÁ FALSO, POIS SÃO DIFERENTES

console.log('11 - ', d1.getTime() == d2.getTime()) //NESTE CASO RETORNA TRUE, pois está comparando um number (getTime) e eles são iguais

console.log('12 - ', undefined == null) //RETORNA TRUE
console.log('13 - ', undefined === null) //RETORNA FALSE

//É MELHOR UTILIZAR SEMPRE O ESTRITAMENTE IGUAL '==='