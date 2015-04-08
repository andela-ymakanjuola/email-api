module.exports = {
  db: {
    development: {
      uri: 'mongodb://localhost/notifications-db';
    },
    test: {
      uri: 'mongodb://localhost/test-db';
    },
    production: {
      uri: 'mongodb://andela-yinka:andela123@ds029541.mongolab.com:29541/notifications-db'
    }
  },

  port: process.env.PORT || 3000

};