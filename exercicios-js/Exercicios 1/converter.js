const converter = function (a) {
    return `R$ ${a.toFixed(2).replace(".", ",")}`
}

console.log(converter(332.03029))