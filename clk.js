// accessing hrs min sec and half
let hrs = document.querySelector("#hours");
let min = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let half = document.querySelector("#ampm");

let options = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata"
}
setInterval(
    () => {
       
        let time = new Date().toLocaleTimeString("en-US", options)

        let showHr = time.slice(0,2);
        let showMin = time.slice(3,5);
        let showSec = time.slice(6,8);
        let showHalf = time.slice(9,11)
        
        hrs.innerHTML = showHr;
        min.innerHTML = showMin;
        sec.innerHTML = showSec;
        half.innerHTML = showHalf;


    }, 1000
)