// usando notação literal
const obj1 = {}

// usando função construtora:
function Produto (nome, preco, desc) {
    this.nome = nome // com this: public, sem this: private
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2899.00, 0.25)

console.log(p1.getPrecoComDesconto().toFixed(2))
console.log(p2.getPrecoComDesconto().toFixed(2))

// usando função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Eu sou JSON"}')
console.log(fromJSON.info)