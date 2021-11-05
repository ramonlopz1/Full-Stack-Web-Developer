function strings(string1, string2) {
    let caixaAlta1 = string1.toUpperCase()
    let caixaAlta2 = string2.toUpperCase()

    if (caixaAlta1 === caixaAlta2) {
        return true
    } else {
        return false
    }

}

console.log(strings('ramon', 'rAmon'))