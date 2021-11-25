// Estrutura que representa operação assíncrona: promessa que pode ser atendida ou rejeitada.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {  // resolvido ou rejeitado
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!?!'))
    .then(outraFrase => console.log(outraFrase))