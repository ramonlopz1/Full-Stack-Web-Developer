function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('bem vindo', 123) // cria um novo objeto e o novo objeto aponta para o protótipo de aula.prototype
const aula2 = new Aula('até breve', 456)
console.log(aula1, aula2)

//simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)