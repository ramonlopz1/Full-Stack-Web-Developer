const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }

]

const produtoCaro = function(valor) {
        return valor.preco > 500
}


const produtoFragil = function(valor){
    return valor.fragil
}

const produtoRigido = valor => valor.fragil === false


console.log(produtos.filter(produtoRigido))
console.log(produtos.filter(produtoCaro).filter(produtoFragil))