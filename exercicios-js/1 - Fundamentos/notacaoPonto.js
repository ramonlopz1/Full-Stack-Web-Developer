console.log(Math.ceil(6.1)) //arredonda para cima = retorna 7

const obj1 = {}
obj1.nome = 'Bola' //cria atribudo dinamicamente no objeto, pela notação obj1(PONTO)nome

console.log(obj1.nome)


// Função public, apenas para mostrar notação (PONTO) .
function Obj(nome) {
    this.nome = nome

    this.exec = function () { // criada variável exec, que contém uma função. (a função exec será chamada no final do código)
        console.log('Exec...')
    }

    console.log(nome)
}

const obj2 = new Obj('Cadeira') //Instância da função ojb2, com o parâmetro 'Cadeira'
const obj3 = new Obj('Mesa')

//acessando a variável nome dentro da função obj2 e obj3
console.log(obj2.nome)
console.log(obj3.nome)

obj2.exec() // <<< CHAMANDO FUNÇÃO EXEC, QUE ESTÁ DENTRO DA INSTÂNCIA DA FUNÇÃO OBJ, A INSTÂNCIA OBJ2