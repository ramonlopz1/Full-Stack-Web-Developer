const passo1 = (ctx, next) => {
    ctx.valor = 'v1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'v2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'v3'

const exec = (ctx, ...middlewares) => {

    const executando = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => executando(indice + 1))
    }
    executando(0)
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)
console.log(ctx)