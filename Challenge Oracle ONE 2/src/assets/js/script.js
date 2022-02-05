const $ = require('jquery')
const { head, body, leftArm, rightArm, leftLeg, rightLeg, chancePoint} = require('./canvas')

$(document).ready(function(){
    let letter = ""
    let errors = 0
    let chances = 6

    const wordsToPlay = ["davi", "ramon", "lopes", "faustino", "carlos", "pedro"]
    const raffleWord = wordsToPlay[Math.floor(Math.random() * (wordsToPlay.length - 0) + 0)]
    
    const numberOfChances = $('#numberOfChances')
    const secretWord = $('#secretWord')
    const finalResult = $('#finalResult')
    const choosedLetter = $('#choosedLetter')

    let inputtedLetters = []

    $('body').keypress(function(e) {
        letter = String.fromCharCode(e.which)
        if (letter.match(/^[a-zA-Z]*$/)) {
            setDrawing(raffleWord)
            compareWords(raffleWord)
            choosedLetter.append(`${letter.toUpperCase()}`)
        }
    })
    
    addPoints(chances)
    
    function addPoints(chances) {
        indent = 20
        for(let i = 0; i < chances; i++) {
            chancePoint(indent)
            indent += 40
        }
    }

    function letterToLetter(ctx) {
        
        for(let i = 0; i < ctx.length; i++) {
            secretWord.append($('<span class="spanLetras">').html('_'))
        }
    }

    

    letterToLetter(raffleWord)

    function replaceLetter(ctx) {
        for(let i = 0; i < ctx.length; i++) {
            if(ctx[i] === letter) {
                $(`#secretWord span:nth-of-type(${i+1})`).html(letter)
            } 
        }
    }

    function compareWords(ctx) {
        for(let i = 0; i < ctx.length; i++) {
            if(ctx[i] === letter) {
                inputtedLetters.push(letter)
            } 
        }
                
        testBothWords(inputtedLetters, ctx)
    }
    
    function setDrawing(ctx) {
        for(let i = 0; i < ctx.length; i++) {    
            
            if(ctx.search(letter) == -1) {
                errors++
                chances--
                numberOfChances.empty('#drawAreaPoints')

                numberOfChances.append('<canvas id="drawAreaPoints"></canvas>')
                addPoints(chances)
                console.log(chances)
                
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
                    finalResult.html('Fim de jogo. Você perdeu todas as chances.')
                }
               
                break
            } else {
                replaceLetter(ctx)
            }
        }
    }

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
            finalResult.html('VOCÊ VENCEU!')
        }           
    }

    

    
}); 


