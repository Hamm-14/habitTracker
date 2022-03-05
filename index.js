const express = require('express');
const port = 8000;

const app = express();
const path = require('path');

app.set('view engine','ejs'); //setting view engine as ejs
app.set('views',path.join(__dirname,'views'));  //setting the path from which views will be rendered

app.use(express.static('assets'));
app.use(express.urlencoded({extended: true}));  //using parser to read form data

app.listen(port,function(err){
    if(err){console.log('Error in running server');return;}

    console.log("Express server is up and running on port ",port);
    return;
});


app.get('/',function(req,res){
    res.render('login');
    return;
});

app.post('/sign-in',function(req,res){
    console.log(req.body);
    res.redirect('back');
    return;
});

