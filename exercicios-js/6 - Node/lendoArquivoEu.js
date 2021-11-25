const fs = require ('fs')

const arquivo = __dirname + '/arquivos.json'

const conteudo = fs.readFileSync(arquivo, 'utf-8') 
console.log(conteudo)


fs.readFile(arquivo, 'utf-8', (err, dadosDoArquivo) => {
    const config = JSON.parse(dadosDoArquivo)
    
    console.log(
    `HOST: ${config.db.host}
    Porta: ${config.db.port}
    Usuário: ${config.db.user}
    Senha: ${config.db.pass}`
    
    )
})



fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta atual:')
    console.log(arquivos)
})