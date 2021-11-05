const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar() // ACESSA O ATRIBUTO $saudacao DO OBJETO PESSOA, através da função $falar, referenciada pelo THIS

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO. Retorna UNDEFINED pois o this está referenciado à constante $falar e não ao objeto $pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) //para resolver o problema anterior, utilizamos $bind, ela vai referenciar ao parâmetro passado, nesse caso $pessoa
falarDePessoa() //retorna bom dia! ou seja, devido ao $bind, o this está sendo referenciado ao objeto pessoa

/*o $this fica meio que solto. você vai referênciar o objeto desejado através de um this amarrado em um .bind(objeto desejado) */