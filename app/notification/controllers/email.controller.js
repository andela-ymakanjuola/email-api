var config = require('../../../config/config'),
    postmark = require("postmark")(config.EMAIL_KEY);


module.exports = {
  sendMail: function (notification) {
    postmark.send({
      "From": "yinka.makanjuola@andela.co", 
      "To": "yinka.makanjuola@andela.co", 
      "Subject": notification.subject, 
      "TextBody": notification.content
      },function (error, to) {
        if (error) {
          console.log(error);
          return;
        }
        
        notification.update({sent: true},function (error) {
          if (error) {
            console.error(error);
          }
          console.log("Email sent to: %s", to);
        });
    });
  }
};