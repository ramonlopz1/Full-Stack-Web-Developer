const $ = require('jquery')
const { head, body, leftArm, rightArm, leftLeg, rightLeg,} = require('./canvas')
$(document).ready(function(){
    let letter = ""
    let erros = 0
    $('body').keypress(function(e) {
        letter = String.fromCharCode(e.which)

        if (letter.match(/^[a-zA-Z]*$/)) {
            setDrawing(sorteiaPalavra)
        }
    });

    const arrayPalavras = ["alura", "ramon", "lopes", "faustino", "pereira", "pinta"]
    const sorteiaPalavra = arrayPalavras[Math.floor(Math.random() * (arrayPalavras.length - 0) + 0)]
    const palavraSecreta = $('#palavraSecreta')

    function letterToLetter(palavra) {
        for(let i = 0; i < palavra.length; i++) {
            palavraSecreta.append($('<span class="spanLetras">').html('_'))
        }
    }

    letterToLetter(sorteiaPalavra)

    function replaceLetter(palavra) {
        for(let i = 0; i < palavra.length; i++) {
            if(palavra[i] === letter) {
                $(`#palavraSecreta span:nth-of-type(${i+1})`).html(letter)
            } 
        }
    }

    function setDrawing(palavra) {
        for(let i = 0; i < palavra.length; i++) {
            if(palavra.search(letter) == -1) {
                erros++
                
                if(erros == 1) {
                    head()
                } else if (erros == 2) {
                    body()
                } else if (erros == 3) {
                    leftArm()
                } else if (erros == 4) {
                    rightArm()
                } else if (erros == 5) {
                    leftLeg()
                } else if (erros == 6) {
                    rightLeg()
                }
               
                break
            } else {
                replaceLetter(palavra)
            }
        }
    }
}); 

