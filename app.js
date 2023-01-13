const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let hr = 00;
let min = 00;
let sec = 00;
let t;


function startTimer() {
  t = setTimeout(stopWatch, 1000);
}
startTimer();

function stopWatch() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  } else if (min >= 60) {
    min = 0;
    hr++;
  }else if(sec <10){
    sec = `0${sec}`
  }


  document.getElementById("hours").textContent = hr;
  document.getElementById("minutes").textContent = min;
  document.getElementById("seconds").textContent = sec;

  startTimer();
}


// start
startBtn.addEventListener("click", startTimer);

//stop
stopBtn.addEventListener("click", function () {
  clearTimeout(t);
});

//reset
resetBtn.addEventListener("click", () => {
  document.getElementById("seconds").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("hours").textContent = "00";
  hr = 0;
  min = 0;
  sec = 0;
  clearTimeout(t);
});
