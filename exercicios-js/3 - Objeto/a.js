const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}


const entriess = Object.entries(obj)


const abc = entriess.map(([chave, valor], idx) => {
    return {
        [chave]: valor
    }
})


console.log(abc)