const { series, parallel } = require('gulp')
const gulp = require('gulp')


const { appHTML, appSASS, appCSS, appJS, dbJS, serverJS } = require('./gulpTasks/app')

const { monitorarArquivos, servidor } = require('./gulpTasks/gulpServer')

module.exports.default = series(
    series (
        series(
            appHTML,
            appSASS,
            appCSS,
            appJS,
            dbJS,
            serverJS
        )
    ),
    series (
        servidor,
        monitorarArquivos
    )
)