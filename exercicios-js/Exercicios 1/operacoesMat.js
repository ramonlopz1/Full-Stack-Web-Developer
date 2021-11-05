const calc = function (a, b) {
    return {
        soma: a+b,
        sub: a-b,
        mult: a*b,
        div: a/b
    }
}

console.log(calc(39, 9))

console.log(calc(3, 4).soma)
console.log(calc(9, 3).sub)
console.log(calc(88, 8).mult)
console.log(calc(99, 3).div)