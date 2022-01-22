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

function letsDecrypt(nome) {

    this.nomeToArray.forEach((cryptedText, index) => {
        if(cryptoMSG.find(code => code == cryptedText)) {
            nomeToArray[index] = vogals[cryptoMSG.indexOf(cryptedText)]
        }
    })
    return this.nomeToArray
}


console.log(letsEncrypt("ramon"))
console.log(letsDecrypt())

function searchEncryptedMSG (fullText, searchMSG, letter) {
    let indexOfElement = fullText.search(searchMSG)
    let sizeOfElement = searchMSG.length
    let arrayOfMSG = fullText.split("")

    arrayOfMSG.splice(indexOfElement, sizeOfElement, letter)
    arrayOfMSG = arrayOfMSG.join("")
    
    return arrayOfMSG
}



let nomee = "vaiimes tenter fufatdenterr"
    

        for(let letra of nomee) {
            if(nomee.search("ober") !== -1) {
                nomee = searchEncryptedMSG(nomee, "ober", "o")
            } else if (nomee.search("ai") !== -1) {
                nomee = searchEncryptedMSG(nomee, "ai", "a")
            } else if (nomee.search("enter") !== -1) {
                nomee = searchEncryptedMSG(nomee, "enter", "e")
            } else if (nomee.search("imes") !== -1) {
                nomee = searchEncryptedMSG(nomee, "imes", "i")
            } else if (nomee.search("ufat") !== -1) {
                nomee = searchEncryptedMSG(nomee, "ufat", "u")
            }
        }
        console.log(nomee)

    // console.log(nomee.search("ober"))
   // console.log(nomee.slice(4, 8))
    
    
    /**
     *   if(nomee.search("enter")) {
        nomee = nomee.replace("enter", "e")
    } else if(nomee.search("imes")) {
        nomee = nomee.replace("imes", "i")
    } else if(nomee.search("ai")) {
        nomee = nomee.replace("ai", "a")


        else if(nomee.search("ufat")) {
        nomee = nomee.replace("ufat", "u")
    }
     */

    console.log()
    
    console.log(nomee.search("rai"))