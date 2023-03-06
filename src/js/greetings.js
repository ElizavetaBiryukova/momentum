const greeting = document.querySelector('.greeting');

const createGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let res;
    const addsStringNull = (minutes) => {
        if (minutes <= 9) {
            return `0${minutes}`
        } else {
            return minutes;
        }
    }

    const sum = hours.toString() + addsStringNull(minutes.toString());


    if (sum >= 600 && sum <= 1159) {
        res = 'morning';
    }  else if(sum >= 1200 && sum <= 1759) {
        res = 'day';
    }  else if(sum >= 1800 && sum <= 2359) {
        res = 'evening';
    }  else if(sum >= 0 && sum <= 559) {
        res = 'night';
    }

    greeting.textContent = `Good ${res}`;

}

createGreeting();