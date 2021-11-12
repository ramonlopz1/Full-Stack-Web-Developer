/**Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
 */

const objts = [
    {nome: 'Calca', preco: 3.55},
    {nome: 'Blusa', preco: 4.55},
    {nome: 'Camisa', preco: 5.55},
    {nome: 'Short', preco: 1.55},
]

const apenasPreco = valor => valor.preco
var resultado = 0
var arrayPrecos = objts.map(apenasPreco)
for (let i = 0; i < arrayPrecos.length ;i++) {
    resultado = resultado + arrayPrecos[i]
}
console.log(resultado)