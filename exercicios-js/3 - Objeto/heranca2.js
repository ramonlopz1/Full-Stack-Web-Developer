const avo = { 
    attr1: 'A'
}

const pai = {
    __proto__: avo, 
    attr2: 'B'
} //indica que o prototype do pai é o avo e o pai recebe o attr2


const filho = {
    __proto__: pai, 
    attr3: 'C'
} //indica que o prototype do filho é o pai e recebe o attr3




console.log(filho.attr1) //busca no filho, depois no pai e por fim no avo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreia variáveis de escopo mais abrangente (override))
}

const volvo = {
    modelo: 'V40',
    status() { //override a função status
        return `${this.modelo}: ${super.status()}` //chama a função status da superclass
    }
}

Object.setPrototypeOf(ferrari, carro) // INDICA QUE FERRARI TEM CARRO COMO SEU PROTOTYPE (COMO SUA SUPERCLASS)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status( ))