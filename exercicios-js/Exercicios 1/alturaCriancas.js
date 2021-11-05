function taxaCrescimento(altura1, taxa1, idade1, altura2, taxa2, idade2) {
    var anos = 0
    var maiorCriancaAltura = 0
    var menorCriancaAltura = 0

    if (altura1 > altura2) {    // IDENTIFICANDO A MAIOR CRIANÇA 
        maiorCriancaAltura = altura1
        maiorCriancaTaxa = taxa1
        maiorCriancaIdade = idade1

        menorCriancaAltura = altura2
        menorCriancaTaxa = taxa2
        menorCriancaIdade = idade2

    } else if (altura2 > altura1) {     // IDENTIFICANDO A MENOR CRIANÇA 
        maiorCriancaAltura = altura2
        maiorCriancaTaxa = taxa2
        maiorCriancaIdade = idade2

        menorCriancaAltura = altura1
        menorCriancaTaxa = taxa1
        menorCriancaIdade = idade1
    }

    if (altura1 !== altura2) {      // TESTANDO SE OS TAMANHOS SÃO DIFERENTES
        
        while (menorCriancaIdade != 21 && maiorCriancaIdade != 21) { // ENQUANTO O RESULTADO FOR VERDADE; EXECUTE: Enquanto uma das crianças não tiver 21 anos.
            anos++

            // INCREMENTO DA IDADE (VAI ATÉ 21 ANOS)
            menorCriancaIdade++
            maiorCriancaIdade++

            // APLICANDO A TAXA ANUALMENTE DE FORMA COMPOSTA
            menorCriancaAltura = menorCriancaAltura * menorCriancaTaxa
            maiorCriancaAltura = maiorCriancaAltura * maiorCriancaTaxa

            // SE A MENOR ULTRAPASSAR: BREAK
            if (menorCriancaAltura > maiorCriancaAltura) {
                console.log('A MENOR ULTRAPASSOU!!')
                console.log()
                console.log('IDADE EM QUE A MENOR ULTRAPASSOU A MAIOR: ' + menorCriancaIdade)
                console.log('LEVOU ' +  anos + ' anos para a criança ultrapassar.')
                console.log('Altura final das crianças:')
                console.log('MENOR CRIANÇA ALTURA: ' + menorCriancaAltura.toFixed(2))
                console.log('MENOR CRIANÇA IDADE: ' + menorCriancaIdade)
                console.log()
                console.log('MAIOR CRIANÇA ALTURA: ' + maiorCriancaAltura.toFixed(2))
                console.log('MAIOR CRIANÇA IDADE: ' + maiorCriancaIdade)
                break

            }
        }

        // SE A MENOR NÃO ULTRAPASSAR:
        if (maiorCriancaAltura > menorCriancaAltura) {
            console.log('A MENOR CRIANÇA NÃO ULTRAPASSOU A MAIOR CRIANÇA.')
            console.log()
            console.log('Altura final das crianças:')
            console.log('MENOR CRIANÇA ALTURA: ' + menorCriancaAltura.toFixed(2))
            console.log('MENOR CRIANÇA IDADE: ' + menorCriancaIdade)
            console.log()
            console.log('MAIOR CRIANÇA ALTURA: ' + maiorCriancaAltura.toFixed(2))
            console.log('MAIOR CRIANÇA IDADE: ' + maiorCriancaIdade)
        }
    }
}

taxaCrescimento(100, 1.05, 9, 120, 1.03, 11)