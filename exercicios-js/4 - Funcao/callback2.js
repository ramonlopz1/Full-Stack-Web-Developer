const notas = [7, 6, 5, 8, 3, 7, 9]

// Semm callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) { //o filter retorna true ou false. se a função passada no filter for true, o return será executado.
    return nota < 7
}) // FILTER: se retornar true, será adicionado ao array. O filter nao altera o array notas, apenas retorna o valor $nota < 7!!!

console.log(notasBaixas2)

//MESMA COISA MAS COM ARROWFUNCTION
const notasMenorQue7 = nota => nota < 7
var notasBaixas3 = notas.filter(nota => nota < 7)
/*OU */ 
console.log(notasBaixas3)
var notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)