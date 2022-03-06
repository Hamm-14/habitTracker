const User = require('../models/user');
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('login');
}

module.exports.createUser = function(req,res){
    //if password and confirm_password doesn't match
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    //if password matches,then find the user in the database with mail-id
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log("Error in finding the user",err);return;}
        //if user found then return because email should be unique
        if(user){
            return res.redirect('back');
        }

        User.create(req.body,function(err){
            if(err){console.log("error in sign-up user creation",err);return;}

            return res.redirect('/');
        });
    });
}

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/users/sign-in');
}