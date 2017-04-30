'use strict';

	var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	$ = gulpLoadPlugins(),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	// СТИЛИ
	cleanCSS = require('gulp-clean-css'),
	gcmq = require('gulp-group-css-media-queries'),
	notify = require('gulp-notify'),
	multipipe = require('multipipe');

module.exports = function(options) {//options.src||options.dest

	return function() {
		return multipipe (
			gulp.src(options.src),//берем сам main.less
			$.debug({title:'src'}),
			$.plumber({
				errorHandler: notify.onError(function(err){
					return{
						title: 'Less plugin have error !',
						massage:err.massage
					};
				})
			}),
			$.less({
				includePaths: ['src/less']
			}),
			$.autoprefixer(['last 15 versions', '> 0.1%', 'ie 8', 'ie 7'], {cascade: true}),
			gcmq(),
			$.csscomb(),
			gulp.dest(options.dest),
			$.debug({title:'dest'}),

			cleanCSS({compatibility: 'ie8'}),
			$.rename({
				extname: '.min.css'
			}),
			gulp.dest(options.dest),
			browserSync.reload({stream: true})
		).on('error', notify.onError());
	};
};
