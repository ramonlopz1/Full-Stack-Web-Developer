function Pessoa() {
    this.idade = 0

    setInterval(() => {   //NESSE CASO, COMO É ARROW FUNCTION, O THIS JÁ ESTÁ REFERENCIANDO O OBJETO PESSOA. OPOSTO DO THIS EM FUNCAO NORMAL
        this.idade++
        console.log(this.idade)
    }, 1000)
}