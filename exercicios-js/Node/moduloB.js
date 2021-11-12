let a = 2 // < é visível apenas dentro do módulo


module.exports = {  // < é visível fora do módulo
    bomDia: 'BOM DIA',
    boaNoite() {
        return 'Boa Noite'
    }
}