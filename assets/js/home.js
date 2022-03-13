// //return the dates of current week
getCurrentWeak = function(){
  let curr = new Date;
  let week = [];
  for (let i = 0; i < 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }
  return week;
}

//create weekdays elements and append to the weekdays-container of each habit
createWeekDays = function(){
  let curr = new Date 
  let today = curr.toString().substring(8,10);
  let week = getCurrentWeak();
  var d = new Date();  //creating the object of today's date
  var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var monthName = months[d.getMonth()];
  var dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

  var habitsWeekdays = document.getElementsByClassName('weekdays-container'); //fetching all habits weekdays container
  for(let j=0;j<habitsWeekdays.length;j++)
  {
    // console.log(habitsWeekdays[j]);
    // let day = habitsWeekdays[j].getElementsByClassName(dayNames[0]);
    // let dayName = day[0].getElementsByClassName('date');
    // console.log(dayName);
    // dayName[0].innerText = 'Monday';
    for(let i=0;i<7;i++){
      if(week[i].substring(8,10) == today){
        let day = habitsWeekdays[j].getElementsByClassName(dayNames[i]);
        day[0].style.cssText = 'height:100%; width:20%; margin-top:0; box-shadow: 0px 0px 4px 1px #a99cbb';
        let dayName = day[0].getElementsByClassName('day-name');
        dayName[0].style.cssText = 'background:#b71c1c;font-size:1rem;'
        let dateElement = day[0].getElementsByClassName('date');
        dateElement[0].innerText = monthName + "," + week[i].substring(8,10);
        dateElement[0].style.cssText = 'font-size:0.9rem';
        // console.log(dayName);
        // let finishedElement = dayName[0].getElementsByClassName('finished');
        // console.log(finishedElement);
        // finishedElement[0].style.cssText = 'font-size:1.2rem;';
      }
      else{
        let day = habitsWeekdays[j].getElementsByClassName(dayNames[i]);
        let dateElement = day[0].getElementsByClassName('date');
        dateElement[0].innerText = monthName + "," + week[i].substring(8,10);
      }
    
    // day.className = `${dayName[i]}`;
    // if(week[i].substring(8,10) == today){
    //   day.style.cssText = `height: 100%; width: 20%; margin-top: 0;box-shadow: 0px 0px 4px 1px #a99cbb;`;
    //   day.innerHTML = `<div class="day-name" style="background:#b71c1c;font-size:1rem;">${dayName[i]}</div>
    //           <div class="date" style="font-size:0.9rem">${monthName},${week[i].substring(8,10)}</div>
    //           <div class="habit-status">
    //             <button class="habit-finished"><i class="fas fa-check fa-md"></i></button>
    //             <button class="habit-unfinished"><i class="fas fa-times fa-md"></i></button>
    //           </div>`;
    // }
    // else{
    //   day.innerHTML = `<div class="day-name">${dayName[i].substring(0,3)}</div>
    //           <div class="date">${monthName},${week[i].substring(8,10)}</div>
    //           <div class="habit-status">
    //             <button class="habit-finished"><i class="fas fa-check fa-xs"></i></button>
    //             <button class="habit-unfinished"><i class="fas fa-times fa-xs"></i></button>
    //           </div>`;
    // }
    //  habitsWeekdays[j].appendChild(day);
    }
  }
}
createWeekDays();
