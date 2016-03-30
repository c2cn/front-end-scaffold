var SRC_PATH = 'src/';
var gulp = require('gulp');
var DIST_PATH = 'dist';
var assetsPath = [
    SRC_PATH + '**/*',
    /* Sass 源码 */
   '!' + SRC_PATH + 'assets/sass/**/*',
   '!' + SRC_PATH + 'assets/sass',
    /* ES6 源码 */
   '!' + SRC_PATH + 'assets/js-src/**/*',
   '!' + SRC_PATH + 'assets/js-src'
];

gulp.task('default', ['move']);


// 移动资源
gulp.task('move',  function() {
    return gulp.src(assetsPath)
        .pipe(gulp.dest(DIST_PATH));
});

