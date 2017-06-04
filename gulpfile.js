'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var bundle = require('gulp-bundle-assets');

gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
  gulp.watch('./src/assets/js/**/*.js', ['js']);
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./src/static/js'));
});
