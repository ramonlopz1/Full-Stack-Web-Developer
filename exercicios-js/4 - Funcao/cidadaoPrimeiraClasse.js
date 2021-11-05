//FUNÇÃO EM JS É First-Class Object ou First-Class Citizen
// Higher order function.

//funcao literal
//funcao sem nenhum return, irá retornar undefined.
function fun1() {
}

//Armazenar função em variável, vc pode referenciar a funcao através da constante
const fun2 = function () { } // << função anônima.

//Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2] //armazenando de duas formas diferentes
console.log(array[0](2, 3)) //chama a função através do index do array em que ela está armazenada.

// Armazenar em um atributo de objeto ::::: seria como uma classe instanciada, chamando um de seus métodos.
const obj = {}
    obj.falar = function () {return 'Opa'}
    console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun() //invoca a função passada pelo parâmetro
}

run(function () {console.log('Executando')} )

// Uma função pode conter/retonar uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(5, 6)(5) // <<< chamando a função dentro da função

