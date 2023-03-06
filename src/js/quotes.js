import data from './data.json';
import { getRandomNumberBetween } from './util';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.change-quote');

let index = getRandomNumberBetween(0, data.length - 1);

quote.textContent = data[index].text;
author.textContent = data[index].author;

button.addEventListener('click', () => {
    let index = getRandomNumberBetween(0, data.length - 1);
    quote.textContent = data[index].text;
    author.textContent = data[index].author;
})