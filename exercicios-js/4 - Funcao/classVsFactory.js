// CLASS - PRATICAMENTE IGUAL A JAVA:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`) //LEMBRANDO DE USAR THIS, PARA REFERENCIAR À CLASS, CASO NAO TIVER THIS, DIRÁ QUE A VARIÁVEL $NOME NÃO EXISTE
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// FUNCTION FACTORY - MESMA COISA, O QUE MUDA É QUE NÃO É NECESSÁRIO ACESSAR ATRAVÉS DO THIS, POIS A PRÓPRIA FUNÇÃO USA O CONTEXTO LÉXICO EM QUE FOI DECLARADO 

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`) // NÃO PRECISA USAR O THIS, POIS ELE É PASSADO NO ARROWFUNCTION
    }
}

const p2 = pessoa('Joaão')
p2.falar()

