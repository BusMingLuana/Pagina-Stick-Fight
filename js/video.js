const video = document.querySelector('#video');
var PlayButton=document.getElementById('playButton'); 
const muteUnmute = document.querySelector('#muteButton')

playButton.onclick = () =>  this.togglePlay();
muteButton.onclick = () => this.toggleMute();

function play() {
      this.video.play();
    }
 function  pause() {
      this.video.pause();
    }

function togglePlay() {    this.video.paused ? this.video.play() : this.video.pause(); }

  
function mute() {
    this.video.muted = true;
  }
  function toggleMute() {
    this.video.muted ? this.video.muted = false : this.video.muted = true;
  }


  addEventListener('visibilitychange', ()=>{
    document.visibilityState === "visible" ? video.play() : video.pause();
  })



let isLeaving = false;
if(!!window.IntersectionObserver){
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if(entry.intersectionRatio!=1  && !video.paused){
        video.pause(); 
        isLeaving = true;
      }
      else if(isLeaving) {
          video.play(); 
          isLeaving=false
      }

    });
  }, {threshold:0.6 });
  observer.observe(video) ;
}


//no funciona el observer pues porque no estoy en el html je
// observer.observe (video);