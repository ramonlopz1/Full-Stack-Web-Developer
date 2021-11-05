

const funcs = []
// Insere valor no array através do push 'i' vezes, cada índice vai receber a função, que contém o resultado final de i incrementado, pois o var é global como vimos anteriormente.
for (var i = 0; i < 10; i++ ) { 
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


// Já o let vai retornar o resultado da soma naquele index, não sendo o total da soma, como no var.
for (let i = 0; i < 10; i++ ) { 
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()