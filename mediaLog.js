const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaLog = mongoose.model('MediaLog',
  new Schema({
      media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
      title: String,
      likeCount: Number,
      viewCount: Number
    },
    {
      timestamps: true
    }
  )
);

module.exports = MediaLog;
