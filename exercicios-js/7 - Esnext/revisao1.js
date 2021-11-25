{
    var a = 2
    let b = 3
}
console.log(a) // var é global, retornará
// console.log(b) // let tem escopo de bloco, não retornará

// Template String
const produto = 'Ipad'
console.log(`${produto}`)

// Destructuring: tira de dentro de objeto, de array, de string...

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)