const asyncHandler = require('../middleware/async');
const studentsService = require('../services/students');

module.exports.getStudents = asyncHandler(async (req, res, next) => {
  const students = await studentsService.getAll();
  res.status(200).json({
    success: true,
    data: students
  });
});

module.exports.getStudent = asyncHandler(async (req, res, next) => {
  const student = await studentsService.getByHashCode(req.params.studentID);
  res.status(200).json({
    success: true,
    data: student
  });
});

module.exports.createStudent = asyncHandler(async (req, res, next) => {
  const student = await studentsService.create(req.body);
  res.status(201).json({
    success: true,
    data: student
  });
});

module.exports.updateStudent = asyncHandler(async (req, res, next) => {
  const student = await studentsService.update(req.params.id, req.body);
  res.status(200).json({
    success: true,
    data: student
  });
});

module.exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await studentsService.delete(req.params.id);
  res.status(200).json({
    success: true,
    data: student
  });
});
