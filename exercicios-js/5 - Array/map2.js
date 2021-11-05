// Array com JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',  // se for string: aspas duplas
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

// Com o método map, retorne um array apenas com os preços

const paraObjeto = valor => JSON.parse(valor)
const apenasPreco = valor => valor.preco
const apenasNome = valor => valor.nome
console.log(carrinho.map(paraObjeto).map(apenasPreco))
console.log(carrinho.map(paraObjeto).map(apenasNome))
