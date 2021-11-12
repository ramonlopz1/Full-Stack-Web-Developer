// Questão bônus - Invillia
// Autor: David Ramon Lopes Faustino


const calcConsumoCombustivel = (comprimentoPistaEmMetros, totalVoltas, qtdAbastecimentosDesejados, consumoKmPorLitros) => {

    // Convertendo Metros em Quilômetros
    let comprimentoPistaEmKm = (comprimentoPistaEmMetros / 1000)

    // Definindo consumo de litros para completar uma volta
    let litrosPorVolta = (comprimentoPistaEmKm/consumoKmPorLitros)

    // Definindo consumo de litros para completar todas as voltas do grande prêmio.
    let totalLitrosCompletarCorrida = (litrosPorVolta * totalVoltas)

    // Definindo quantidade mínima por abastecimento, para que o piloto consiga completar todas as voltas da corrida
    let minimoLitrosPorAbastecimento = (totalLitrosCompletarCorrida / qtdAbastecimentosDesejados)

    let distanciaPercorridaAtePrimeiroAbastecimento = (consumoKmPorLitros * minimoLitrosPorAbastecimento)

    return `
        INFORMAÇÕES:
        Comprimento da pista: ${comprimentoPistaEmKm.toFixed(2).replace('.', ',')} quilômetros 
        Consumo de combustível do veículo: ${consumoKmPorLitros}Km/L 
        Total de voltas: ${totalVoltas} 
        Abastecimentos desejados: ${qtdAbastecimentosDesejados} 
        
        
        RESULTADO: 
        Total para completar a corrida: ${totalLitrosCompletarCorrida.toFixed(2).replace('.', ',')} litros 
        Abastecimento mínimo para completar a corrida: ${minimoLitrosPorAbastecimento.toFixed(2).replace('.', ',')} litros 
        Distância percorrida até o primeiro abastecimento: ${distanciaPercorridaAtePrimeiroAbastecimento.toFixed(2).replace('.', ',')} quilômetros`

    }


    console.log(calcConsumoCombustivel(50000, 5, 3, 16))