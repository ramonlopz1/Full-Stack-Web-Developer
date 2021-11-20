const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let dadosRecebidos = '';
            res.on('data', dados => {
                dadosRecebidos += dados;
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(dadosRecebidos))
                } catch (e) {
                    reject(e.message)
                }
            })
        })
    })
}

async function doTheJob() {
    const ta = await getTurma('a')
    const tb = await getTurma('D')
    const tc = await getTurma('c')
    return [].concat(ta, tb, tc)
}

doTheJob()
    .then(valor => valor.map(n => n.nome))
    .then(console.log)


