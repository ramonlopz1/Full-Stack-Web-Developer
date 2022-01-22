const outputMSG = document.querySelector('#outputMSG')
const btnEncrypt = document.querySelector('#btnEncrypt')
const btnDecrypt = document.querySelector('#btnDecrypt')
const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"]
const vogals = ["a", "e", "i", "o", "u"]

// Muda as vogais para os valores criptografados
/**
 * function changeVogals(msg) {
    let arrayMsg = msg.split("")

    arrayMsg.forEach((valor, indice) => {
        if(valor == "e") {
            arrayMsg[indice] = "enter"
        } else if (valor == "i") {
            arrayMsg[indice] = "imes"
        } else if (valor == "a") {
            arrayMsg[indice] = "ai"
        } else if (valor == "o") {
            arrayMsg[indice] = "ober"
        } else if (valor == "u") {
            arrayMsg[indice] = "ufat"
        }
    })
    return arrayMsg
}
 */



function letsEncrypt (nome) {
    
    this.nomeToArray = nome.split("")

    nomeToArray.forEach((letter, index)  => {
        if(vogals.find(vogal => vogal == letter)) {
            this.nomeToArray[index] = cryptoMSG[vogals.indexOf(letter)]
        }
    })
    return this.nomeToArray
}

function letsUncrypt(nome) {

    this.nomeToArray.forEach((cryptedText, index) => {
        if(cryptoMSG.find(code => code == cryptedText)) {
            nomeToArray[index] = vogals[cryptoMSG.indexOf(cryptedText)]
        }
    })
    return this.nomeToArray
}

// Altera o valor do input com a nova mensagem
function changeVal(msg) {
    const entryMSG = document.querySelector('#entryMSG').value

    const encryptMSG = letsEncrypt(entryMSG)

    outputMSG.value = encryptMSG.join("")
    
}

btnEncrypt.onclick = () => {
    changeVal()
}

