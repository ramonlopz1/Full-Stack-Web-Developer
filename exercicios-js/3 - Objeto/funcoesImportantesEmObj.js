const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//retornar apenas as chaves do objeto
console.log(Object.keys(pessoa))

//retornar apenas os valores do objeto
console.log(Object.values(pessoa))

//retornar apenas subarrays
console.log(Object.entries(pessoa))

//retornar apenas registros(array e subarray)
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definir propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode ser listada
    writable: false, //pode ser modificada
    value: '01/01/2019' //valor da propiedade
}) //pessoa é o target da função

console.log(pessoa.dataNascimento)

//retornando as chaves do objeto, como array
console.log(Object.keys(pessoa))

const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, d:4}
const obj = Object.assign(dest, o1, o2) //insere os atributods passados (a1,  a2) e coloca no dest
console.log(obj)