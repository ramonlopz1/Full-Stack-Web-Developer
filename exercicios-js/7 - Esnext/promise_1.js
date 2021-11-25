let promessa = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = array  => array[0];
const primeiraLetra = string => string[0];
const letraMinuscula = letra => letra.toLowerCase();

promessa
    .then(primeiroElemento) // é o valor que irá para o próximo then
    .then(primeiraLetra) // é o valor que irá para o próximo then
    .then(letraMinuscula) // é o valor recebido dos thens anteriores
    .then(console.log)