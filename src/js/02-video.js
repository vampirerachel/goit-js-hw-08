import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

  _.throttle(e => {
    console.log(e.target.value);
  }, 1000)

player.on("timeupdate", (event) => {
    let currentTime = event.seconds
    localStorage.setItem("videoplayer-current-time", currentTime)

});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});  