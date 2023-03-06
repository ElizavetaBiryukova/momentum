import { getRandomNumberBetween } from "./util";

const body = document.querySelector('.body');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const greeting = document.querySelector('.greeting');


const changeImg = () => {

    const getTimeOfDay = () => {
        if (greeting.textContent == 'Good day') {
            return 'afternoon';
        } else if (greeting.textContent == 'Good evening') {
            return 'evening';
        } else if (greeting.textContent == 'Good morning') {
            return 'morning';
        } else if (greeting.textContent == 'Good night') {
            return 'night';
        }
    }

    let numberImg = getRandomNumberBetween(1, 20);

    const createImg = (numberImg) => {
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/ElizavetaBiryukova/momentum-images/master/${getTimeOfDay()}/${numberImg <= 9 ? `0${numberImg}` : numberImg}.webp`;
        img.onload = () => {
            body.style.backgroundImage = `url(https://raw.githubusercontent.com/ElizavetaBiryukova/momentum-images/master/${getTimeOfDay()}/${numberImg <= 9 ? `0${numberImg}` : numberImg}.webp)`;
        }
    }

    next.addEventListener('click', () => {
        numberImg++;
        if (numberImg === 21) {
            numberImg = 1;
            createImg(numberImg);
        } else {
            createImg(numberImg);
        }
    })

    prev.addEventListener('click', () => {
        numberImg--;
        if (numberImg === 0) {
            numberImg = 20;
            createImg(numberImg);
        } else {
            createImg(numberImg);
        }
    })

    createImg(numberImg);
}

changeImg();