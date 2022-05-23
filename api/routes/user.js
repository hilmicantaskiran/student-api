const express = require('express');

const router = express.Router();

const { getUsers, getUserByEmail, createUser, updateUser, deleteUser } = require('../controllers/user');

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:email', getUserByEmail);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);

module.exports = router;