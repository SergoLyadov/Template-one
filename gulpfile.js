var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename')
var less = require('gulp-less');
var path = require('path');
 
gulp.task('styles', function () {
  return gulp.src('less/*.less')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

const gulpPostcss = require('gulp-postcss');
const cssdeclsort = require('css-declaration-sorter');
 
gulp.task('css', function () {
  return gulp.src('less/*.less')
    .pipe(gulpPostcss([cssdeclsort({order: 'alphabetically'})]))
    .pipe(gulp.dest('./'));
});