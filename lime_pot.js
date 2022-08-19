var video = document.getElementById("videoPlayer");
var subir = document.getElementById("subirVol");
var bajar = document.getElementById("bajarVol");
var adelantar = document.getElementById("adelantar");
var atrasar = document.getElementById("atrasar");
var play = document.getElementById("play");

play.addEventListener("click", () => {
    if (video.paused == true) {
        video.play();
    }
    else {
        video.pause();
    }
})

subirVol.addEventListener("click", () => {
    video.volume += 0.5;
})
bajarVol.addEventListener("click", () => {
    video.volume -= 0.5;
})

adelantar.addEventListener("click", () => {
    video.controls=true 
    video.currentTime +=10
    video.controls=false 
   })

atrasar.addEventListener("click", () => {
    video.controls=true 
    video.currentTime -=10
    video.controls=false 
})