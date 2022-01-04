const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() //retorna o tsconfig.json
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoTS)