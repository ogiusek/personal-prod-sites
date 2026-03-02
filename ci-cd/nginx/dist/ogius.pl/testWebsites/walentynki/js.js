var audio=new Audio('videos/back.mp3');
let playing=true;
setInterval(()=>{
    if(!playing){audio.play();}else{audio.pause();}
}, 1);
function playAudio() {
    if(!playing){playing=true;}else{playing=false;}
}
