// -b +- square(b² - 4.a.c)
//          2a


const bhaskara = function (a, b, c) {
    
    var xPositivo = ((-b) + Math.sqrt((Math.pow(b, 2) - (4*a*c))))/(2*a)
    var xNegativo = ((-b) - Math.sqrt((Math.pow(b, 2) - (4*a*c))))/(2*a)
    
    return `xPositivo: ${xPositivo} \nxNegativo: ${xNegativo}`
}

console.log(bhaskara(2, 4, 2))