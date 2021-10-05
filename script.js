let time= document.querySelector("#time");
function showTime() {
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let date=date.getDate();
am_pm = "AM";
if (hours > 12) {
    hours -= 12;
    am_pm = "PM";
}
if (hours == 0) {
    hours = 12;
    am_pm = "AM";
}
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;


document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds+"  "+am_pm; 

}
console.log(date);
setInterval(showTime, 1000);