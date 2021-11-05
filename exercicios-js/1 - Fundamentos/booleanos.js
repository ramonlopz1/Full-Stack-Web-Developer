let isAtivo = false;
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1; // BOOLEANS PODEM SER UTILIZADOS COM NÚMEROS
console.log(!!isAtivo); // INVERTE 2X
console.log(!isAtivo); // INVERTE 1X

console.log('os verdadeiros...');
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'TESTE')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // vaziou
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa')) // pelo menos um verdadeiro

let nome = ''

console.log(nome || 'Desconhecido') // vai retornar apenas o valor que for TRUE