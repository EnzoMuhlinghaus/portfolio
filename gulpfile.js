var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    filter = require('gulp-filter'),
    useref = require('gulp-useref'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    zip = require('gulp-zip'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    htmlclean = require('gulp-htmlclean'),
    livereload  = require('gulp-livereload');

var jsFilter = filter('**/*.js', {restore: true});
var cssFilter = filter('**/*.css', {restore: true});


// Compile SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

// Clean dist folder
gulp.task('clean', function () {
    return gulp.src('dist', {read:false})
        .pipe(clean())
});

// Run everything
gulp.task('default', ['sass', 'clean'], function () {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('*.pdf')
        .pipe(gulp.dest('dist/'));
    return gulp.src('*.html')
        .pipe(useref())
        // Minify css and js
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        // Minify Html
        .pipe(htmlclean({
            protect: /<\!--%fooTemplate\b.*?%-->/g,
            edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
        }))
        .pipe(gulp.dest('dist'))
});

// Check events
gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch(['*.html', 'js/*.js', 'css/*.css']).on('change', function (event) {
        console.log(event);
        livereload.changed(event.path);
    });
});