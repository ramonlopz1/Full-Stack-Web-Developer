const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // enfeiamento
        .pipe(concat('codigo.min.js')) // concatenar arquivos convertidos pelo babel, o param é o nome do arquivo final
        .pipe(gulp.dest('build'))

    return cb()
}

module.exports.default = series(padrao)