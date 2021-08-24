const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('buildStyles', function(){
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))

}
)
