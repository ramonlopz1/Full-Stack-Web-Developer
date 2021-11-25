function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}


// vide regra coloque o catch na última posição.
funcionarOuNao('Testando...', 1) // se passar 1 será reject, se passar 0.1 será resolve
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`)) // tratando o erro
     

/**
 * functionarOuNao('Testenado...', 0.5)
 *  .then(v => v)
 *  . then( v => console.log, err => consolelog(erro)
*             
 * )
 * 
 */