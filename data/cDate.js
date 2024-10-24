// Actual Date
function actualDate(){
    const actual_Date = new Date()
    return actual_Date.toLocaleDateString()
}
let curDate_dom = document.getElementById('curDate_dom');
curDate_dom.innerHTML = `${actualDate()}`;
