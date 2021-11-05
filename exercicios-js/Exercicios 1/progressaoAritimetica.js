//an = a1 + (n – 1) . r

// an = termo procurado
// n = termo
// a1 = primeiro termo

function Pa (n, a1, r) {
	var an = 0
    var resultado = 0
    var soma = 0
	var soma2 = 0
    for(var i = 1; i < n ; i++) {
        
        soma = soma + a1
        
        an = a1 + r
        a1 = an
        
        console.log(a1)
    }

    console.log(soma+a1)


}

//começa em 4, 16 vezes, somando +3
//(an, a1, r)
Pa(16, 4, 3)
