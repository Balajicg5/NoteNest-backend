const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Signup a new user
router.post('/signup', signup);

// Login an existing user
router.post('/login', login);

module.exports = router;
