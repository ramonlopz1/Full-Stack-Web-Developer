function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// Promise.all, só chama o then após todos os valores serem resolvidos, ou seja, vai retornar após: 4000 + 1000 + 500 + 3000 + 100 + 1500 milisegundos
function gerarVariosNumeros () {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}


// vê o tempo de execução de algo console.time / console.timeEnd
console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

