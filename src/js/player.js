// import music from '../assets/sounds/Aqua_Caelestis.mp3'
import playList from './playList';


const play = document.querySelector('.play');
// const prev = document.querySelector('.play-prev');
const next = document.querySelector('.play-next');
// const playList = document.querySelector('.play-list');
let isPlay;
let number = 0;

const audio = new Audio();

const playAudio = () => {
    if (!isPlay) {
        audio.src = playList[number].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
} 

const togglePlay = () => {
    play.classList.toggle('pause');
}

const getAudioNext = () => {
    if (number < playList.length) {
        number++;
    } else {
        number = 0;
    }
    playAudio();
}

play.addEventListener('click', playAudio);
play.addEventListener('click', togglePlay);
next.addEventListener('click', getAudioNext);