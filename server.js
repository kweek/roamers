var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');


var app = express();
var port = 7000;
var db = massive.connectSync({
  connectionString: 'postgres://yuosgrzr:qCcvIYWR8sHS24sQp5YKx3TmxoCiIzP8@stampy.db.elephantsql.com:5432/yuosgrzr',
});
app.set('db', db);



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
module.exports = app;



var personCtrl = require('./dbcontrollers/personCtrl.js');
app.post('/api/applicant', personCtrl.create);



app.listen(port, function(){
  console.log('listening on port', port);
});
