const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')

function appCSS() {
    return gulp.src('sass/index.scss')
        .pipe(babel({ presets: ["ENV"] }))
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss( {"uglyComments": true} ))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}


module.exports.default = series(appCSS)