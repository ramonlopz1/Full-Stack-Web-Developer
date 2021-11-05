//O var é global, só é local caso seja feito dentro de uma função, logo o último log irá retornar o resultado total de 'i'
for (var i = 0 ; i < 10 ; i++) {
    console.log(i)
}

console.log('i = ', i)

//O let respeita o escopo em que a variável está. Logo o último log não vai retornar nada, pois fora do escopo a variável não foi definida
for (let a = 0 ; a < 10 ; a++) {
    console.log(a)
}

console.log('a = ', a)
