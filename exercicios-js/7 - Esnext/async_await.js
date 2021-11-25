
// resolvendo o Promise após X tempo
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve() // após o resolve, o then pode ser chamado, pois a promessa foi cumprida.
        }, tempo)
    })
}


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function executar() {

    let valor = await retornarValor();

    await esperarPor(1500) // só vai pra próxima linha quando finalizar esse, pelo AWAIT
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executar()
    .then(console.log)