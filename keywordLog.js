const mongoose = require('mongoose');

const KeyWordLog = mongoose.model('KeyWordLog', {
  rank: Number,
  keyword: { type: mongoose.Schema.Types.ObjectId, ref: 'KeyWord' }
});

module.exports = KeyWordLog;