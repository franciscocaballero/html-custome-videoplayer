// Get Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build Functions
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }

}

function updateButton() {
  console.log('Updated the Button');
}


// Hook up the event listenrs
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)


toggle.addEventListener('click', togglePlay)
