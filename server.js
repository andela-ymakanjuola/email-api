var config = require('./config/config')
    mongoose = require('mongoose');
    
mongoose.connect(config.db[process.env.NODE_ENV].uri, config.db[process.env.NODE_ENV].options, function (err) {
  if (err)
    console.error('Could not connect to MongoDB. /n' + err);
    
});

var app = require('./config/express')();


app.listen(config.port, function (){
  console.log("something is working on PORT: "+config.port);
});

module.exports = app;