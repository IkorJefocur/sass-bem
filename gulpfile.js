const
	gulp   = require('gulp'),
	concat = require('gulp-concat'),
	src    = require('gulp-bem-src');

module.exports = {
	default: () =>
		src(
			['src'],
			[{block: 'sass-bem'}],
			'sass',
			{
				techMap: {'sass': ['sass']}
			}
		)
		.pipe(concat('_index.sass'))
		.pipe(gulp.dest('.'))
};