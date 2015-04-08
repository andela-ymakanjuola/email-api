var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    Notification = require('../models/notification.model');


router.route('/')

  //create a new notification
  .post(parseUrlencoded, function (request, response) {
    var notification = new Notification();
    
    notification.subject = request.body.subject;
    notification.content = request.body.content;
    notification.date = Date.now();
    notification.read = false;

    notification.save(function(error){
      if(error)
        response.send(error);
      response.json({message: 'Notification posted!'});
    });

  })

  //get all notifications
  .get(function (request, response) {
    Notification.find(function(error, notifications){
      if(error)
        response.send(error);
      response.json(notifications);
    });

  });

router.route('/:notification_id')
  
  //get a notification
  .get(function (request, response) {
    Notification.findById(request.params.notification_id, function (error, notification) {
      if(error)
        response.send(error);
      response.json(notification);
    });
  })

  //update a notification
  .put(function (request, response) {
    Notification.findById(request.params.notification_id, function (error, notification) {
      if(error)
        response.send(error);
      notification.read = request.body.read; //update notification

      notification.save(function (error) {
        if (error)
          response.send(error);
        response.json({message: 'notification updated'});
      });
    });
  })

  //delete a notification
  .delete(function (request, response) {
    Notification.remove({_id: request.params.notification_id}, function (error, notification) {
      if(error)
        response.send(error);
      response.json({message: 'notification delete!'});
    });
  });

module.exports = router;