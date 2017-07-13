const express = require('express')
const app = express(); // need to query

appdata = app.locals.appdata;
appdata = require('./tours.json');

console.log(appdata[0].tourBlurb);

app.get('/', function(request, response){
	response.send(`
		<h1> Welcome to my home page : Express Js </h1>
		<h2>Using Json data in through expressjs </h2>
		<p>  ${appdata[0].tourBlurb}  </p>
		`);
})

app.get('/user/', function(request, response){
	response.send(`
		<h1>User Page</h1> 
		<p>  ${appdata[1].tourBlurb}  </p>
		`);
})

app.get('/user/:id?', function(request, response){
	var name = request.params.id;
	response.send("Hi I am " + name + '<h1>About Me</h1> I am front end developer');
})

app.get('/user/:id?/:title?', function(request, response){
	var name = request.params.id;
	var title = request.params.title;
	response.send('<b> My name is: </b>' + name + '<b> My Designation is: </b>' + title);
})

app.get('/contact/', function(request, response){
	response.send('<h1>Thanks for  Contact</h1> Thank you for using my application');
})

app.get('*', function(request, response){
	response.send(`
			<p>Your are not right place</p>
			<h1> :: 404 :: </h>
		`);
})

app.listen(8081, function(){
	console.log('Server running on 8081')
})