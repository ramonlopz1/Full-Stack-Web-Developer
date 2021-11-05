var teste = 2;

if (teste > 4) {
    console.log("é maior");
} else if (teste < 4) {
    console.log("é menor");
}

var count = 0;
var countPar = 0;
var countImpar = 0;

for (var i = 0; i < 10; i++) {
    count++;
    
    if (count % 2 == 0) {
        console.log(count + " - PAR")
        countPar++;
    } else {
        console.log(count + " - IMPAR")
        countImpar++;
    }  
}

console.log("Total par: " + countPar)
console.log("Total impar: " + countImpar)
