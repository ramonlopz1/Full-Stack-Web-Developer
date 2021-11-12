const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = valor => valor.pais === 'China'
const mulheres = valor => valor.genero === 'F'
const menorSalario = (acumulador, atual) => {
    return acumulador.salario < atual.salario ? acumulador : atual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const filtrando = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(filtrando)
})

