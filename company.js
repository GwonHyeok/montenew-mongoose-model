const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Company = mongoose.model('Company',
  new Schema({
      name: { type: String, required: [true, '회사 이름이 존재하지 않습니다'], unique: true },
      manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      keywords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'KeyWord' }],
      reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
      medias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }]
    },
    {
      timestamps: true
    }
  )
);

module.exports = Company;
