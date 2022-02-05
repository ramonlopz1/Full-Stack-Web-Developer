const wrongArray = ["a", "r", "n", "m", "o"]
const correctArray = ["r", "a", "m", "o", "n"]
const newArray = []
let element = ""



function arraymove(wrongArray, correctArray) {

    for(let i = 0; i < wrongArray.length; i++) {
        element = wrongArray[i] // a
        toIndex = correctArray.indexOf(element) // 1
       
        newArray[toIndex] = element // a partir de 3, remova nenhum e insira 1
    }

    return newArray
}


console.log(arraymove(wrongArray, correctArray))



