//Requiring Preprocessors.
const express = require("express");
const exphbs = require('express-handlebars');
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

//Configuring Enviroment Variables
dotenv.config({path: './.env'});

//Inititilizing Express App.
const app = express();

//Database Connection
const db = require('./db');

//Connecting Our Pool
const pool = require('./pool');

//Setting Up Public Directory
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL-encoded body
app.use(express.urlencoded({extended: false}));

//Parse JSON Body
app.use(express.json());

//Setup Cookies In The Browser
app.use(cookieParser());

//Template Engine Setup
/* app.engine('hbs', exphbs({
    extname: '.hbs'
})); */

app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/page.routes'));
app.use('/auth', require('./routes/auth.routes'));
app.use('/', require('./routes/company.routes'));

//Listening To The PORT.
app.listen(process.env.PORT || 5001, () => {
    console.log("Server Started On PORT: 5000");
});
