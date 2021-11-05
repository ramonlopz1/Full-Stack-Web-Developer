function zeroADez(num) {
    if (num < 0 && num < 10) {
        return `NÚMERO INVÁLIDO`
    } else {
        switch(num) {
            case 1:
                return `UM`
                break
            case 2:
                return `DOIS`
                break
            case 3:
                return `TRES`
                break
            case 4:
                return `QUATRO`
                break
            case 5:
                return `CINCO`
                break
            default:
                return `AGUARDANDO CONVERSAO`
        }
    }
}

console.log(zeroADez(5))