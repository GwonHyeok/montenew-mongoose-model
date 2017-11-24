const mongoose = require('mongoose');

class MontenewModel {

  initialize() {
    this.DATABASE_HOST = 'mongodb://localhost/montenew';
    mongoose.Promise = global.Promise;
  }

  connect() {
    return mongoose.connect(this.DATABASE_HOST, { useMongoClient: true })
  }

}

module.exports = new MontenewModel();