//Requiring Our Preprocessors
const express = require('express');
const { requireAuth, checkUser } = require('../middleware/auth.middleware');
const { getSponsorListings } = require('../middleware/listings.middleware');


//Defining Our Express Router
const router = express.Router();

//Setting Our Routes
router.get("/", (req, res) => {
    res.render('index');
});

router.get("/signUp", (req, res) => {
    res.render('signUp');
});

router.get("/logIn", (req, res) => {
    res.render('logIn');
});

//Protected Routes
router.get("/npo_dashboard", requireAuth, checkUser, (req, res) => {
    res.render('npo_dashboard');
});

router.get("/sponsor_dashboard", requireAuth, checkUser, getSponsorListings, (req, res) => {
    res.render('sponsor_dashboard');
});

module.exports = router;