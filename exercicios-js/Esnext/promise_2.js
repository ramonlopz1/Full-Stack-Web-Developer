
// resolvendo o Promise após X tempo
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve() // após o resolve, o then pode ser chamado, pois a promessa foi cumprida.
        }, tempo)
    })
}

esperarPor().then(() => esperarPor()) //vai esperar 2 sec e executar, depois 2sec e executar..
    .then(() => esperarPor()) //depois 2 sec e executar