//Requiring MySQL Database
const mysql = require('mysql');

const pool = mysql.createPool({
    //Here you can limit the amount of data each custom claim can access
    /* if (pricing_plan = 'premium') {
        conncetionLimit: 1000
    } else if (pricing_plan = 'free') {
        connectionLimit: 5
    }*/
    

    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

module.exports = pool;