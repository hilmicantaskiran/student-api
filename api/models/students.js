const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  studentNumber: {
    type: String,
    unique: true,
    required: true
  },
  studentID: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);