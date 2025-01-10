const express = require('express');
const { register, login, deleteUser } = require('../controllers/authController');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Log in a user
router.post('/login', login);


module.exports = router;