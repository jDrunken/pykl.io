const gulp = require('gulp')
var sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify')
const imagemin = require('gulp-imagemin')

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 8,
    }).on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/**/*.sass', ['sass'])
})

gulp.task('autoprefix', () => {
  return gulp.src('./src/static/css/styles.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('./build/static/css'))
})

gulp.task('js:minify', () => {
  gulp.src(['src/static/js/*.js'])
    .pipe(minify({
      noSource: true,
    }))
    .pipe(gulp.dest('./build/static/js'))
  })

gulp.task('fonts', () => {
  return gulp.src('src/static/fonts/*.*')
    .pipe(gulp.dest('./build/static/fonts'))
})

gulp.task('img:minify', () => {
  return gulp.src('src/static/images/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
    ]))
    .pipe(gulp.dest('./build/static/images'))
  })