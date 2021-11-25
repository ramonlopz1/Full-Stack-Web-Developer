module.exports = function(...nomes) {  /// passando uma função com N numero de nomes (array)
    return nomes.map(nome => `Boa semana ${nome}!`) //Mapeando (transformando os valores do array)
}