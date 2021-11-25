const fs = require('fs')
const diretorio = __dirname + '/dados.txt'

function lendoarquivo() {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(diretorio, (err, conteudo) => {
                const arquivolido = conteudo.toString()
                resolve(arquivolido)
            })
        } catch (e) {
            reject(e.message)
        }
    })
}

async function doTheJob() {
    const resultadoFinal = await lendoarquivo()
    return resultadoFinal
}

doTheJob()
    .then(valor => `${valor.toUpperCase()}`)
    .then(console.log)