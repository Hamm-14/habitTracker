const Habit = require('../models/habit');
const User = require('../models/user');

module.exports.create = function(req,res){
    if(req.user){
        Habit.create({content: req.body.habit,currentStatus:{date: Date.now(),state: 'finished'}},function(err,newHabit){
            if(err){
                console.log("Error in creating new habit",err);
                return;
            }
            User.findById(req.user.id,function(err,user){
                if(err){
                    console.log('Error in finding the user',err);
                    return;
                }
                user.habits.push(newHabit);
                user.save();
            });
            console.log('****',newHabit);
            return res.redirect('back');
        });
    }
}