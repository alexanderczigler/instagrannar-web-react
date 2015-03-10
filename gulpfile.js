var gulp         = require('gulp');
var browserify   = require('gulp-browserify');
var concat       = require('gulp-concat');
var webserver    = require('gulp-webserver');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var scsslint     = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var jest         = require('gulp-jest');
var colors       = gutil.colors;


//
// Reporters
// --------------------------------------------------
var myCustomReporter = function(file) {
  if (!file.scsslint.success) {
    var filename = file.path.replace(process.cwd(), '');
    gutil.log(file.scsslint.issues.length + ' issues found in ' + filename);

    file.scsslint.issues.forEach(function (issue) {
      var severity = issue.severity === 'warning' ? 'W' : 'E';
      var error =  severity === 'E' ? colors.red(' [' + severity + '] ') : colors.yellow(' [' + severity + '] ');

      var logMsg = colors.cyan(filename) + ':' + colors.magenta(issue.line) + error + issue.reason;

      gutil.log(logMsg);
    });
  }
};

//
// Server
// --------------------------------------------------
gulp.task('webserver', ['browserify', 'copy'], function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true
    }));
});

//
// JS
// --------------------------------------------------
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

gulp.task('jest', function () {
  return gulp
    .src('./app/js/components', { read: false })
    .pipe(jest({
      scriptPreprocessor: __dirname + '/preprocessor.js',
      unmockedModulePathPatterns: [
        'node_modules/react'
      ]
    }));
});

//
// SCSS
// --------------------------------------------------
gulp.task('scss-lint', function () {
  gulp.src([
      'app/scss/**/*.scss',
      '!app/scss/vendor/**/*.scss'
    ])
    .pipe(scsslint({
      config: './app/scss/scsslint.yml',
      customReport: myCustomReporter,
      maxBuffer: 300000 * 1024
    }))
});

gulp.task('scss', function () {
  gulp.src('./app/scss/screen.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist/css/'));
});

//
// Tasks
// --------------------------------------------------
gulp.task('css', ['browserify', 'copy', 'webserver', 'scss', 'scss-lint', 'watch:scss']);
gulp.task('default',['browserify', 'copy', 'webserver', 'scss', 'jest', 'watch']);

gulp.task('watch:scss', function () {
  gulp.watch(['./app/scss/**/*.scss'], ['scss-lint', 'scss']);
  gulp.watch(['./app/js/**/*.jsx', './app/js/**/*.js'], ['jest', 'browserify']);
  gulp.watch(['./app/**/*.html'], ['copy']);
});

gulp.task('watch', function () {
  gulp.watch(['./app/scss/**/*.scss'], ['scss']);
  gulp.watch(['./app/js/**/*.jsx', './app/js/**/*.js'], ['jest', 'browserify']);
  gulp.watch(['./app/**/*.html'], ['copy']);
})