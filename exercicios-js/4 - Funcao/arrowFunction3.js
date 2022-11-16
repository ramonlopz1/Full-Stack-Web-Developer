let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // TRUE: o this neste caso é global, mesmo que esteja no escopo de uma função.

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)  // FALSE: o this agora pertence ao obj
comparaComThis(obj) // TRUE: o this pertence ao obj
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) // FALSE: o this atraves da ARROW FUNCTION não varia
comparaComThisArrow(module.exports)  // TRUE: this da ARROW FUNC mantém a referência de onde a função foi escrita (dentro de um módulo do nodejs)

comparaComThisArrow = comparaComThisArrow.bind(obj) // ARROW FUNC NÃO ACEITA O BIND 
comparaComThisArrow(global)