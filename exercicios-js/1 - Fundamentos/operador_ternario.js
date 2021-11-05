
// const resultado = nota <<<< parâmetro que será passado
//nota >=8 <<<< condição
//    ? 'Aprovado'' <<<< se for verdade
//    : 'Reprovado' <<<< se for falso
const resultado = nota => nota >=8 ? 'Aprovado' : 'Reprovado' //retorna a condição lógica  ?aprovado :falso

console.log((resultado(10)))
console.log(resultado(7))
