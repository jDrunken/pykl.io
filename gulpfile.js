const gulp = require('gulp')
var sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify')

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 8,
    }).on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});

gulp.task('autoprefix', function () {
  return gulp.src('./src/static/css/styles.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('./build/static/css'))
})

gulp.task('js:minify', function() {
  gulp.src(['src/static/js/*.js'])
    .pipe(minify({
      noSource: true,
    }))
    .pipe(gulp.dest('./build/static/js'))
});
