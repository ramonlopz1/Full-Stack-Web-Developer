// for in retorna indice, for of retorna valores
for (let letra of "Cod3r") {
    console.log(letra)  // retorna cada letra
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i) // retorna cada indice
}

for (let assunto of assuntosEcma) {
    console.log(assunto) // retorna os valores do array
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto) // retorna chave e valor juntos
}

for (let chave of assuntosMap.keys()) {
    console.log(chave) // retorna apenas a chave do Map
}

for (let valor of assuntosMap.values()) {
    console.log(valor) // retorna apenas o valor do Map
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl) // retorna Chave e Valor separados, do Map
}