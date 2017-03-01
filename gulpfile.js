var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browsersync = require('browser-sync').create()

var reload = browsersync.reload 

gulp.task('nodemon', function(cb){
	var called = false
	return nodemon({
		script: 'server.js'
	})
	.on('start',function(){
		console.log('Nodemon Started')
		if(!called){
			called = true
		cb();
		}
	})
	.on('restart',function(){
		//to do!
	})
})

gulp.task('browser-sync',['nodemon'],function(){
	browsersync.init(null,{
		proxy:'http://localhost:8080',
		port: 3000,
		reloadDelay: 1000 //allow for some time before the browser reloads 
	})
})