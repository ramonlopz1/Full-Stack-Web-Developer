const axios = require('axios')
let wordsToPlay = []

function getWords() {
    
    const url = 'https://raw.githubusercontent.com/trainingOracle/jogo-da-forca/main/js/wordlist_pt_br.txt'

    return new Promise (resolve => {
        let resultado = ''
        resolve(
            axios.get(url).then(response => {
                response.data.split('\n')     
                })
        )
    })
}

async function doTheJob() {
    let a = await getWords()
    return a
}

doTheJob()
    .then(valor => valor)
    .then(console.log)
