import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
});

const saveTime = localStorage.getItem('videoplayer-current-time');
// console.log(saveTime);
const timeStop = JSON.parse(saveTime);
// console.log(timeStop.seconds);

player
  .setCurrentTime(timeStop.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
