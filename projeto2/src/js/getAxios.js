const axios = require('axios')
const url = 'http://127.0.0.1:3003/users'
axios.get(url).then(res => {
    const dados = res.data
    console.log(dados)
})