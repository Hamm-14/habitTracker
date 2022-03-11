let curr = new Date 

let today = curr.toString().substring(8,10);
console.log(today);
let week = []

for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i 
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  week.push(day)
}

var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var d = new Date();
var monthName=months[d.getMonth()]; // "July" (or current month)

var dayName = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

for(let i=0;i<7;i++){
  let day = document.createElement('div');
  day.className = `${dayName[i]}`;
  
  if(week[i].substring(8,10) == today){
    day.style.cssText = `height: 100%; width: 20%; margin-top: 0;box-shadow: 0px 0px 4px 1px #a99cbb;`;
    day.innerHTML = `<div class="day-name" style="background:#b71c1c;font-size:1rem;">${dayName[i]}</div>
            <div class="date" style="font-size:0.9rem">${monthName},${week[i].substring(8,10)}</div>
            <div class="habit-status">
              <button class="habit-finished"><i class="fas fa-check fa-md"></i></button>
              <button class="habit-unfinished"><i class="fas fa-times fa-md"></i></button>
            </div>`;
  }
  else{
    day.innerHTML = `<div class="day-name">${dayName[i].substring(0,3)}</div>
            <div class="date">${monthName},${week[i].substring(8,10)}</div>
            <div class="habit-status">
              <button class="habit-finished"><i class="fas fa-check fa-xs"></i></button>
              <button class="habit-unfinished"><i class="fas fa-times fa-xs"></i></button>
            </div>`;
  }
  document.getElementById('weekdays-container').appendChild(day);
}


console.log(monthName);
console.log(week);