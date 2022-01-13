const gulp = require('gulp')

function appIMGS() {
    return gulp.src('src/assets/images/**/*.*')
        .pipe(gulp.dest('public/assets/images'))
}

module.exports = {
    appIMGS
}