const sequencia = {

    _valor: 1, // convenção é dita que é privada

    get valor () {
        return this._valor++
    },
    
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

// a variável _valor está privada, só poderá ser acessada pelo get e set


console.log(sequencia.valor, sequencia.valor) // é interpretado como get
 
sequencia.valor = 1000 /// é interpretado como set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia.valor, sequencia.valor)

// não é muito utilizado