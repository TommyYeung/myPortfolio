   /*
   File name: server.js
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/app'); //call express > route > contorl > 
var app = express();

var HOST = 'localhost';
var PORT = 3000;


app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');





