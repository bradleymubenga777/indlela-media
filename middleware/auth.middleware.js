const jwt = require('jsonwebtoken');
const db = require('../db');

const requireAuth = (req, res, next) => {
    const token = req.cookies.indlelaMedia;

    //Verify If JWT Token Is Valid
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/logIn');
            }

            else {
                next();
            }
        });
    }
    
    else {
        res.redirect('/logIn');
    }
}

//Check User Function
const checkUser = (req, res, next) => {
    const token = req.cookies.indlelaMedia;

    //Verify If JWT Token Is Valid
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                next();
            }

            else {
                let id = decodedToken.id;

                //Find User In Database
                db.query('SELECT * FROM users WHERE id = ?', [id], async (error, results) => {

                    //Log Any Errors
                    if(error) {
                        console.log(error);
                        res.locals._USER = null;
                        next();
                    }

                    //Grab Email And Passowrds
                    else {
                        res.locals._USER = results[0];
                        next();
                    };

                });
            }
        });
    }

    else {
        res.locals.user = null;
    }

}

module.exports = { requireAuth, checkUser };