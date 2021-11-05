function tipoFrutas(fruta) {
    var caixaAlta = fruta.toUpperCase()
    switch(caixaAlta) {
        case 'MACA':
            return `Não vendemos esta fruta aqui`
            break
        case 'KIWI':
            return `Estamos comescassez de kiwis`

        case 'MELANCIA':
            return `Aqui está, são 3 reais o quilo`
        default:
            return `DIGITE OUTRA`

    }
}

console.log(tipoFrutas('mElancia'))
