function Pessoa() {
    this.idade = 0

    const self = this // faz com que o self seja sempre o this referenciado a classe Pessoa, pois é uma constante e nunca mudará

    //intervala a execução do código
    setInterval(function () {
        self.idade++ //se o this nao tivesse sido atribuido a variável $self, o programa iria retornar o this.idade++ do setInterval, ao invés do this da função Pessoa. 
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //esse 1000 é o temporizador que será disparada a função setInterval, no caso 1000ms.
} 
//atribuindo o setInterval(){}.bind(this) à função anônima que é passada pela função setInterval, consiguirá retornar o valor idade = 0 incrementado
//caso contrário o retorno seria NaN pois a função não iria conseguir acessar o atributo $idade da função $pessoa.

//instancia função Pessoa
new Pessoa //retorna a execução da função Pessoa, que chama a função setInterval, que executa a função do console.log(this.idade) a cada 1 segundo.
