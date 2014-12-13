var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var dot = require('gulp-dot-precompiler');
var del = require('del');
var rename = require('gulp-rename');
var header = require('gulp-header');

var paths = {
    scripts: ['dist/templates.js', 'src/**/*.js'],
    templates: ['src/*.html', 'src/*.css']
};

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('scripts', ['clean', 'dot'], function() {
    return gulp.src(paths.scripts)
        //.pipe(uglify())
        .pipe(concat('contact.min.js'))
        .pipe(gulp.dest('dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('dot', ['clean'], function() {
    gulp.src(paths.templates)
        .pipe(dot())
        .pipe(concat('templates.js'))
        .pipe(header('window.render = {};'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);
