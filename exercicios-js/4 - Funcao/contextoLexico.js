const valor = 'Global'

//Função declarada no contexto léxico deste módulo do node, no caso o arquivo contextoLexico.js
function minhaFuncao() {
    console.log(valor)
}

//Chamará a constante com valor 'Global', pois seu contexto léxico é global, 
//pois a função $minhaFuncao(), vai procurar o valor no local onde ela foi definida.
function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()