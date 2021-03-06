const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessToken = mongoose.model('AccessToken',
  new Schema({
    user_id: Schema.Types.ObjectId,
    type: String,
    access_token: String
  }, {
    timestamps: true
  }),
);

module.exports = AccessToken;