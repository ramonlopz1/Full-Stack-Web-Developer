const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


// A função passada para o forEach recebe três params: valor, indice e array
// RETORNA ÍNDICE + VALOR
aprovados.forEach(
    function(valor, indice, array) {
        console.log(`${indice + 1} ${valor}`)
        console.log(array)
    }
)

// RETORNA O VALOR
aprovados.forEach(
    nome => console.log(nome)
)

const exibirAprovados = aprovado => console.log(aprovado)

// RETORNANDO VALOR, CHAMANDO FUNÇÃO EXISTENTE
aprovados.forEach(exibirAprovados)