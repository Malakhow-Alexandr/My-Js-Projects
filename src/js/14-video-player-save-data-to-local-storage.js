import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const PLAYER_DATA = 'videoplayer-current-time';

const currentTime = JSON.parse(localStorage.getItem(PLAYER_DATA) || 0);

player.on('timeupdate', throttle(onPlay, 2000));

player.setCurrentTime(currentTime);

function onPlay(data) {
  localStorage.setItem(PLAYER_DATA, JSON.stringify(data.seconds));
}
