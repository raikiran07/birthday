'use-strict';
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const newArray = [...arr1,...arr2];
console.log(newArray);
const counter = document.getElementById("counter");

const strBtn = document.getElementById("start-btn");
const textMessage = document.querySelector(".my-text");
const main = document.querySelector(".main");
const heading = document.getElementById("heading");


// console.log(displayDay);
// console.log(displayHours);

function updateCounter(){
  const targetTime = new Date('january 21,2022 00:00:00').getTime();

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

  day.innerHTML = displayDays;
  hour.innerHTML = displayHours;
  minute.innerHTML = displayMinutes;
 
  second.innerHTML = displaySeconds;
  second.style.color = "#e525fa";
  
  if(displayDays===0&&displayHours===0&&displayMinutes===0&&displaySeconds===0){
    clearInterval(updateCounter);
    main.style.display='none';
    textMessage.style.display="block";
    heading.innerHTML = "HAPPY 26th BIRTHDAY DA!!";
    heading.style.color = '#f7cd23';
    

  }
  
}
updateCounter();
const countDown = setInterval(updateCounter,1000);












