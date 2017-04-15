var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var nodemailer = require('nodemailer');


var app = express();
var port = 7000;
var db = massive.connectSync({
  connectionString: 'postgres://yuosgrzr:qCcvIYWR8sHS24sQp5YKx3TmxoCiIzP8@stampy.db.elephantsql.com:5432/yuosgrzr',
});
app.set('db', db);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'monthlyroamers@gmail.com',
    pass: 'tr@veltheworld3'
  }
});
app.set('transporter', transporter);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
module.exports = app;



var personCtrl = require('./dbcontrollers/personCtrl.js');
app.post('/api/applicant', personCtrl.create);
// app.post('/api/newPerson', personCtrl.newPerson);
app.post('/api/emailSignup', function(req, res){
  var mailOptions = {
    from: '"Monthly Roamers" <monthlyroamers@gmail.com>', // sender address
    to: req.body.newemail,
    bcc: 'monthlyroamers@gmail.com',// list of receivers
    subject: 'Thanks for signing up', // Subject line
    text: ``, // plain text body
    html: `<p>Thank you ${req.body.firstname} for signing up to receive updates!</p><p>We will notify you as we add new locations and other exciting updates.</p>` // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
        return res.status(500).send('Internal servor error');
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      return res.send(`Message ${info.messageId} sent: ${info.response}`);
});
});


app.listen(port, function(){
  console.log('listening on port', port);
});
