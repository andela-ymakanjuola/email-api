var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'), 
    Notification = require('./app/models/notification.model'),
    router = require('./app/routes/notification.route');

mongoose.connect('mongodb://andela-yinka:andela123@ds029541.mongolab.com:29541/notifications-db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/notifications', router);

app.listen(3000, function (){
  console.log("something is working...");
});
