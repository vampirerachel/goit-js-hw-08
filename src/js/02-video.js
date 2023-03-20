import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = "videoplayer-current-time"

player.on("timeupdate", throttle((currentTime) => {
    localStorage.setItem(storageKey, currentTime.seconds);
}, 1000));

function setCurrentTime() {
const currentTimeObj = localStorage.getItem(storageKey);
if (!currentTimeObj) {
    return;
}
player.setCurrentTime(currentTimeObj);
};

setCurrentTime();