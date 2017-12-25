const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const path = require('path');
const less = require("gulp-less");


gulp.task('compile', () => {
  return gulp
    .src("./src/*.less")
    .pipe(less())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest("./lib"))
    .pipe(gulp.dest("../../lib/feui-css/"));
});

gulp.task('build', ['compile']);