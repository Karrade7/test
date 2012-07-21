/**
 * Module dependencies.
 */

var express = require('express');
var app = express.createServer();

/**
 * All Bootstrap static assets are in /public/assets.
 */



app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res){
    res.sendfile('index.html')
    }
);


app.listen(3000);