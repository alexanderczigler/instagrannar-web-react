var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var webserver  = require('gulp-webserver');
var uglify     = require('gulp-uglify');

gulp.task('webserver', ['browserify', 'copy'], function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('browserify', function() {
    gulp.src('app/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy', 'webserver', 'watch']);

gulp.task('watch', function () {
  gulp.watch(['./app/js/**/*.jsx', './app/js/**/*.js'], ['browserify']);
  gulp.watch(['./app/**/*.html'], ['copy']);
})