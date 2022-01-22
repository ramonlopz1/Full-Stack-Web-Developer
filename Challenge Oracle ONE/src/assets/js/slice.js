/**
 *  A letr a "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
 */



///

const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"]
const vogals = ["a", "e", "i", "o", "u"]

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


console.log(letsEncrypt("ramon"))
console.log(letsUncrypt())


