//gulp is just the task runner so create a reference
//plugin called nodemon, create a reference to it
var gulp = require('gulp'),
    nodemon = require('nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');

//tell it we have a task and use it to execute nodemon
gulp.task('default', function(){
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    //  the ./ is the current directory and the /** is all files within
    ignore: ['./node_modules/**']
  });
});

gulp.task('test', function(){
  env({vars: {ENV:'Test'}});
  gulp.src('tests/*.js', {read: false})
    .pipe(gulpMocha({reporter: 'nyan'}));
});
