
// console.log(lanches[100].cachorroquente)

const pedido = function(codigo, quantidade) {

    var codigosLanches = [100, 200, 300, 400, 500, 600]

    var lanches = {
        100: {
            CachorroQuente: `R$3,00`,
            Total: `R$ ${(quantidade * 3).toFixed(2).replace(".", ",")}`
        },
        200: {
            HamburguerSimples: 4,
            Total: `R$ ${(quantidade * 4).toFixed(2).replace(".", ",")}`
        },
        300: {
            CheeseBurger: 5.5,
            Total: `R$ ${(quantidade * 5.5).toFixed(2).replace(".", ",")}`
        },
        400: {
            bauru: 7.5,
            Total: `R$ ${(quantidade * 7.5).toFixed(2).replace(".", ",")}`
        },
        500: {
            refrigerante: 3.5,
            Total: `R$ ${(quantidade * 3.5).toFixed(2).replace(".", ",")}`
        },
        600: {
            suco: 2.8,
            Total: `R$ ${(quantidade * 2.8).toFixed(2).replace(".", ",")}`
        }
    }
    

    for(var i = 0 ; i < codigosLanches.length ; i++) {

        if(codigosLanches[i] !== codigo) {
            continue
            
        } else {
            console.log('Código Válido!')
            switch(codigo) {
                case codigo:
                    console.log(lanches[codigo])
                    break
                    
            }
        }
        
    }

}

pedido(400, 2)
