//Database Connection
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Sign Up User Function
exports.register = (req, res) => {
    const {name, surname, email, company_name, custom_claim, password, passwordConfirm} = req.body;

    //Database Query For Emails In Our Database
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        };

        //Check If Email Is Already Registred
        if (results.length > 0) {
            return res.render('signUp', {
                message: 'That email is already in use'
            });
        }
        
        //Check If User Confirmed Password
        else if (password !== passwordConfirm) {
            return res.render('signUp', {
                message: 'Passwords Do Not Match'
            });
        };

        //Encrypt Password
        let hashedPassword = await bcrypt.hash(password, 7);

        //Adding New User To Our Database
        db.query('INSERT INTO users SET ?', {name, surname, email, company_name, custom_claim, password: hashedPassword}, (error, results) => {
            if(error) {
                console.log(error);
            }

            else {
                return res.render('signUp', {
                    message: 'User Registered'
                });
            };
        });
    });
};

//Login Function
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        //Check If There Is Password Or Email
        if (!email || !password) {
            return res.status(400).render('logIn', {
                message: 'Please provide an email and password'
            });
        }

        //Verify If User's Email Is In The Database
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {

            //Check If There Is A User With This Email And If The Password Is Correct.
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('logIn', {
                    message: 'Email or password is incorrect'
                });
            }

            else {
                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                };

                //Saving Cookie In Storage
                res.cookie('indlelaMedia', token, cookieOptions);

                //Redirect To Resspective Dashboard After Cookie Is Saved
                if (results[0].custom_claim == 'Coperate Social Investor/Sponsor') {
                    res.redirect('/sponsor_dashboard');
                }

                else if (results[0].custom_claim == 'Non-Profit Organisation') {
                    res.redirect('/npo_dashboard');
                }

            }

        });

    } catch (error) {
        console.log(error);
    };
};

//LogOut Function
module.exports.logout = (req, res) => {
    res.cookie('indlelaMedia', '', { maxAge: 1 });
    res.redirect('/');
};