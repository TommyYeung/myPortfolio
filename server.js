   /*
   File name: server.js
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//declare
var express = require('./config/app'); //call express > route > contorl > 
var app = express();
var HOST = 'localhost';
var PORT = 3000 || process.env.PORT; //"process.env.PORT" add for Heroku

//set port and run
app.listen(PORT);
module.exports = app;
console.log('Server running at http://localhost:3000/');





