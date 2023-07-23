
setInterval(()=>{
    
const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let day_night = "AM"

if(hours>12){
    day_night="PM";
    hours = hours-12;
}

if(hours < 10){
    hours = "0" + hours;
}
if(mins < 10){
    mins = "0" + mins;
}
if(secs < 10){
   secs = "0" +secs;
}
time.textContent = hours + ":" + mins + ":" + secs +" " + day_night;

});