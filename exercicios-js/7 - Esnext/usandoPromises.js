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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // coloca os valores contidos em getTurma dentro de array
    .then(alunos => alunos.map(aluno => aluno.nome)) // cria array de alunos e insere o nome ded cada aluno
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))
    