/**Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 */

const receberMelhorEstudante = function (objeto) {
    const novoObjeto = {}
    const paraArrays = Object.values(objeto)
    let somador = 0
    let somaNotasArray = []
    let contador = 0

    //Percorrendo arrays de notas
    paraArrays.forEach(function (valor) {
        //Somando valores contidos no array de nota
        for (let i = 0; i < valor.length; i++) {
            somador += valor[i]
            contador++
        }

        //Colocando a media em um novo array
        somaNotasArray.push(somador / contador) // retorna a media e insere no array

        somador = 0 // reseta o valor para que não seja somado com o total do array anterior.
        contador = 0 // reset
    })

    //Procura a maior media no array de medias
    const maiorMedia = Math.max.apply(null, somaNotasArray)

    //Procura o indice da maior media
    const indice = somaNotasArray.indexOf(maiorMedia)

    //Usa o indice da maior media para encontrar o nome do aluno pela chave[indice]
    const alunoMaiorNota = Object.keys(objeto)[indice]

    
    return {nome: alunoMaiorNota, media: maiorMedia}
}



console.log(receberMelhorEstudante({
    Joao: [13, 31.6, 13.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))