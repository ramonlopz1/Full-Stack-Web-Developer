function criarPessoa(nome) {
    //recebendo o parâmetro:
    this.nome = nome

    //criando função pública:
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


//instância da função construtora:
const p1 = new criarPessoa('Ramon')

p1.falar()