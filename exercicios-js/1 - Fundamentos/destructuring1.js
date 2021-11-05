//como extrair atributos de dentro de uma estrutura (neste caso de um objeto):

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa  //extrai as variáveis $nome e $idade do objeto $pessoa

console.log(nome, idade)


const {nome: n, idade: i} = pessoa //cria variáveis $n e $i e atribui os valores das variáveis $nome e $idade

const {sobrenome, bemHumorada = true} = pessoa //esses valores não existem no objeto, logo retornará undefined, apenas o bemHumorada recebeu valor true, logo retornará true