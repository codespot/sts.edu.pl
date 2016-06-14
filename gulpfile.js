var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./sass/layout.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function() {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('server', function() {
  return nodemon({
    script: 'index.js',
    watch: 'index.js'
  });
});

gulp.task('deploy', ['sass']);
gulp.task('server:dev', ['sass:watch', 'server']);
