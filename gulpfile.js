const gulp = require('gulp');
const less = require('gulp-less');
const htmlmin = require('gulp-htmlmin');
const smartgrid = require('smart-grid');
const browserSync = require('browser-sync').create();



gulp.task('less', () => {
  return gulp.src('./src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('htmlmin', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});



gulp.task('watch', ['less', 'htmlmin', 'js', 'browserSync'], () => {
  gulp.watch('./src/less/style.less', ['less']);
  gulp.watch('./src/*.html', ['htmlmin']);
  gulp.watch('./src/js/*.js', ['js']);
});




gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
});