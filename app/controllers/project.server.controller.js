     /*
   File name: project.server.controller
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

  exports.render = function(req, res) {
    // res.send('Hello World');
 
 //session
    if (req.session.lastVisit) {
     console.log(req.session.lastVisit);
     }
     req.session.lastVisit = new Date();
     
 //////
 
     res.render('project',{title: 'Projects'
     })
     };
     