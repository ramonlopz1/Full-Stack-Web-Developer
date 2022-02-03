const $ = require('jquery')

$(document).ready(function(){
    const arrayPalavras = ["alura", "ramon", "lopes", "faustino", "pereira", "pinto"]
    const sorteiaPalavra = arrayPalavras[Math.floor(Math.random() * (arrayPalavras.length - 0) + 0)]

    const palavraSecreta = $('#palavraSecreta')

    function letraALetra(palavra) {

        for(let i = 0; i < palavra.length; i++) {
            palavraSecreta.append($('<span class="spanLetras">').html('_'))

        }
    }

    letraALetra(sorteiaPalavra)
});


$('body').keyup(function (e) {
    const valor = $(this).val()
    console.log(valor)
})