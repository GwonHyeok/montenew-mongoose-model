const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Solution = mongoose.model('Solution',
  new Schema({
      title: { type: String, required: true }
    },
    {
      timestamps: true
    }
  )
);

module.exports = Solution;