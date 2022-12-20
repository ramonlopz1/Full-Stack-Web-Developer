const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    
    return gulp.src('src/**/payloadValidation.js')
        .pipe(babel()) // babel({ comments: false, presets: ["env"] })
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('payloadValidation.min.js'))
        .pipe(gulp.dest('build'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

module.exports.default = series(transformacaoJS, fim)