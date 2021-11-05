

function Jogo(valor) {

    var array = [10, 20, 20, 8, 25, 3, 5, 30, 5]   
    var maior = Math.max.apply(null, array)
    var menor = Math.min.apply(null, array)
    var array2 = []
    var bateuRecord = 0

    this.comparacao = function (valor) {
        if (valor > maior) {
            bateuRecord++ //NÚMERO DE VEZES QUE BATEU O RECORD
            array2[0] = bateuRecord //INSERINDO NO ARRAY
            array2[1] = array.indexOf(menor) //INSERINDO POSIÇÃO DA MENOR PONTUAÇÃO
        } 
    }

    this.getResultado = function () {
        return array2
    }
}


const jogo1 = new Jogo(50)

jogo1.comparacao(30)
jogo1.comparacao(50)
jogo1.comparacao(60)
jogo1.comparacao(80)

jogo1.comparacao(1)
jogo1.comparacao(2)
jogo1.comparacao(3)

console.log(jogo1.getResultado())





