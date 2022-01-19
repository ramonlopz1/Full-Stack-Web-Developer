const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

function appIMGS() {
    return gulp.src('src/assets/images/**/*.*')
        .pipe(gulp.dest('public/assets/images'))
}

function appJS() {
    return gulp.src('src/api/app.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/api'))
}

function dbJS() {
    return gulp.src('src/api/db.js')
        .pipe(uglify())
        .pipe(concat('db.js'))
        .pipe(gulp.dest('public/api'))
}

module.exports = {
    appIMGS,
    appJS,
    dbJS
}