
document.addEventListener("keydown",function(e){
//playing the sounds
const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(!audio){
    return;
}
audio.play();
console.log(document.querySelectorAll(".key"));

//key raises

const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
key.classList.add("playing");
setTimeout(function(){key.classList.remove("playing");},300);});