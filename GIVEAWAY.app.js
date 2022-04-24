const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// TO MAKE THE PAGE ADD 1O DAYS WHEN EVER YOU ENTER THE PAGE FRESHLY
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let temDay = tempDate.getDate();



const futureDate = new Date(tempYear, tempMonth, temDay  + 10, 11, 30, 0);

//  END OF THE 10 DAYS PAGE SHIT
// let futureDate = new Date(2020, 3, 18, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

// const weekday = futureDate.getDay();
// console.log(weekdays[weekday]);
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} `;


// future time in ms
const futureTime = futureDate.getTime();
 
function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today; 
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr
    
    


    // values in ms
    const oneDay = 24 * 60 *  60 * 1000;
    const oneHour = 60 *  60 * 1000;
    const oneMinute = 60 * 1000;

    // calulate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours =  Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
 
    //  set values array;
    const values = [days, hours, minutes, seconds];

function format(item) {
    if (item > 10) {
        return (item = `0${item}`);
    }
    return item;
};

items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
});
if (t  < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</4>`;
}

};
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();


 


