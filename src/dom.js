// Calculate the days left until the end of the year
function daysLeft() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((endOfYear - today) / oneDay);
  }
  
  // template literal
const days_left = daysLeft();
const daysLeft_dom = document.getElementById('daysLeft_dom');
daysLeft_dom.innerHTML = `${days_left}` + ' days left until 2025';

// Actual Date
function actualDate(){
    const actual_Date = new Date()
    return actual_Date.toLocaleDateString()
}
let curDate_dom = document.getElementById('curDate_dom');
curDate_dom.innerHTML = `${actualDate()}`;


// Actual Time
function actualTime() {
    const actual_Time = new Date();
    return actual_Time.toLocaleTimeString();
}
let hour_dom = document.getElementById('hour_dom');
hour_dom.innerHTML = `${actualTime()}`;

// Update the time every second
setInterval(() => {
    hour_dom.innerHTML = `${actualTime()}`;
}, 1000);



let quote = document.getElementById('quote_dom');
quote.innerHTML = 'Stoic Quote';



let author = document.getElementById('author_dom');
author.innerHTML = 'Zeneca';










