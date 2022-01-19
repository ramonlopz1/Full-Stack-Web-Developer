const gulp = require('gulp')
const { series } = require('gulp')
const { appIMGS, appJS, dbJS } = require('./gulp/files.js')

module.exports.default = series(
    appIMGS,
    appJS,
    dbJS
)