class CarModel {
    nome;
    velocidade;

    constructor(nome, velocidade) {
        this.nome = nome
        this.velocidade = velocidade
    }
    

    acelerar() {
        this.velocidade += 15
    }

    get velocidade() {
        return new CarModel(this.nome, this.velocidade).velocidade
    }
}

const uno = new CarModel('uno', 50)

uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.velocidade)
