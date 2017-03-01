var express = require ('express')
var logger = require ('morgan') //assists us in debugging a lot of things  
var path = require ('path')

var app = express()
var port = 8080

//Logging : Development env
app.use(logger('dev')) //logger=morgan is a middleware / dev means you are in a developer environment 

//Templating config 
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
	res.render('index',{title:'Content Reader'})
})

var server = app.listen(port, function(){
	console.log('App is listening on port:',port)
})