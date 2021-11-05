const fabricantes = ["Mercedes", "Audi", "BMW"]

//callback será a função imprimir, que será chamada em cada elemento do array.
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//forEach é uma função de ARRAYS
//Mesmo sem passar os parâmetros da função $imprimir, o próprio EC6 atribui o valor do índice à variavel $nome
fabricantes.forEach(imprimir) //Vai executar a função $imprimir em cada valor do array $fabricantes.

fabricantes.forEach(function(fabricantes) { //Como a função tem apenas 1 parâmetro, esse parâmetro vai ser o valor do índice de cada array.
    console.log(fabricantes)
}) 


//MESMA COISA, SÓ QUE EM ARROWFUNCTION
fabricantes.forEach(fabricantes => console.log(fabricantes))