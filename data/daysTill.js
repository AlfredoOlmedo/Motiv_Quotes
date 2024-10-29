// Calculate the days left until the end of the year
function daysLeft() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round((endOfYear - today) / oneDay);
}

const days_left = daysLeft();
const daysLeft_dom = document.getElementById('daysLeft_dom');
daysLeft_dom.innerHTML = `${days_left} days left until ${new Date().getFullYear() + 1}`;
