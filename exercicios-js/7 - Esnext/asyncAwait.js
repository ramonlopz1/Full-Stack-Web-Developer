// com promise... chamada encadeada

const http = require('http')

const getTurma = letra => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {

            let resultado = ''
    
            // recebendo os dados
            res.on('data', dados => {
                resultado += dados // juntando os dados recebidos na variável $resultado
            })
            
            // todos os dados recebidos
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e) // rejeita se der algum erro. ex: passar uma turma inexistente('D')
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const ta = await getTurma('A')  // atribui a variável ta o resultado de getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))