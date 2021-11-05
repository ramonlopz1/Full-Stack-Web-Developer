const jurosCompostos = function(capInicial, capMensal, txJuros, tempoAplica) {

    var montanteMensal = 0
    var rendMensal = 1
    montanteMensal = capInicial
        
    for (var i = 0; i < tempoAplica; i++) { 

        resultado = montanteMensal + capMensal // 150 ----- 215 ------ 286,50 ----- 365,15 ----- 451,66 ----- 547,82 ---651,51 -- 766,66 -- 893,32 --- 1032,65 --- 1185,91 --- 1354,50
        rendMensal = resultado * (1+txJuros) // 165 ----- 236,5 ----- 315,15 ------ 401,66 ----- 496,82 ----- 601,51 ----- 716,66 ---- 843,32 ---- 982,65 -- 1135,91 --- 1304,50 --- 1489,00
        montanteMensal = rendMensal // 165 // 236,5 ----- 315,15 ---- 401,------ 496,82 ------ 601,51 ---- 716,66 ---- 843,32 ---- 982,65 --- 1135,91 ---- 1304,50
        
    }
    return montanteMensal
}

console.log(jurosCompostos(100, 50, 0.10, 12))

//correto.