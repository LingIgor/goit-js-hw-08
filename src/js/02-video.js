import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  // console.log('played the video!');
});
