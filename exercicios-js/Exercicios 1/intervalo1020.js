var intervalo1020 = () => {
    
    array = [2, 10, 99, 12, 34, 92, 15, 5, 20]


    array.forEach(
        function (num, indice) {
            if (num >= 10 && num <= 20) {
                console.log('ESTÁ NO INTERVALO DE [10,20]: ' + num)
            } else {
                console.log('NÃO ESTÁ NO INTERVALO DE [10,20]: ' +num)
            }
        }
    )
}

intervalo1020()