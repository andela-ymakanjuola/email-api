
var POSTMARK_KEY = "afd3d32c-0187-4b92-91e2-751fa3e2e96c";

var postmark = require("postmark")(POSTMARK_KEY);


module.exports = {
  sendMail: function(notification) {
    postmark.send({
      "From": "yinka.makanjuola@andela.co", 
      "To": "yinka.makanjuola@andela.co", 
      "Subject": notification.subject, 
      "TextBody": notification.content
      }, function (err, to) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Email sent to: %s", to);
    });
  }

};