var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    Notification = require('../controllers/notification.controller');

router.route('/')

  .post(parseUrlencoded, Notification.create) //create a new notification

  .get(Notification.readAll); //get all notifications

router.route('/:notification_id')
  
  .get(Notification.read)  //get a notification

  .put(Notification.update) //update a notification

  .delete(Notification.delete); //delete a notification

module.exports = router;