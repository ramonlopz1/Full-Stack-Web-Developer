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