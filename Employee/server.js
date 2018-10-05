const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Employee = require('./models/employeeModel') //created model loading here
const bodyParser = require('body-parser')
const morgan = require('morgan');

//mongoose instance connection url connection

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/employee');
mongoose.connect('mongodb://root:root123@ds121753.mlab.com:21753/employee', function(err){
//mongoose.connect('mongodb://root:root123@ds121753.mlab.com:21753/employee_test', function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Connected to the database!');
	}
});

//app.use(express.static(__dirname+'/api'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./api/employees/routes/index')(app)

// look files into public directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('*', function(req, res){  //'*' represents any routes
// 	res.sendFile(__dirname + '/public/views/index.html');
// });

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Employee list RESTful service started on port: '+port);
