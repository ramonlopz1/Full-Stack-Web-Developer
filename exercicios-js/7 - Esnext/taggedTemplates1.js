// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`) // passa a template string pra função tag, onde os valores são 'Gui' e 'Aprovado', e as partes: um array 'vazio' 'esta' 'vazio