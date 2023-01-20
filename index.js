'use-strict';
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const newArray = [...arr1,...arr2];
console.log(newArray);
const counter = document.getElementById("counter");

const strMusic = document.getElementById("play");
const textMessage = document.querySelector(".my-text");
const main = document.querySelector(".main");
const heading = document.getElementById("heading");
const music = new Audio("./audio/first.mp3");


window.onload = function playMusic(){
music.play();
 };

 window.onload();


// const playBtn = document.getElementById("play");

document.body.addEventListener("click",function(){
  backgroundSound.play();
  backgroundSound.loop = true;
  backgroundSound.addEventListener('ended', function() {
   this.currentTime = 0;
   this.play();
}, false)
})






// console.log(displayDay);
// console.log(displayHours);

function updateCounter(){

 
  const targetTime = new Date('january 20,2023 22:33:00').getTime();

const currentTime = new Date().getTime();

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;


  const gap = targetTime - currentTime;
let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
const first = document.getElementById("first");


const displayDays = Math.floor(gap/days);
const displayHours = Math.floor((gap%days) / hours);
const displayMinutes = Math.floor((gap%hours)/minutes);
const displaySeconds = Math.floor((gap%minutes)/seconds);

if(displayDays<10){
  day.innerHTML = '0'+displayDays;
}
else{
  day.innerHTML = displayDays;
}

if(displayHours<10){
  hour.innerHTML = '0'+displayHours;
}
else{
  hour.innerHTML = displayHours;
}
if(displayMinutes<10){
  minute.innerHTML = '0'+displayMinutes;
}
else{
  minute.innerHTML = displayMinutes;
}
if(displaySeconds<10){
  second.innerHTML = '0'+displaySeconds;
}
else{
  second.innerHTML = displaySeconds;
}
  second.style.color = "#e525fa";
  
  if(displayDays<=0&&displayHours<=0&&displayMinutes<=0&&displaySeconds<=0){
 
    main.style.display='none';
    textMessage.style.display="block";
    heading.innerHTML = "HAPPY 26th BIRTHDAY DA!!";
    heading.style.color = '#f7cd23';
    

  }
  
}

strMusic.addEventListener("click",function(){
  if(strMusic.innerHTML=="PLAY"){
    strMusic.innerHTML = "STOP";
    music.play();
  }
  else{
    strMusic.innerHTML = "PLAY";
    music.pause();
  }
})
updateCounter();
const countDown = setInterval(updateCounter,1000);












