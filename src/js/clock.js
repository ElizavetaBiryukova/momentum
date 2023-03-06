const time = document.querySelector('.time');
const date = document.querySelector('.date');

//time
const createClock = () => {
    const data = new Date();
    time.textContent = data.toLocaleTimeString();
    setTimeout(() => createClock(), 1000)
}
createClock();
// setTimeout(() => createClock(), 1000);

//date
const createDate = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const months = [
        'January',
        'February',
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
    const dayWeek = new Date().getDay();
    const month = new Date().getMonth();
    const dateDay = new Date().getDate();
    date.textContent = `${days[dayWeek]}, ${months[month]} ${dateDay}`;
    setTimeout(() => createDate(), 1000)
}
createDate();
