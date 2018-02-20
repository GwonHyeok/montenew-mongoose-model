const mongoose = require('mongoose');

const Solution = mongoose.model('Solution',
  {
    title: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = Solution;