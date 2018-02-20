const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Media = mongoose.model('Media',
  new Schema({
      title: { type: String, required: [true, '매체 제목이 존재하지 않습니다'] },
      targetUri: { type: String, required: [true, '매체 타겟 주소가 존재하지 않습니다'] },
      type: { type: String } // 지식쇼핑, 통합검색 ...
    }
    ,
    {
      timestamps: true
    }
  )
);

module.exports = Media;