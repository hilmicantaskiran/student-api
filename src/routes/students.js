const express = require('express');

const router = express.Router();

const { getStudents, createStudent, getStudent, updateStudent, deleteStudent } = require('../controllers/students');

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;