function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) { //includes === contém
            reject('Número repetido!')
        }
         else {
           resolve(aleatorio)
        }
    })
}

// async function é uma função que sempre irá retornar uma promise
async function gerarMegaSena(qtdNumeros, tentativas) {
    try {
        const numeros = []
    for (let _ of Array(qtdNumeros).fill()) {  // fill preenche o array com o valor passado
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        // await é sempre uma função que retorna uma promise
    }
    return numeros
    } catch(e) {
        if(tentativas > 1) {
            throw "Número de tentativas maior que o permitido"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25, 5)
    .then(console.log)
    .catch(console.log)


