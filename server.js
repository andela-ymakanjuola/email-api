var config = require('./app/config/config')
    mongoose = require('mongoose');
    

mongoose.connect('mongodb://andela-yinka:andela123@ds029541.mongolab.com:29541/notifications-db');

var db = mongoose.connect(config.db[process.env.NODE_ENV].uri, config.db[process.env.NODE_ENV].options, function (err) {
    if (err) {
        console.error('Could not connect to MongoDB.');
        console.log(err);
    }
});

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
});


var app = require('./app/config/express');


app.listen(process.env.NODE_ENV, function (){
  console.log("something is working...");
});
