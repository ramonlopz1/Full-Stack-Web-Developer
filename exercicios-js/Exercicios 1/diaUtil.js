const diaUtil = function(dia) {

    if (dia > 30) {
        return `DIA INVÁLIDO`
    } else {
        switch(dia) {
            case 1, 8, 15, 22, 29:
                return `DOMINGO`
                break
            case 7, 14, 21, 30:
                return `SÁBADO`
                break
            default:
                return `DIA ÚTIL`
            
        }
    }
    
}

console.log(diaUtil(30))

