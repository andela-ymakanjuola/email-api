var config = require('../../../config/config'),
    postmark = require("postmark")(config.EMAIL_KEY);


module.exports = {
  sendMail: function (response, notification) {
    postmark.send({
      "From": "yinka.makanjuola@andela.co", 
      "To": "yinka.makanjuola@andela.co", 
      "Subject": notification.subject, 
      "HtmlBody": notification.content,
      "TracksOpen": true,

      },function (error, to) {
        if (error) {
          console.log(error);
          response.send(error);
          return;
        }
        notification.update({sent: true},function (error) {
          if (error) {
            console.error(error);
          }
          console.log("Email sent to: %s", to);
          response.json(to);
        });
    });
  }
};