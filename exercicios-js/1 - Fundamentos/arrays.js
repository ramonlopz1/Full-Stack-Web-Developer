const valores = [7.7, 7.9, 6.3, 9.2];

console.log(valores[1]);

valores[4] = 10;


valores.push({id: 3}, false, null, 'teste')


console.log(valores.pop()) // retorna o último valor

delete valores[0]; // deleta valor do array

console.log(valores[8])