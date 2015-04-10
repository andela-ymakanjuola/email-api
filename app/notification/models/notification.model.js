var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    subject: {type: String, required},
    content: {type: String, required},
    date: {type: Date, required},
    read: Boolean,
    sent: Boolean 
});

module.exports = mongoose.model('Notification', NotificationSchema);