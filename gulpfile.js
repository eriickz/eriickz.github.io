const   gulp        = require('gulp')
        cleanCSS    = require('gulp-clean-css')
        jsMinify    = require('gulp-minify')
        tinyPNG     = require('gulp-tinypng');

gulp.task('css-min', function () {
    return gulp.src('./css/styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
})

gulp.task('js-min', function () {
    return gulp.src('./js/scripts.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('./js'))
})

gulp.task('tinypng', function() {
    return gulp.src('./assets/**/*.+(png|jpg)')
        .pipe(tinyPNG('API KEY'))
        .pipe(gulp.dest('./assets'))
})