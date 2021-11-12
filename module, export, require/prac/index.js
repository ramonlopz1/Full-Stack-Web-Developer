const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

const chineses = valor => valor.pais === 'China'
const homens = valor => valor.genero === 'M'

const menorSalario = function(acumulador, valor) {
    if (acumulador.salario < valor.salario) {
        return acumulador
    } else {
        return valor
    }
}



axios.get(url).then(response => {
    const funcionarios = response.data

    console.log(funcionarios.filter(chineses).filter(homens).reduce(menorSalario))
})