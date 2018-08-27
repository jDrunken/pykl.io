const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify')
const imagemin = require('gulp-imagemin')
const connect = require('gulp-connect')
const livereload = require('gulp-livereload')
const runSequence = require('run-sequence')
const shell = require('gulp-shell')
const staticI18n = require('gulp-static-i18n-html')
const clean = require('del')
const sourcemaps = require('gulp-sourcemaps')				//source tracking
const ghpages = require('gulp-gh-pages-will')		        // gulp-gh-pages


// 빌드 전 청소
gulp.task('clean',function () {
	return clean('./build');
});



// building css
gulp.task('sass', () => {
	return gulp.src('./src/sass/**/*.sass')
		.pipe(sass({
			outputStyle: 'expanded',
			precision: 8
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie 10', 'ie 11'],
			cascade: false,
			expand: true,
		}))
		.pipe(gulp.dest('./build'))
})

gulp.task('sass:sourcemap', () => {
	return gulp.src('./src/sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			precision: 8
		}))
		.on('error', function (err) {
			console.log(err.toString());
			this.emit('end');
		})
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie 10', 'ie 11'],
			cascade: false,
			expand: true,
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
})



gulp.task('js:minify', () => {
	return gulp.src(['src/static/js/*.js'])
		.pipe(minify({
			noSource: true
		}))
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
})

gulp.task('fonts', () => {
	return gulp.src('src/static/fonts/*.*')
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
})

gulp.task('conf:copy', () => {
	return gulp.src('src/conf/*')
		.pipe(gulp.dest('./build'))
		.pipe(livereload())
})

gulp.task('css:copy', () => {
	return gulp.src('src/static/css/*')
		.pipe(gulp.dest('./build'))
		.pipe(livereload())
})

gulp.task('img:minify', () => {
	return gulp.src('src/static/images/**/*')
		.pipe(imagemin([
			imagemin.jpegtran({ progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
		]))
		.pipe(gulp.dest('./build'))
})

gulp.task('connect', () => {
	connect.server({
		root: './build',
		port : 3030,
		livereload: true,
		directory:true,
		host:'0.0.0.0'
	});
});

// copy index.html
gulp.task('index.html',function() {
	return gulp.src('src/templates/index.html')
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
})

// html 2 korean, english
gulp.task('translate', function() {
	return gulp.src('src/html/index.html')
		.pipe(staticI18n({
			locales: ['en', 'ko'],
			localesPath : './src/locales'
		}))
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
});

// gh-pages에 배포
gulp.task('release', function () {
    return gulp.src('build/**/*')
        .pipe(publish({
            force : true,
            message : 'pushed to pykl.io'
        }))
});
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

gulp.task('watch', (callback) => {
    livereload.listen();

	// html translate watching
	gulp.watch('src/templates/index.html', ['index.html'],callback)
	gulp.watch(['./src/locales/*.json','src/html/index.html'], ['translate'],callback)

	// css convert
	gulp.watch('src/sass/**/*.sass', ['sass:sourcemap'],callback)

	// css copy
	gulp.watch('src/static/css/*', ['css:copy'],callback)

	// js
	gulp.watch('src/static/js/*.js',['js:minify'],callback)

	// fonts
	gulp.src('src/static/fonts/*.*',['fonts'],callback)
})



// --------------------------------------------------------------------------------
// local task 실행 순서
// sass
// autoprefix
// js:minify
// fonts
// img:minify
// --------------------------------------------------------------------------------
gulp.task('local',function () {
	return runSequence('clean',['index.html','translate','sass:sourcemap','css:copy','conf:copy','js:minify','fonts'],['connect','watch']);
})


gulp.task('deploy',function () {
	return runSequence('clean',['index.html','translate','sass','css:copy','conf:copy','js:minify','fonts','img:minify'],'release')
})
