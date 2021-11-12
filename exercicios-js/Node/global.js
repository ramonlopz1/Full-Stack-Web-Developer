// console.log(global)

// colocando funcao dentro modulo global, logo todos os modulos terão acesso à essa funcao
global.MinhaApp = Object.freeze( {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})