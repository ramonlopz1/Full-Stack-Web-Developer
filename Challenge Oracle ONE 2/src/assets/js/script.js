const $ = require('jquery')
const { head, body, leftArm, rightArm, leftLeg, rightLeg, chancePoint} = require('./canvas')

$(document).ready(function(){
    let letter = ""
    let errors = 0
    let chances = 6

    const wordsToPlay = ["davi", "ramon", "lopes", "faustino", "carlos", "pedro"]
    const raffleWord = wordsToPlay[Math.floor(Math.random() * (wordsToPlay.length - 0) + 0)]
    
    const secretWord = $('#secretWord')
    const finalMSG = $('#finalMSG')
    const choosedLetter = $('#choosedLetter')

    let inputtedLetters = []
    let alreadyUsedLetters = ""

    // KEYPRESS: ENTRADA DE TECLAS (apenas letras aA)
    $('body').keypress(function(e) {
        
        letter = String.fromCharCode(e.which) // CONVERTE CÓDIGO WHICH(CharCode) EM LETRAS
        if (letter.match(/^[a-zA-Z]*$/)) { // TESTE (APENAS LETRAS)
            setDrawing(raffleWord)
            compareWords(raffleWord)
            
            // INSERE LETRAS JÁ UTILIZADAS (se não houver, se tiver espaço, se tiver chances)
            if(alreadyUsedLetters.search(letter.toUpperCase()) == -1 && alreadyUsedLetters.length < 10 && chances > 0) {
                alreadyUsedLetters = alreadyUsedLetters.concat(letter.toUpperCase())
                choosedLetter.append(letter.toUpperCase())
            }
        }
    })
    
    // INSERE A QUANTIDADE DE PONTOS ATUAL NA BARRA DE VIDA
    function addPoints(chances) {
        indent = 20
        for(let i = 0; i < chances; i++) {
            chancePoint(indent)
            indent += 40
        }
    }

    addPoints(chances)

    // TRANSFORMA AS LETRAS DA PALAVRA EM UNDERLINES
    function letterToLetter(ctx) {
        for(let i = 0; i < ctx.length; i++) {
            secretWord.append($('<span class="spanLetras">').html('_'))
        }
    }

    letterToLetter(raffleWord)

    // TRANSFORMA OS UNDERLINES NAS LETRAS CORRETAS
    function replaceLetter(ctx) {
        for(let i = 0; i < ctx.length; i++) {
            if(ctx[i] === letter) {
                $(`#secretWord span:nth-of-type(${i+1})`).html(letter.toUpperCase())
            } 
        }
    }

    // COMPARA A PALAVRA RECEBIDA COM A PALAVRA SECRETA
    function compareWords(ctx) {
        for(let i = 0; i < ctx.length; i++) {
            if(ctx[i] === letter) {
                inputtedLetters.push(letter)
            } 
        }
        testBothWords(inputtedLetters, ctx)
    }
    
    // DESENHA O BONECO EM CASO DE ERROS
    function setDrawing(ctx) {
        for(let i = 0; i < ctx.length; i++) {    
            if(ctx.search(letter) == -1) {
                errors++
                chances--

                // LIMPA O CANVAS E INSERE ATUAL QUANTIDADE DE CHANCES
                const canvas = document.querySelector('#drawAreaPoints')
                const ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                addPoints(chances)

                // INSERE MEMBRO A MEMBRO DO BONECO E O RESULTADO FINAL
                if(errors == 1) {
                    head()
                } else if (errors == 2) {
                    body()
                } else if (errors == 3) {
                    leftArm()
                } else if (errors == 4) {
                    rightArm()
                } else if (errors == 5) {
                    leftLeg()
                } else if (errors == 6) {
                    rightLeg()
                } else if (errors >= 6) {
                    finalMSG.html('Fim de jogo. Você perdeu todas as chances.')
                    $('#btnPlayAgain').css('display', 'block')
                }
                
                break // BREAK NO FOR, SEM O BREAK O "FOR" FARÁ CLEAR EM TODOS OS PONTOS
            } else {
                replaceLetter(ctx)
            }
        }
    }

    // AJUSTA A ORDEM DAS LETRAS RECEBIDAS, PARA COMPARAÇÃO COM A PALAVRA SECRETA
    function testBothWords(wrongCtx, ctx) {
        let newCtx = []
        ctx = ctx.split("")
        
        for(let i = 0; i < wrongCtx.length; i++) {
            element = wrongCtx[i] // a
            toIndex = ctx.indexOf(element) // 1
            newCtx[toIndex] = element // a partir de 3, remova nenhum e insira 1
        }
        
        newCtx = newCtx.join("")
        ctx = ctx.join("")
        if(ctx == newCtx) {
            finalMSG.html('VOCÊ VENCEU!')
            $('#btnPlayAgain').css('display', 'block')
        }           
    }

    // INSERE NA DOM AS PALAVRAS DISPONÍVEIS PARA JOGAR
    function avaibleWords() {
        const avWords = $('#avaibleWords #words')

        for(words of wordsToPlay) {
            avWords.append(`<div>${words.toUpperCase()}`)
        }
    }

    

    // INSERIR NOVAS PALAVRAS

    function insertWords() {
        const btnAdd = $('#btnAdd')
        const insWords = $('#insertWords')
        const input = $('input')
        const btnOk = $('#insertWords div button')

        btnAdd.click(() => {
            insWords.css('display', 'flex')
            input.focus()
            $('input').bind('keypress', function(e) {
                e.stopPropagation(); 
            });

        })

        
        btnOk.click(() => {
            insWords.css('display', 'none')

            // INSERE NOVAS PALVRAS NO ARRAY COM CONDIÇÕES
            if(!wordsToPlay.find(value => value == input.val()) && (input.val()).search(" ") == -1) {
                wordsToPlay.push(input.val())
            }

            $('#words').empty()
            avaibleWords()

            // REATIVA O KEYPRESS
            $('input').bind('keypress', function(e) {
                e.stopPropagation(); 
            });
        })
    }
    avaibleWords()

    insertWords()
}); 


