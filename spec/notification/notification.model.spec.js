var app = require('../../server.js'),
    mongoose = require('mongoose'),
    Notification = mongoose.model('Notification');

var notification;

describe('Notification model tests:', function () {
  
  beforeEach(function (done) {
    notification = new Notification({
      subject: "Notification",
      content: "Notication Subject",
      date: Date.now(),
      read: false,
      sent: false 
    });
    done();
  });

  
  describe('Save Method:', function () {
    it("has a empty subject", function (done) {
      notification.subject = '';
      console.log('its here');
      notification.save(function (err) {
        expect(err).toBeDefined();
        
      });
      done();
    });

    it('should save the notification', function (done) {
      notification.save(function(err) {
        expect(err).toBeNull();
      });
      done();
    });
  });

afterEach(function (done) {
  Notification.remove(function (err) {
    if(err) {
      console.log(err);
    }
  });
  done();
});
  



});