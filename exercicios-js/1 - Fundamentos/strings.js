const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna o valor do indice 4 da string
console.log(escola.charCodeAt(3)); // retorna o código que representa o CHAR
console.log(escola.indexOf('d')); // retorna o número do índice do caracter passado no parâmetro

console.log((escola.substring(1))) // retorna o String partindo da posição indicada no parâmetro
console.log(escola.substring(0, 3)) // retorna o String partindo da posição 0 até a posição 3

console.log('Escola'.concat(escola).concat("!")) //concatenação, tb pode utilizar o +

console.log(escola.replace('o', 'x')) // faz replace onde houver o char "o" pelo char "x"

console.log('Ana,Maria,Pedro'.split(',')) // cria um array da String, onde será separado pela vírgula