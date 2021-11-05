const divisores = function (divisor, dividendo) {
    this.divisor = divisor
    this.dividendo = dividendo

    this.divisaoDecimal = function () {
        return divisor / dividendo
    }

    this.divisaoInteira = function () {
        return divisor % dividendo
    }
}


const d1 = new divisores (99, 3)
const d2 = new divisores (143, 7)
console.log(d1.divisaoDecimal())

console.log(d2.divisaoDecimal())
console.log(d2.divisaoInteira())