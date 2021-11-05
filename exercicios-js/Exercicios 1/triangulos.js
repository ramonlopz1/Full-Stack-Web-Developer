const triangulo = function (a, b, c) {
    if(a === b && b === c) {
        console.log(`É Equilátero.`)
    } else if (a === b || b === c || c === a) {
        console.log('É isóceles.')
    } else {
        console.log('É escaleno.')
    }
}

triangulo(2, 3, 2)