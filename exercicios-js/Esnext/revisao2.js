// Arrow Function

const soma = (a, b) => a + b

console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // true, se fosse funcao normal retornaria false
const lexico2 = lexico1.bind({}) // msm que peça pra apontar para outro objeto, o this apontará para o lexico1
lexico1()
lexico2()

// parametro default

function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest / spread (...)

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))
