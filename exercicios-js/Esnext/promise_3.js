function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(valor => valor * 10)
    .then(valor => valor * 10)
    .then(console.log)