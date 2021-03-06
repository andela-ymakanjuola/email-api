var express = require('express');
    
module.exports = function () {

  var app = express(),
      bodyParser = require('body-parser'),
      router = require('../app/notification/routes/notification.route');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  app.use('/', router);

  return app;

};