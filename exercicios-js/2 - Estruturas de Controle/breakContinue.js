const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//BREAK
// VAI PARAR O FOR QUANDO CHEGAR NO ÍNDICE DO VALOR 5.
for (x in nums) {
    if ( x == 5) {
        break //vai interrompe o for e sai do laço, continuando o código da próxima seção
    }
        
        console.log(`${x} = ${nums[x]}`) //retorna o ÍNDICE E O VALOR
    }
console.log('')
    //CONTINUE
    for (y in nums) {
        if (y == 5) {
            continue //vai interromper a execução atual, no caso $5 e pular para próxima execução. ou seja de 4 para 6
        }
        console.log(`${y} = ${nums[5]}`)
    }


    // NÃO USE!
    //RÓTULO: Isso é um $rótulo, vai conter todo o $for \/.
    externo: 
    for ( a in nums) { // 1 2 3 4 5 6 7 8 9 0
        for (b in nums) { // 1 2 3 4 5 6 7 8 9
            if (a == 2 && b == 3 ) break externo //indica que o break é referente ao $for rotulado $externo. se não for indicado, ele irá dar break no código interno, ou seja, no código mais próximo dele.
            console.log(`Par: ${a}, ${b}`) //a = 0
        }
    }