const $ = require('jquery')
const { head, body, leftArm, rightArm, leftLeg, rightLeg, chancePoint} = require('./canvas')
const secretWord = $('#secretWord')
const finalMSG = $('#finalMSG')
const choosedLetter = $('#choosedLetter')

let remoteWords = []
let wordsToPlay = []
let raffleWord = ""
let letter = ""
let errors = 0
let chances = 6
let inputtedLetters = []
let alreadyUsedLetters = ""

// RECEBE AS PALAVRAS TXT E PASSA PARA ARRAY
async function getWords () {
    remoteListOfWords = await fetch('https://raw.githubusercontent.com/trainingOracle/jogo-da-forca/main/js/wordlist_pt_br.txt')
        .then(response => response.text())
        .then(response => response.split('\n'))
        .catch(err => console.log(err));                     
        return remoteListOfWords                  
};

// CUMPRE A PROMISE
(async function doTheJob () {
    remoteWords = await getWords()

        // cria novo array apenas com 10 palavras aleatórias
        for(let i = 0; i < 10; i++) {
            wordsToPlay.push(remoteWords[Math.floor(Math.random () * (10000 - 0) + 0)])
        }

    raffleWord = wordsToPlay[Math.floor(Math.random() * (wordsToPlay.length - 0) + 0)]
    avaibleWords()
    letterToLetter(raffleWord)
})()

// CRIA DIV COM AS PALAVRAS DISPONÍVEIS
function avaibleWords() {
        const avWords = $('#avaibleWords #words')
        for(let i = 0; i < 10; i++) {
            avWords.append(`<div>${wordsToPlay[i]}`)
        }
    }

// TRANSFORMA AS LETRAS DA PALAVRA EM UNDERLINES
function letterToLetter(ctx) {
    for(let i = 0; i < ctx.length; i++) {
        secretWord.append($('<span class="spanLetras">').html('_'))
    }
}

 // TRANSFORMA OS UNDERLINES NAS LETRAS CORRETAS
 function replaceLetter(ctx) {
    for(let i = 0; i < ctx.length; i++) {
        if(ctx[i] === letter) {
            $(`#secretWord span:nth-of-type(${i+1})`).html(letter)
        } 
    }
}

// INSERE A QUANTIDADE DE PONTOS ATUAL NA BARRA DE VIDA
function addPoints(chances) {
    indent = 20
    for(let i = 0; i < chances; i++) {
        chancePoint(indent)
        indent += 40
    }
}

addPoints(chances)

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

 // COMPARA A PALAVRA RECEBIDA COM A PALAVRA SECRETA
 function compareWords(ctx) {
    for(let i = 0; i < ctx.length; i++) {
        if(ctx[i] === letter) {
            inputtedLetters.push(letter)
        } 
    }
    testBothWords(inputtedLetters, ctx)
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
            wordsToPlay.push(input.val().toUpperCase())
        }

        $('#words').empty()
        
        avaibleWords()
        
        // REATIVA O KEYPRESS
        $('input').bind('keypress', function(e) {
            e.stopPropagation(); 
        });
    })
}
    
insertWords()

$('body').keypress(function(e) {
    
    letter = String.fromCharCode(e.which).toUpperCase() // CONVERTE CÓDIGO WHICH(CharCode) EM LETRAS
    if (letter.match(/^[a-zA-Z]*$/)) { // TESTE (APENAS LETRAS)
        setDrawing(raffleWord)
        compareWords(raffleWord)
        
        // INSERE LETRAS JÁ UTILIZADAS (se não houver, se tiver espaço, se tiver chances)
        if(alreadyUsedLetters.search(letter) == -1 && alreadyUsedLetters.length < 10 && chances > 0) {
            alreadyUsedLetters = alreadyUsedLetters.concat(letter)
            choosedLetter.append(letter)
        }
    }
})




