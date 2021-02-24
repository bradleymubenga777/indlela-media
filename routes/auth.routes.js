//Requiring Our Preprocessors
const express = require('express');
const authController = require('../controllers/auth.controller.js');

//Defining Our Express Router
const router = express.Router();

//SignUp Route
router.post("/register", authController.register);

//LogIn Route
router.post("/login", authController.login);

//LogOut Route
router.get("/logout", authController.logout);

module.exports = router;