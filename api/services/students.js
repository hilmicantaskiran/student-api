const Student = require('../models/students');
const bycrypt = require('bcryptjs');

module.exports.create = async (props) => {
  let { name, surname, email, studentNumber, studentID } = props;
  
  let student = new Student({
    name: name,
    surname: surname,
    email: email,
    studentNumber: studentNumber,
    studentID: studentID
  });

  await student.save();
  return student;
};

module.exports.getAll = async () => {
  const students = await Student.find();
  return students;
};

module.exports.getByID = async (studentID) => {
  const student = await Student.findOne({ studentID: studentID });
  return student;
};

module.exports.update = async (studentID, props) => {
  let { name, surname, email, studentNumber } = props;

  let student = await Student.findOneAndUpdate({ studentID: studentID }, {
    name: name,
    surname: surname,
    email: email,
    studentNumber: studentNumber,
    studentID: studentID
  }, { new: true });
  return student;
};

module.exports.delete = async (studentID) => {
  const student = await Student.findOneAndDelete({ studentID: studentID });
  return student;
};
