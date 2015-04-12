var app = require('../../server.js'),
    request = require('supertest')(app);


describe('Test for notification route', function () {

  it('GET method:', function (done) {
    request
      .get('/notifications')
      .expect(200)
      .expect('Content-Type','application/json; charset=utf-8')
      .end(function (error, response) {
        if (error){
          return done(error);
        }
        done();
      });
  });

  it('GET query method:', function (done) {
    request
      .get('/notifications')
      .query('sent=true')
      .expect(200)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

  it('POST method:', function (done) {
    request
      .post('/notifications')
      .send({
        "subject": "Supertest Notification",
        "content": "<h2>Supertest</h2"
      })
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end(function (error, response) {
        if (error){
          return done(error);
        }
        done();
      });
  });

});