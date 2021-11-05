//CRIA FUNÇÃO COMPRAS
function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //operador $XOR bit a bit, operador $bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador negação, operação unário

    //RETORNA O RESULTADO DAS CONSTANTES, AO PASSAR OS PARÂMETROS BOOLEANOS NA FUNÇÃO
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //EM CHAVES, cria objeto. LEMBRE-SE!
}

console.log(compras(false, true))
