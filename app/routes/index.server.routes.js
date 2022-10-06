
   /*
   File name: index.server.routes
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

module.exports = function(app) {

    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    app.get('/index', index.render);
    app.get('/home', index.render);
    app.post('/', index.render);

    var aboutMe = require('../controllers/aboutMe.server.controller');
    app.get('/aboutMe', aboutMe.render);

    var project = require('../controllers/project.server.controller');
    app.get('/project', project.render);

    var service = require('../controllers/service.server.controller');
    app.get('/service', service.render);
    
    var contactMe = require('../controllers/contactMe.server.controller');
    app.get('/contactMe', contactMe.render);
    
    };