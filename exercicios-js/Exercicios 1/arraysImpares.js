const arraysImparesPares = () => {
  
    var array = [9, 8, 4, 12, 33, 99, 31]

    /////////////////////// COM FOREACH
    console.log('FOREACH: ')
    array.forEach(
        function (num, indice) {
            if (num % 2 === 0) {
                console.log('É PAR: ' + num)
            } else {
                console.log('É IMPAR: ' + num)
            }
        }
    )
    
    console.log()

    /////////////////////// COM FOR LOOPING
    for (var i = 0 ; i < array.length ; i ++) {
        if (array[i] % 2 === 0) {
            console.log('É PAR: ' + num)
        } else {
            console.log('É IMPAR' + num)
        }
    }
}

arraysImparesPares()

