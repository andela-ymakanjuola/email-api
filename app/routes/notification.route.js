var express = require('express'),
    Notification = require('./app/models/notification.model'),
    router = express.Router();

router.route('/notifications')

  //create a new notification
  .post(function (request, response) {
    var Notification = new Notification();
    
    Notification.subject = request.body.subject;
    Notification.content = request.body.content;
    Notification.date = request.body.date;
    Notification.read = false;

    Notification.save(function(error){
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

router.route('/notifications/:notification_id')

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