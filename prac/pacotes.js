const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasChina = valor => valor.pais === 'China'
const apenasMulher = valor => valor.genero === 'F'
const maiorSalario = (anterior, atual) => {
    return anterior.salario < atual.salario ? anterior : atual
}


axios.get(url).then(response => {
    const doc = response.data

    console.log(doc.filter(apenasChina).filter(apenasMulher).reduce(maiorSalario))

})