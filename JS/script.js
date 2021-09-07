const Play_btn = document.getElementById("play")
const Pause_btn = document.getElementById("pause")
const audio = document.getElementById("audio")
const Stop_btn = document.getElementById("stop")
const imagen = document.getElementById("imagen")
const volume_up_btn = document.getElementById("volume-up")
const volume_down_btn = document.getElementById("volume-down")
Play_btn.addEventListener('click',()=>{
    audio.play();
    imagen.style.animationPlayState = "running"
})
Stop_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime=0;
    play_pause_icon.classlist.add("fa-play")
    play_pause_icon.classlist.add("fa-pause")
    isplaying=false
    imagen.style.animationPlayState = "paused"
})
Pause_btn.addEventListener('click',()=>{
    audio.pause();
    imagen.style.animationPlayState = "paused"
})
window.addEventListener("load",() => {
    tiempo.max =audio.duration;
setInterval(() => {
     tiempo.value = audio.currentTime;
    }, 1000);
});

tiempo.addEventListener("change", () => {
    audio.currentTime = tiempo.value;
})

audio.addEventListener("ended",() => {
    imagen.style.animationPlayState= "paused";
    play_pause_icon.classlist.add("fa-play");
    play_pause_icon.classlist.remove("fa-pause");
    isplaying=false;
})
volume_up_btn.addEventListener('click',()=>{
    audio.volume += 0.1;
})
volume_down_btn.addEventListener('click',()=>{
    audio.volume -=0.1;
})







