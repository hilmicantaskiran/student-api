const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name_surname: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    studentNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
