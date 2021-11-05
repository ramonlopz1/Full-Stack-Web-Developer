let comparaComThis = function(param) {
    console.log(this === param)
}


comparaComThis(global) // TRUE: o $this neste caso é global, mesmo que esteja no escopo de uma função.

const obj = {

}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)  // FALSE: o $this agora pertence ao $obj
comparaComThis(obj) // TRUE: o $this pertence ao $obj


let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) // FALSE: o $this atraves da ARROW FUNCTION pertence ao objeto que esta inserido
comparaComThisArrow(module.exports)  // THUS this === this 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)