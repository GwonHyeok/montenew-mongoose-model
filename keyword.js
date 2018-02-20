const mongoose = require('mongoose');

const KeyWord = mongoose.model('KeyWord',
  {
    title: { type: String, required: [true, '키워드 제목이 존재하지 않습니다'] },
    targetUri: { type: String, required: [true, '키워드 타겟 주소가 존재하지 않습니다'] },
    type: { type: String, required: [true, '타입이 설정되지 않았습니다'], enum: ['Blog'] }
  },
  {
    timestamps: true
  }
);

module.exports = KeyWord;