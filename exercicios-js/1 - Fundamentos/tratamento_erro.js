function tratarErroELancar(erro) {
    // throw new Error ('SISTEMA COM ERRO DE PROCESSAMENTO') //o Throw é o que lança no console
    // throw 10, true, 'string' pode lançar qualquer valor ou tipo

    //ou entao pode retornar um object
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date(0),
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') // vai dar erro pois a variável $name não foi devinida, a menos que utilize o TRY
    } catch (e) {
        tratarErroELancar(e) //SE DEER ERRO EXECUTE A FUNÇÃO TRATAR ERRO E LANÇAR (QUE FOI DEFINIDA NO INÍCIO)
    } finally {
        console.log('FINALLY SERÁ EXECUTADO CASO O $TRY NÃO SEJA EXECUTADO')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)