const videoPlayer = document.querySelector('video')
const playBtn = document.querySelector('#play')
const stopBtn = document.querySelector('#stop')
const progressRange = document.querySelector('#progress')
const timestamp = document.querySelector('#time-stamp')

// Play & pause video
const toggleVideoStatus = () => {
    // return true;
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// update play/pause icon
const updatePlayIcon = () => {
    // return true;
    if (videoPlayer.paused) {
        playBtn.innerHTML = `<i class="fa fa-play"></i>`
    } else {
        playBtn.innerHTML = `<i class="fa fa-pause"></i>`
    }
}

// update progress & timestamp
const updateProgress = () => {
    // return true;
    // console.log(videoPlayer.currentTime);
    progressRange.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;

    // get minutes
    let minutes = Math.floor(videoPlayer.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    // get seconds
    let seconds = Math.floor(videoPlayer.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Set video time to progress
const setVideoProgress = () => {
    // return true;
    videoPlayer.currentTime = (+progressRange.value * videoPlayer.duration) / 100;
}

// Stop video
const stopVideo = () => {
    // return true;
    videoPlayer.currentTime = 0;
    videoPlayer.pause();
}


// Event listeners
videoPlayer.addEventListener('click', toggleVideoStatus);
videoPlayer.addEventListener('pause', updatePlayIcon);
videoPlayer.addEventListener('play', updatePlayIcon);
videoPlayer.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progressRange.addEventListener('change', setVideoProgress);