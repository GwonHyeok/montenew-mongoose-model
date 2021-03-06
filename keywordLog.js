const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyWordLog = mongoose.model('KeyWordLog',
  new Schema({
      rank: Number,
      keyword: { type: mongoose.Schema.Types.ObjectId, ref: 'KeyWord' },
      title: String,
      link: String,
      description: String,
      bloggername: String,
      bloggerlink: String,
      postdate: String,
    },
    {
      timestamps: true
    }
  )
);

module.exports = KeyWordLog;