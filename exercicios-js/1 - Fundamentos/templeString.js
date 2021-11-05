const nome = 'Rebeca';

const concatecanao = 'Ólá ' + nome + '!';


//   ^ v
const template = `
Olá  
${nome}!`
//     /\ O VERDE É O VALOR E $ É A VARIÁVEL


// TEMPLATE CONSIDERA QUEBRA DE LINHA E ESPAÇOS

console.log(concatecanao, template);

// expressos...

console.log(`1 + 1 = ${1+1}`) // só irá interpolar o que está entre chaves.

const caixaAlta = texto => texto.toUpperCase(); // FUNÇÃO: poderá ser usado o uppercase através da  tag "up"

console.log(`Ei... ${caixaAlta('cuidado')}!`)

