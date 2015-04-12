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
      notification.save(function (error) {
        expect(error).toBeDefined();
        done();
      });
      
    });

    it('should save the notification', function (done) {
      notification.save(function (error) {
        expect(error).toBeNull();
        if (error){
          expect(error).toBeDefined();
          return done(error);
        }
        done();
      });
    });
  });

  afterEach(function (done) {
    Notification.remove(function (error) {
      if (error){
        return done(error);
      }
      done();
  });
    
  });

});