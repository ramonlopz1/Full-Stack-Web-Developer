const gulp = require('gulp')
const { series } = require('gulp')
const { appIMGS } = require('./gulp/files.js')

module.exports.default = series(
    appIMGS
)