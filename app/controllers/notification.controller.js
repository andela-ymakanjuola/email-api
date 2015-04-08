var Notification = require('../models/notification.model'),
    email = require('../routes/email.route');


module.exports = {

  create: function (request, response) {
    var notification = new Notification();
    
    notification.subject = request.body.subject;
    notification.content = request.body.content;
    notification.date = Date.now();
    notification.read = false;

    notification.save(function(error){
      if(error)
        response.send(error);
      response.json({message: 'Notification posted!'});
      email.sendMail(notification); //send email to user
    });
  },

  readAll: function (request, response) {
    Notification.find(function(error, notifications){
      if(error)
        response.send(error);
      response.json(notifications);
    });
  },

  read: function (request, response) {
    Notification.findById(request.params.notification_id, function (error, notification) {
      if(error)
        response.send(error);
      response.json(notification);
    });
  },

  update: function (request, response) {
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
  },

  delete: function (request, response) {
    Notification.remove({_id: request.params.notification_id}, function (error, notification) {
      if(error)
        response.send(error);
      response.json({message: 'notification delete!'});
    });
  }

};