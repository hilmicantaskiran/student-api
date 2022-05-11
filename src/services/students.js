const Student = require('../models/students');
const bycrypt = require('bcryptjs');

module.exports.create = async (props) => {
  let { name, surname, email, password, studentNumber } = props;

  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);
  const hashCode = await bycrypt.hash(studentNumber, salt);

  let student = new Student({
    name: name,
    surname: surname,
    email: email,
    password: hashedPassword,
    studentNumber: studentNumber,
    hashCode: hashCode
  });

  await student.save();
  return student;
};

module.exports.getAll = async () => {
  const students = await Student.find();
  return students;
};

module.exports.getByHashCode = async (hashCode) => {
  const student = await Student.findOne({ hashCode: hashCode });
  return student;
};

/*
module.exports.update = async (studentID, props) => {
  let { name, surname, email, password, studentNumber, studentID } = props;

  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);
  const hashedID = await bycrypt.hash(studentID, salt);

  let student = await Student.findOneAndUpdate({ studentID: studentID }, {
    name: name,
    surname: surname,
    email: email,
    password: hashedPassword,
    studentNumber: studentNumber,
    studentID: hashedID
  }, { new: true });
  return student;
};

module.exports.delete = async (studentID) => {
  const student = await Student.findOneAndDelete({ studentID: studentID });
  return student;
};
*/
