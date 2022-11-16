const valor = 'Global'

//Função declarada no contexto léxico deste módulo do node, no caso o arquivo contextoLexico.js
// vai procurar a variável valor que estiver mais perto do contexto léxico
// onde a função foi declarada
function minhaFuncao() {
    console.log(valor)
}

//Chamará a constante com valor 'Global', pois o contexto léxico da função é global, 
//pois a função minhaFuncao(), vai procurar o valor no local onde ela foi definida.
function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()