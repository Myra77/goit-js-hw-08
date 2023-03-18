import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

const KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(function(timeNow) {
    localStorage.setItem(KEY, timeNow.seconds)
},1000));


player.setCurrentTime(JSON.parse(localStorage.getItem(KEY) || 0));








