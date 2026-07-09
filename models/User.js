const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '학생 이름을 추가해 주세요'],
    },
    schoolnumber: {
      type: Number,
      required: [true, '학번을 추가 해 주세요'],
    },
    email: {
      type: String,
      required: [false, '이메일을 추가할시 이메일로 상,벌점 안내가 전송됩니다.'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
