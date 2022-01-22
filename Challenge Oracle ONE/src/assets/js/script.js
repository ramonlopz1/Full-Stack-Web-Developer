const btnEncrypt = document.querySelector('#btnEncrypt')
const btnDecrypt = document.querySelector('#btnDecrypt')
const outputMSG = document.querySelector('#outputMSG')
const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"]
const vogals = ["a", "e", "i", "o", "u"]
let isCrypted = false
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
    
    nomeToArray = nome.split("")

    nomeToArray.forEach((letter, index)  => {
        if(vogals.find(vogal => vogal == letter)) {
            nomeToArray[index] = cryptoMSG[vogals.indexOf(letter)]
        }
    })
    return nomeToArray.join("")
}




function searchEncryptedMSG (fullText, searchMSG, letter) {
    let indexOfElement = fullText.search(searchMSG)
    let sizeOfElement = searchMSG.length
    let arrayOfMSG = fullText.split("")

    arrayOfMSG.splice(indexOfElement, sizeOfElement, letter)
    arrayOfMSG = arrayOfMSG.join("")
    
    return arrayOfMSG
}

function letsDecrypt(nome) {

    for(let letra of nome) {
        if(nome.search("ober") !== -1) {
            nome = searchEncryptedMSG(nome, "ober", "o")
        } else if (nome.search("ai") !== -1) {
            nome = searchEncryptedMSG(nome, "ai", "a")
        } else if (nome.search("enter") !== -1) {
            nome = searchEncryptedMSG(nome, "enter", "e")
        } else if (nome.search("imes") !== -1) {
            nome = searchEncryptedMSG(nome, "imes", "i")
        } else if (nome.search("ufat") !== -1) {
            nome = searchEncryptedMSG(nome, "ufat", "u")
        }
    }
    return nome
}




// Altera o valor do input com a nova mensagem
function sendResultCrypted () {
    
    const entryMSG = document.querySelector('#entryMSG').value
    const encryptMSG = letsEncrypt(entryMSG)
    
    outputMSG.value = encryptMSG

    
}

function sendResultDecrypted () {
    const entryMSG = document.querySelector('#entryMSG').value
    const decryptMSG = letsDecrypt(entryMSG)

    outputMSG.value = decryptMSG
    
}

btnEncrypt.onclick = () => {
    sendResultCrypted()
}

btnDecrypt.onclick = () => {
    sendResultDecrypted()
}
