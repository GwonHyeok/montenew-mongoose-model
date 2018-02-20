const mongoose = require('mongoose');

const Report = mongoose.model('Report',
  {
    title: { type: String, required: true },
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }]
  },
  {
    timestamps: true
  }
);

module.exports = Report;