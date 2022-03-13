
const User = require('../models/user');

// Returns a date in 'yyyy-MM-dd' format
formatDate = function(dateProperty) {
    const newDate = new Date(dateProperty);
    let formattedDate = `${ newDate.getFullYear() }-`;
        formattedDate += `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }-`;  // for double digit month
        formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }`;        // for double digit day
    return formattedDate;
}

//stores all the days of current week into week arrray 
getCurrentWeek = function(){
    let curr = new Date;
    var week = [];
    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
    }
    return week;
}

module.exports.home = async function(req,res){
    try{
        if(req.user){
            let user = await User.findById(req.user.id).populate('habits');
            let habitsStatus = [];
            let week = getCurrentWeek();
            for(habit of user.habits){
                let subArr = ['unmarked','unmarked','unmarked','unmarked','unmarked','unmarked','unmarked'];
                for(let i=0;i<7;i++){
                    for(let j=0;j<habit.currentStatus.length;j++){
                        let formattedDate = formatDate(habit.currentStatus[j].date);
                        if(formattedDate == week[i]){
                            subArr[i] = habit.currentStatus[j].state;
                            break;
                        }
                    }
                }
                habitsStatus.push(subArr);
            }

            // console.log(habitsStatus[0][5]);
            // console.log(week);
            return res.render('home',{
                habits: user.habits,
                status: habitsStatus,
                week: week
            });
        }
    }catch(err){
        console.log(err);
        return;
    }
}

