let numero = 1
{
    let numero = 2
    console.log(numero)
}

console.log(numero)

// O let respeita o posicionamento da variável


var num = 4
{
    var num = 3
    console.log(num)
}

console.log(num)

//O var nao respeita, só é local se for feito dentro de uma função.