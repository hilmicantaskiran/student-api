const express = require('express');

const router = express.Router();

const { getUsers, loginUser, createUser, updateUser, deleteUser } = require('../controllers/user');

router.get('/', getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;