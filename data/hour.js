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
