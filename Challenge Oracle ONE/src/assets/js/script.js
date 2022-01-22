const btnEncrypt = document.querySelector('#btnEncrypt')
const btnDecrypt = document.querySelector('#btnDecrypt')
const outputMSG = document.querySelector('#outputMSG')
const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"]
const vogals = ["a", "e", "i", "o", "u"]
let isCrypted = false

// criptografa o valor recebido
function letsEncrypt (nome) {
    nomeToArray = nome.split("")

    nomeToArray.forEach((letter, index)  => {
        if(vogals.find(vogal => vogal == letter)) {
            nomeToArray[index] = cryptoMSG[vogals.indexOf(letter)]
        }
    })
    return nomeToArray.join("")
}

// procura no valor recebido, palavras criptografadas
function searchEncryptedMSG (fullText, searchMSG, letter) {
    let indexOfElement = fullText.search(searchMSG)
    let sizeOfElement = searchMSG.length
    let arrayOfMSG = fullText.split("")

    arrayOfMSG.splice(indexOfElement, sizeOfElement, letter)
    arrayOfMSG = arrayOfMSG.join("")
    
    return arrayOfMSG
}

// caso encontre palavras encriptadas, faz-se a descriptação
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
    if (isCrypted) {
        const encryptMSG = letsEncrypt(entryMSG)    
        outputMSG.value = encryptMSG
    } else {
        const decryptMSG = letsDecrypt(entryMSG)
        outputMSG.value = decryptMSG
    }
}

// eventos
btnEncrypt.onclick = () => {
    isCrypted = true
    sendResultCrypted()
}

btnDecrypt.onclick = () => {
    isCrypted = false
    sendResultCrypted()
}


