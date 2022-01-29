// criptografa o valor recebido: substitui vogais por cryptoMSG
const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"];
const vogals = ["a", "e", "i", "o", "u"];

function letsEncrypt(ctx) {
    let ctxToArray = ctx.split("")
    ctxToArray.forEach((letter, index)  => {
        if(vogals.find(vogal => vogal == letter)) {
            ctxToArray[index] = cryptoMSG[vogals.indexOf(letter)]
        }
    })
    return ctxToArray.join("")
};

// caso encontre palavras criptografadas, faz-se a descriptação
function letsDecrypt(ctx) {
    for(let i = 0; i < ctx.length; i ++) {
        ctx = ctx.replaceAll(cryptoMSG[i], vogals[i])
    }
    return ctx
};

// Altera o valor do input com a nova mensagem
const inputMSG = document.querySelector('#inputMSG')
const outputMSG = document.querySelector('#outputMSG')
let isCrypted = true

function sendResultCrypted() {
    
    if (isCrypted) {
        const encryptMSG = letsEncrypt(inputMSG.value)    
        outputMSG.value = encryptMSG
    } else {
        const decryptMSG = letsDecrypt(inputMSG.value)
        outputMSG.value = decryptMSG
    }
};

// eventos onclick para cada tipo de botão

const testCharacters = /^[a-z0-9 ]*$/g
const { animation } = require('./animationContainers')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.onclick = () => {
        if(inputMSG.value.match(testCharacters)) {
            if (button.hasAttribute('uncrypted')) {
                isCrypted = true
            } else if (button.hasAttribute('crypted')) {
                isCrypted = false
            } else {
                outputMSG.select()
                document.execCommand('copy');
            }
                sendResultCrypted()
                animation()
        } else {
            alert('Insira apenas letras minúsculas.')
        }
    }   
});



    
