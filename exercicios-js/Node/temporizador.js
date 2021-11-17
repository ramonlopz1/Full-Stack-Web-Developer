const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 6', function () { //de cinco em cinco(*/5), qualquer minuto, meio dia, qualquer dia, qlqr mes, dia (6 sabado):
    console.log('Executando Tarefa 1 a cada 5 segundos', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

// recurrencerule: regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)] // de segunda a sabado executará
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2...')
})