require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // a funcao do global pode mudar em qualquer lugar, a menos que tenha Object.freeze()