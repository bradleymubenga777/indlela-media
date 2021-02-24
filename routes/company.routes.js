//Requiring Our Preprocessors
const express = require('express');
const { requireAuth, checkUser } = require('../middleware/auth.middleware');
const pool = require('../pool');
const jwt = require('jsonwebtoken');

//Defining Our Express Router
const router = express.Router();

//Get A Post By ID Parameter
router.get('/:id', requireAuth, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        //Query
        connection.query('SELECT * FROM listings WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); //return connection to pool

            if (!err) {
                res.send(rows);
            }

            else {
                console.log(err);
            }
        });
    });
});


//Delete A Post
router.delete('/:id', requireAuth, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        //Query
        connection.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); //return connection to pool

            if (!err) {
                res.send(`Deleted Post With ID ${req.params.id}`);
            }

            else {
                console.log(err);
            }
        });
    });
});


//Creating A Listing
router.post('/listing-create', requireAuth, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const params = req.body;

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
    
        else {
            console.log(err);
        }

        console.log(_userid);

        //Query To Create A Post
        connection.query('INSERT INTO listings SET ?, userid = ?', [params, _userid], (err, rows) => {
            connection.release(); //return connection to pool

            if (!err) {
                res.send(`Listing Added To Database`);
            }

            else {
                console.log(err);
            }
        });
    });
});


//Update Record
router.put('/listings', requireAuth, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        const params = req.body;
        const {id, name, description} = req.body;

        //Query To Create A Post
        connection.query('UPDATE posts SET name = ?, description = ? WHERE id = ?', [name, description, id,], (err, rows) => {
            connection.release(); //return connection to pool

            if (!err) {
                res.send(`Added ${params.name}`);
            }

            else {
                console.log(err);
            }
        });
    });
});

//Export Company Routes
module.exports = router;