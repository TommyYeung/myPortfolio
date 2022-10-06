//sessions
var config=require('./env/development');
var session=require('express-session');
/////

//Declare
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



//module.exports//////////////////////////////////////////////////////////////////

module.exports = function() {
var app = express();

//morgan 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
}
/////
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(methodOverride());
/////


//sessions
app.use(session({
    saveUninitialzed:true,
    resave:true,
    secret: config.sessionSecret
}));
/////



   /*
   File name: app.js
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

//set ejs engine
app.set('views', './app/views')
app.set('view engine', 'ejs')
/////

//set static
app.use(express.static('./public'))
/////




require("../app/routes/index.server.routes.js")(app);

//28/09/2022
//add pages
/*
require("../app/routes/aboutMe.server.routes.js")(app);
require("../app/routes/contactMe.server.routes.js")(app);
require("../app/routes/service.server.routes.js")(app);
require("../app/routes/project.server.routes.js")(app);
*/
///

return app;
};
//exporting the express 

///////////////////////////////////////////////////////////////////////////////
