const pai = {
    nome: 'PEDRO',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // cria um novo objeto herdando o objeto pai

filha1.nome = 'ANA'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) //saber se o atributo pertence ao próprio objeto ou se veio por herança
}