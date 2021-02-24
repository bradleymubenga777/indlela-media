//Requiring Preprocessors
const pool = require('../pool');
const jwt = require('jsonwebtoken');


//Get Listings Made By Individual Sponsor
const getSponsorListings = (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const token = req.cookies.indlelaMedia;

        let _userid;

        //Extract ID From JWT Token
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    next();
                }
    
                else {
                    _userid = decodedToken.id;
                }
            });
        }

        //Query
        connection.query('SELECT * FROM listings WHERE userid = ?', [_userid], (err, rows) => {
            connection.release(); //return connection to pool

            if (!err) {
                res.locals._LISTING = rows;
                res.locals._LISTING_LENGTH = rows.length;
                next();
            }

            else {
                console.log(err);
            }
        });
    });

};

module.exports = { getSponsorListings };