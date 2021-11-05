let contador = 1
while (contador <=10) {
    console.log(`Contador while: ${contador}`)
    contador++
    
}

///////

for (let i = 1 ; i < 10 ; i++) {
    console.log(`Contador for: ${i}`)
}

///////
//PERCORRENDO O ARRAY COM O $FOR & $LENGTH
const notas = [6, 5, 4, 2, 5, 6, 9]

for (let i = 0 ; i < notas.length ; i++) {
    console.log(`Notas = ${notas[i]}`)  // RETORNA O ARRAY $NOTAS NO INDEX $I
}