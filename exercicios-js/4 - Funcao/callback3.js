// Exemplo de callback no browser

//body na posição 0 (primeiro body do documento)
document.getEelementsByTagName('body')[0].onclick = function (e) {      //através do documento, indica que ao clicar no $body, a função será executada.
    console.log('O evento ocorreu!')
} 

