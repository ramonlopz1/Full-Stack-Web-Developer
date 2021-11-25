const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //é um client http, faz requisições para obter informações de algo que está remoto


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (acumulador, atual) => {
    return acumulador.salario > atual.salario ? acumulador : atual
}

axios.get(url).then(response => {
    const funcionarios = response.data // responde os dados do URL

    // mulher chinesa com menor salário?
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})