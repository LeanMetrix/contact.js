var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var dot = require('gulp-dot-precompiler');
var del = require('del');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    scripts: ['dist/templates.js', 'src/**/*.js'],
    templates: ['src/*.html', 'src/*.css']
};

gulp.task('init', function(callback) {
    del('dist', callback);
});

gulp.task('dot', ['init'], function() {
    return gulp.src(paths.templates)
        .pipe(dot())
        .pipe(concat('templates.js'))
        .pipe(header('window.render = {};'))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', ['init', 'dot'], function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('contact.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['scripts'], function() {
    return gulp.src('dist/contact.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('contact.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('finalize', ['minify'], function(callback) {
    del('dist/templates.js', callback);
});

gulp.task('watch', function() {
    gulp.watch('src', ['finalize']);
});

gulp.task('default', ['finalize']);
