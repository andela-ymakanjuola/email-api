var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    subject: String,
    content: String,
    date: Date,
    read: Boolean
});

module.exports = mongoose.model('Notification', NotificationSchema);