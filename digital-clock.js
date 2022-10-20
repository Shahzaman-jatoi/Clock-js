// js part starts now

// making a function to display the time dynamically
function onStart(){
    var watch = new Date();
    var hours = watch.getHours();
    var minutes = watch.getMinutes();
    var seconds = watch.getSeconds();
    var am_Or_Pm = "AM";

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        am_Or_Pm = "PM";
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("session").innerHTML = am_Or_Pm;
}
let setIn = setInterval(onStart, 1000);
// making an arrow funtion to access the setIn variable
var onStop = ()=>{
    setIn = document.getElementsById("stop");
}