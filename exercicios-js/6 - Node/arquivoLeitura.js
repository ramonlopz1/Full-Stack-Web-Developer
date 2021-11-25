const fs = require('fs') // fs: filesystem é um módulo padrão do node
const caminho = __dirname + '/arquivos.json'  // dirname é o diretório atual

// SÍNCRONA
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ASSÍNCRONA FARÁ UMA REQUISÃO, PARA DEPOIS LER O ARQUIVO... // FORMA RECOMENDADA
fs.readFile(caminho, 'utf-8', (err, conteudo) => {

    const config = JSON.parse(conteudo) //transforma o JSON em um objeto(caso contrário n seria possível acessar db.host e db.port pela notação ponto)

    console.log(`${config.db.host}:${config.db.port}`)
})

// FORMA RESUMIDA DE LER UM ARQUIVO DE FORMA SINCRONA:
const config = require('./arquivos.json')
console.log(config.db)

// para ler uma pasta
fs.readdir(__dirname, (err, arquivos) => { // dirname é o diretório atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) 
