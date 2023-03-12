import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const timeUpdate = function (time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');

const timeStop = JSON.parse(saveTime);

player.setCurrentTime(timeStop || 0);