var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var jshint = require('jshint');
var exec = require('child_process').exec;


gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(['*.js', '!vendor/**', '!gulpfile.js'])
    //.pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('scripts');

  // Watch files and run tasks if they change
  gulp.watch('*.js', function(event) {
    gulp.run('scripts');
      gulp.run('server');
  });
});


gulp.task('typescript', function() {
  var tsResult = gulp.src('*.ts')
    .pipe(ts({
        declarationFiles: true,
        noExternalResolve: true,
        noImplicitAny: true,
        out: 'main.js'
      }));
 
  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});   
    
gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('javascript', function () {
  gulp.src(['*.js', '!vendor/**', '!gulpfile.js'])
    //.pipe(uglify())
    .pipe(gulp.dest('build/js'));
    });

gulp.task('watch', function () {
    gulp.watch('*.scss', ['sass']);
    gulp.watch('*.ts', ['typescript']);
    gulp.watch('*.js', ['javascript']);
    gulp.watch('*', ['server']);
});    
    
gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('start', function () {
  nodemon({
    script: 'index.js'
  , ext: 'js html'
      , ignore: ['gulpfile.js']
  , env: { 'NODE_ENV': 'development' }
      , tasks: ['lint']
  });
});

gulp.task('server', function (cb) {
    
    //Do the build here if desired
    
    //Change this to look at the build directory
  exec('node index.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

