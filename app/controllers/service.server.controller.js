   /*
   File name: service.server.controller
   Student’s Name: Pok Hei Yeung
   StudentID: 301240885
   Date: 28/09/2022
   */

 exports.render = function(req, res) {
    
  //request
 //session
    if (req.session.lastVisit) {
     console.log(req.session.lastVisit);
     }
     req.session.lastVisit = new Date();
     
 //////
 //respon to which page to render and assign var
     res.render('service',{title: 'Service'
     })
     };
     