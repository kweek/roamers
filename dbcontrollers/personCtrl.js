var app = require('../server');
var db = app.get('db');


module.exports = {
  create: function(req, response){
    db.applicant.insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      remote: req.body.remote,
      job: req.body.job,
      skype: req.body.skype,
      linkedin: req.body.linkedin,
      instagram: req.body.instagam,
      destination: req.body.destination,
      heard: req.body.heard,
    }, function(dbError, dbResponse){
        if(dbError){
          console.log(dbError);
          return response.status(500).send('Internal Server Error');
        }
        return response.status(201).send(dbResponse);
    });
  }

}
