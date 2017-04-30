'use strict';

// ////////////////////////////////////////////////
//
// GULP СБОРКА ДЛЯ ВЕРСТКИ САЙТОВ
//
// // /////////////////////////////////////////////

/*----------------------------------------
	PLUGINS
----------------------------------------*/

var gulp = require('gulp'),
	// РАБОТАЕМ С ПРОИЗВОДИТЕЛЬНОСТЬЮ СБОРКИ
	gulpLoadPlugins = require('gulp-load-plugins'),
	$ = gulpLoadPlugins(),
	gulpIf = require('gulp-if'),

	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber');

/*----------------------------------------
	PATHS
----------------------------------------*/
var paths = require('./gulp/paths');
console.log($);

// ПОДКЛЮЧАЕМ ОТДЕЛЬНО TASKS
function lazyRequireTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback) {
	var task = require(path).call(this, options);

	return task(callback);
	});
}

/*----------------------------------------
	BROWSER SYNC
----------------------------------------*/

gulp.task('server', ['less', 'html'], function() {
	browserSync.init({
		server: "./build",
		port: 4201
	});
});


gulp.task('watch-html', ['html'], function () {
	browserSync.reload();
});
/*----------------------------------------
	HTML
----------------------------------------*/

lazyRequireTask('html', './gulp/tasks/html', {
	src: paths.html.src,
	dest: paths.html.dest
});


/*----------------------------------------
	STYLES
----------------------------------------*/

// less
lazyRequireTask('less', './gulp/tasks/less', {
	src: paths.less.app,
	dest: paths.less.dest
});


/*----------------------------------------
	JS
----------------------------------------*/

gulp.task('watch-js', ['js'], function () {
	browserSync.reload();
});

lazyRequireTask('js', './gulp/tasks/js', {
	src: paths.js.app,
	dest: paths.js.dest,
	minDest: paths.js.dest
});



//minify js files
// lazyRequireTask('js:min', './gulp/tasks/minjs', {
// 	src: paths.js.minSrc,
// 	dest: paths.js.minDest
// });

/*----------------------------------------
	SPRITE PNG FILES
----------------------------------------*/

gulp.task('jsMinSync', function () {
	return gulp.src('src/js/minifier/**/*.js')
		.pipe(plumber())
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.stream());
});

/*----------------------------------------
	MINIFY IMAGES
----------------------------------------*/

lazyRequireTask('image:min', './gulp/tasksimages', {
	src: paths.images.src,
	dest: paths.images.dest
});


/*----------------------------------------
	MINIFY IMAGES in UPLOADS
----------------------------------------*/

lazyRequireTask('min:uploads', './gulp/tasksimages', {
	src: 'srcimages/uploads/*',
	dest: 'build/uploads/'
});



gulp.task('watch', function () {
		// less
	gulp.watch('src/less/**/*.less', ['less']);
	// html
	gulp.watch(['src/html/**/*.html'], ['watch-html']);
	// js
	gulp.watch("src/js/**/*.js", ['watch-js']);
	// images
	gulp.watch("srcimages/*", ['image:min']);
	gulp.watch("srcimages/uploads/*", ['min:uploads']);
	// svg
	gulp.watch('src/svg/*.svg', ['svg']).on('change', function(event){
		if (event.type === 'deleted') {
			$.remember.forget('svg', event.path);
		}
	});
	gulp.watch('src/svg/**/*.svg', ['svg:base']);
	// png
	gulp.watch('srcimages/sprite/*.png', ['sprite']);
});


/*----------------------------------------
	ZIP FILES
----------------------------------------*/
// lazyRequireTask('zip', './gulp/tasks/zip', {
// 	src: paths.allDev,
// 	dest: paths.tempDir
// });

/*----------------------------------------
	FTP
----------------------------------------*/
// lazyRequireTask('ftp', './gulp/tasks/ftp', {
// 	src: paths.allDev
// });



gulp.task('default', ['js','server','watch']);
