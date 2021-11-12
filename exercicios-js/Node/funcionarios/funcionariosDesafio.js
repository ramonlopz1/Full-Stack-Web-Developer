const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //é um client http, faz requisições para obter informações de algo que está remoto

axios.get(url).then(response => {
    const funcionarios = response.data // responde os dados do URL

    const arrayApenasChina = []

    const apenasSalario = valor => valor.salario

    funcionarios.forEach(function(valor){
        if(valor.pais === "China") {
            arrayApenasChina.push(valor)
        }
    })


    let menorValor = Math.min.apply(null, arrayApenasChina.map(apenasSalario))
    

   
    console.log(menorValor)
})


