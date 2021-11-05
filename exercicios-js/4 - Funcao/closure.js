// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto légico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x   
    }
    return dentro()
}

//A função busca próximo do local da memória, busca a variável ao seu redor, pulando de escopo para escopo até encontrar o valor desejado.
const minhaFuncao = fora()
console.log(minhaFuncao)