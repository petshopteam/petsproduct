var gulp           = require('gulp'),
		gutil          = require('gulp-util'),
		less           = require('gulp-less'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify");

// Compile Scripts
gulp.task('scripts', function() {
	return gulp.src([

		'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.js' //всегда в конце

		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

// Compile Less
gulp.task('less', function () {
gulp.src('app/less/main.less')
// gulp.src('app/less/**/*.less')
.pipe(less())
.pipe(autoprefixer({
	browsers: ['last 6 versions'],
	cascade: false
}))
.pipe(concat('main.css'))
.pipe(cleanCSS())   
.pipe(rename({suffix: ".min"}))
.pipe(gulp.dest('app/css'))
.pipe(browserSync.stream());
});

// Browser-sync serve task
gulp.task('serve', ['less', 'scripts'], function() {
	browserSync.init({
			server: "app",
			notify: false
    });

  gulp.watch("app/less/**/*.less", ['less']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Imagemin task
gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin()))
	// .pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});


// Build task
gulp.task('build', ['removedist', 'imagemin', 'less', 'scripts'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['serve']);