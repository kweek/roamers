var app = require('../server');
var db = app.get('db');
var transporter = app.get('transporter');


module.exports = {
  create: function(req, res){
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
      instagram: req.body.instagram,
      destination: req.body.destination,
      heard: req.body.heard,
      lds: req.body.lds,
    }, function(dbError, dbResponse){
        if(dbError){
          console.log(dbError);
          return res.status(500).send('Internal Server Error');
        }
        var mailOptions = {
          from: '"Monthly Roamers " <monthlyroamers@gmail.com>', // sender address
          to: req.body.email,
          bcc: 'monthlyroamers@gmail.com',// list of receivers
          subject: 'Your application has been submitted!', // Subject line
          text: `Thank you ${req.body.first_name} for applying to Monthly Roamers. We will contact you once we have reviewed your application. `, // plain text body
          html: '' // html body
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return res.status(500).send('Internal servor error');
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
          return res.send(`Message ${info.messageId} sent: ${info.response}`);
      });
        // return response.status(201).send(dbResponse);
    });
  }
  // newPerson: function(req, response){
  //   transporter.newPerson({
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email: req.body.email,
  //   });
  //   res.json(response);
  // }

};
