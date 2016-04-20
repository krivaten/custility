var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect');

gulp.task('styles', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./docs/css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('index.html', ['html']);
});

//Watch task
gulp.task('default', ['styles', 'connect', 'watch']);
