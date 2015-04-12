var app = require('../../server.js'),
    request = require('supertest')(app);


describe('Test for notification route', function () {

  it('dummy test', function (done) {
    expect(true).toBe(true);
    done();
  });

  it('GET method:', function (done) {
    request
      .get('/notifications')
      .expect(200)
      .expect('Content-Type','application/json');
    done();

  });

  it('POST method:', function (done) {
    request
      .post('/notifications')
      .send({
        "subject": "Supertest Notification",
        "content": "<h2>Supertest</h2"
      })
      .expect({message: 'notification posted!'})
      .end(function (error, response) {
        response.send(error);
      });

    done();

  });

});