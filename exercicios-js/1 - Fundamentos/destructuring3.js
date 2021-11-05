
//FUNÇÃO COM DESCONTRUCTING COMO PARÂMETRO
function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min //cria um random.
    return Math.floor(valor) //redorna o valor arredondado para baixo
}

const obj = {max: 50, min: 40 } //criação de objeto com chave e valor
console.log(rand(obj)) //função $rand recebendo o objeto criado ==== retorna a função rand com os valores do objeto

console.log(rand({min: 955})) //passando apenas o parâmetro $min, pois o max já foi definido

console.log(rand({})) // parâmetro vazio, já foi defindo $min = 0 e $mmax = 1000, retorna random entre esses valores
