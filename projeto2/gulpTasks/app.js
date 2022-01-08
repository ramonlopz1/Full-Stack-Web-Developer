const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/html/**/*.html')
        .pipe(htmlmin( { collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appSASS() {
    return gulp.src('src/css/style.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss( { "uglyComments": true } ))
        .pipe(concat('sass.min.css'))
        .pipe(gulp.dest('build/css'))
}

function appCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(uglifycss( { "uglyComments": true } ))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}

function appJS() {
    return gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/js'))

}

function dbJS() {
    return gulp.src('src/js/dataBase.js')
        .pipe(uglify())
        .pipe(concat('dataBase.min.js'))
        .pipe(gulp.dest('build/js'))

}

function serverJS() {
    return gulp.src('server.js')
        .pipe(uglify())
        .pipe(concat('server.min.js'))
        .pipe(gulp.dest('build/js'))

}

gulp.task('appHTML', appHTML)
gulp.task('appSASS', appSASS)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)


module.exports = {
    appHTML,
    appSASS,
    appCSS,
    appJS,
    dbJS,
    serverJS
}