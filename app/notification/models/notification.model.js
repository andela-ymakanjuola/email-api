var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    subject: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    read: Boolean,
    sent: Boolean 
});

module.exports = mongoose.model('Notification', NotificationSchema);