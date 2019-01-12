

var stylesSRC = 'assets/scss/style.scss';
var stylesDEST = 'assets/css/';
var scriptsSRC = '';
var scriptsDEST = '';

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

var gulp = require('gulp');

// css plugins
var sass = require('gulp-sass');

// js plugings
var uglify = require('gulp-uglify');

// utility plugins
var watch = require('gulp-watch');
var rename = require('gulp-rename');


gulp.task('default', function() {
    console.log('Hello World!');
});

gulp.task('styles', function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest())
});
