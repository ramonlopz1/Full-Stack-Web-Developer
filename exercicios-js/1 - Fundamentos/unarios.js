let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade ao valor da variável
--num1 //subtrai uma unidade da variável 

// console.log(++num1) //o unário a esquerda tem mais precedência que o à direita

console.log(++num1 === num2--) //da verdadeiro, pois o -- só está sendo executado depois da comparação
console.log (num1 === num2) //seja simples!