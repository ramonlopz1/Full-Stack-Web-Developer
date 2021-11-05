//PARÂMETROS E RETORNOS SAO OPCIONAIS


function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)

    } else {
        return area
    }
}

console.log(area(2, 2)) // retorna 4
console.log(area(2)) // retorna not a number
console.log(area()) // retorna not a number
console.log(area(1, 2, 3, 4, 5)) // retorna apenas os 2 primeiros