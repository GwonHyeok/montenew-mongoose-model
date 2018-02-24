const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Feedback = mongoose.model('Feedback',
  new Schema({
      title: { type: String, required: true },
      content: { type: String, required: true },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
      attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }]
    },
    {
      timestamps: true
    }
  )
);

module.exports = Feedback;
