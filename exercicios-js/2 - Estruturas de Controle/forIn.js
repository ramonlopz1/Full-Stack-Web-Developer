const nomes = ['joao', 'maria', 'pedro']


//RETORNA O ÍNDICE E O VALOR
for (let letra in nomes) {
    console.log(letra, nomes[letra])
}


// TAMBÉM PERCORRE OBJETOS:
const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 65
}

for (let dados in pessoa) {
    console.log(`${dados} = ${pessoa[dados]}`)
}
////