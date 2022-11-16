// middleware patter (chain of responsability)
// 1º param: ctx é um objeto que vai sendo passado de um passo a outro. ou seja, de um middleware para outro.

// 2º param: next é a função que vai disparar o próximo passo.

// Os passos 1, 2 e 3 são funções middleware:
// Na web seria (req, res, next)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' /// caso não queira chamar o próximo passo, não coloque o param next e a função next()

// função que executará todos os middlewares
// operador rest : ...
const exec = (ctx, ...middlewares) => { // junta os passos1, 2 e 3 em um array, depois passa o indice do array que será executado
    const execPasso = indice => {
        // verifica se o middleware está setado, 
        // verifica se o indice é menor que o tamanho do array em seguida executa indice + 1
        // em seguida chama o middleware[2], passando o parâmetro (ctx)
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))

    }

    execPasso(0) // chama a função passando o indice 0, em seguida 1, 2... até o tamanho do array

    // minha versão
    /**
     *  for(let i = 0; i < middlewares.length; i++) {
            if (middlewares && i < middlewares.length) {
                middlewares[i](ctx, () => execPasso(i))    
            }
        }

    execPasso() 
     */
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)