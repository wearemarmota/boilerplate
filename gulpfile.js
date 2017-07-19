var gulp = require('gulp');
var concat = require('gulp-concat-util');
var uglify = require('gulp-uglify');

gulp.task('default', function() {

    gulp.src(['./assets/js/masters/main.js'])
        .pipe(concat.scripts('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/dist/'));

});
