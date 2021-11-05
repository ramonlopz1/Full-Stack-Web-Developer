//CRIANDO FUNÇÃO
function rand([min = 0, max = 1000]) {

    if (min > max) [min, max] = [max, min] //se o $min for maior que $max, é preciso inverter, para não dar erro na execução.

        const valor = Math.random() * (max-min) + min //cria random

        return Math.floor(valor) //arredonda para baixo
    
}

console.log(rand([50, 40]))  //mesmo passando o mínimo maior que o máximo, será invertido e executará corretamente.
console.log(rand([922])) //apenas o $min
console.log(rand([, 10])) //apenas o $max
console.log(rand()) //dará erro, retorna undefined