var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var lib = require('bower-files')();

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});
