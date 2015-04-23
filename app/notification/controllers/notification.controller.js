var Notification = require('../models/notification.model'),
    email = require('../controllers/email.controller');


module.exports = {

  create: function (request, response) {
    var notification = new Notification();

    notification.author = request.params.username;
    notification.subject = request.body.subject;
    notification.content = request.body.content;
    notification.email = request.body.email;
    notification.date = Date.now();
    notification.read = false;
    notification.sent = false;

    notification.save(function(error){
      if(error) {
        response.send(error);
      }
      console.log('Notification posted successfully!');
      email.sendMail(response, notification); //send email to user
    });
  },

  readAll: function (request, response) {

    request.query.author = request.params.username; //attach author/username to query params before querying db
    Notification.find(request.query,function(error, notifications){
      if(error){
        response.send(error);
      }
      response.json(notifications);
    });
  },

  read: function (request, response) {
    Notification.findById(request.params.notification_id, function (error, notification) {
      if(error){
        response.send(error);
      }
      response.json(notification);
    });
  },

  update: function (request, response) {
    Notification.findById(request.params.notification_id, function (error, notification) {
      if(error)
        response.send(error);
      notification.read = request.body.read; //update notification

      notification.save(function (error) {
        if (error){
          response.send(error);
        }
        response.json({message: 'notification updated'});
      });
    });
  },

  delete: function (request, response) {
    Notification.remove({_id: request.params.notification_id}, function (error, notification) {
      if(error){
        response.send(error);
      }
      response.json({message: 'notification delete!'});
    });
  }

};