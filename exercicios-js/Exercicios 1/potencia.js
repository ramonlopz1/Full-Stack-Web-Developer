const potencia = function (base, expo) {
    result = 1
    for (var i = 0 ; i < expo ; i++) {
        result = result * base
        
    }
    return result
}

console.log(potencia(2, 6))
