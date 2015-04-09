var config = require('../../../config/config'),
    postmark = require("postmark")(config.EMAIL_KEY);


module.exports = {
  sendMail: function(notification) {
    postmark.send({
      "From": "yinka.makanjuola@andela.co", 
      "To": "yinka.makanjuola@andela.co", 
      "Subject": notification.subject, 
      "TextBody": notification.content
      }, function (err, to) {
        if (err) {
          notification.sent = false;
          notification.save()
          console.log(err);
          return;
        }
        notification.sent = true;
        notification.save()
        console.log("Email sent to: %s", to);
    });
  }
};