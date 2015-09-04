/*
    Simplest node server to serve static files using express
    Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/

// Require express module
var express = require('express');

// Create app instance
var app = express();

// Declare path for static resources to be used globally
app.use(express.static(__dirname));

// Define default file to be served on root path
app.get('/', function(req, res) {
	res.sendFile('index.html');
}).listen(8000);

console.log('Running Server...');