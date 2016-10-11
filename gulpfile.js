var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	sass = require('gulp-sass'),
  browserSync = require('browser-sync');

gulp.task('html', function(){
  gulp.src('app/*.html')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('css', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCSS('app/css/style.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: true
    });
});


gulp.task('watch', function () {
	gulp.watch('app/*.html', ['html']);
  gulp.watch('app/sass/*.scss', ['sass']);
	gulp.watch('app/css/*.css', ['css']);
});

gulp.task('default', ['browser-sync', 'html', 'sass', 'css', 'watch']);