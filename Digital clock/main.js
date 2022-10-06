function showDate(){
    let todayDate = new Date()
    document.getElementById("dateContainer").innerText = todayDate.toDateString();
}
showDate()

function showTime(){
    let todayDate = new Date()
    let hours = todayDate.getHours()
    let minutes = todayDate.getMinutes()
    let seconds = todayDate.getSeconds()

if (hours==0){
    hours=12
}
else if(hours > 12){
    hours = hours - 12
    
}

hours = hours < 10 ? 0 + "" + hours:hours
minutes = minutes < 10 ? 0 + "" + minutes:minutes
seconds = seconds < 10 ? 0 + "" + seconds:seconds

let clockTime = hours + " : " + minutes + " : " + seconds 
document.getElementById("clockContainer").innerText = clockTime

}

let intervalRef
function startClock() {
   intervalRef = setInterval(showTime,1000)
}
function stopClock() {
    clearInterval(intervalRef)
}