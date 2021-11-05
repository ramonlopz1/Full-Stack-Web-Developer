//pan nome/valor ou chave/valor
const saudacao = 'Opa' // contexto léxico 1: local onde o valor foi definido, neste caso, dentro do próprio arquivo

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2: local onde o valor foi definido, neste caso, dentro da função
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor:
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)