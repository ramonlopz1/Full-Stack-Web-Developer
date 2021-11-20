const fs = require('fs')

const readArchive = directory => {
    const way = __dirname + directory
    return new Promise((resolve, reject) => {

        try {
            fs.readFile(way, (err, conteudo) => {
                const pasta = conteudo.toString()
                resolve(pasta)
            }) 
        } catch(e) {
            reject(e)
            console.log(e.message)
        }
        console.log('Depois de ler') // imprime primeiro
    })
}

async function doTheJob() {
    const content = await readArchive('/dados.txt')
    return content
}

doTheJob()
    .then(valor => valor)
    .then(console.log)