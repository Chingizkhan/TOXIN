module.exports = function () {
	$.gulp.task('scripts:dev', function() {
		return $.gulp.src('src/static/js/*.js')
			.pipe($.gulp.dest('build/static/js'))
			.pipe($.bs.stream());
	});

	$.gulp.task('scripts:build', function() {
		return $.gulp.src('src/static/js/*.js')
			.pipe($.gulp.dest('build/static/js'))
	});

	$.gulp.task('scripts:build-min', function() {
		return $.gulp.src('src/static/js/*.js')
			.pipe($.gulp.dest('build/static/js'))
	});

	$.gulp.task('scripts-lib', function() {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
							'node_modules/air-datepicker/dist/js/datepicker.min.js',
							'node_modules/slick-carousel/slick/slick.min.js'])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/static/js'))
			.pipe($.bs.stream());
	});
};

