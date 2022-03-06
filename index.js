const express = require('express');
const port = 8000;

const db = require('./config/mongoose');  //mongoose setup
const session = require('express-session'); //used for session-cookie

//require passport and local startegy that we have set-in
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

const app = express();

const path = require('path');
app.set('view engine','ejs'); //setting view engine as ejs
app.set('views',path.join(__dirname,'views'));  //setting the path from which views will be rendered

app.use(session({
    name: 'habitTracker',
    secret: 'timBerners',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*60)
    },
    store: MongoStore.create({
        mongoUrl: `mongodb://localhost/habit_tracker_db`,
        autoRemove: 'disabled'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(express.static('assets'));    //accesing static files from assets folder
app.use(express.urlencoded({extended: true}));  //using parser to read form data

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){console.log('Error in running server');return;}

    console.log("Express server is up and running on port",port);
    return;
});



