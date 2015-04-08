var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
   
var Notification = require('./app/models/notification.model');
var router = require('./app/routes/notification.route');

mongoose.connect('mongodb://localhost/notification-db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/notifications', router);

app.listen(3000, function (){
  console.log("something is working...");
});
