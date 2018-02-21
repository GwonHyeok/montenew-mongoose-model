const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Report = mongoose.model('Report',
  new Schema({
      title: { type: String, required: true },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }]
    },
    {
      timestamps: true
    }
  )
);

module.exports = Report;
