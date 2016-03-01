const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const runSequence = require('run-sequence')
const watch = require('gulp-watch')
var browserify = require('gulp-browserify')

gulp.task('scripts', () => {
	gulp.src('./public/js/index.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'))
});
 
gulp.task('babel', () => {
	return gulp.src('./src/js/**/*.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./public/js'))
})

gulp.task('sass', () => {
	return gulp.src('./src/sass/**/*.sass')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {

	runSequence(['babel', 'sass'], 'scripts')

	watch('./src/**', () => {
		runSequence(['babel', 'sass'], 'scripts')
	})
})