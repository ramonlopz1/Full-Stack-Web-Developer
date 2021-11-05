const bissexto = function (ano) {
    
    if (ano % 100 !== 0 && ano % 4 === 0) {
        return `É bissexto`
    } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
        return `É bissexto`
    } else {
        return `Não é bissexto`
    }

}

console.log(bissexto(2024))