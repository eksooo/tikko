var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
var dividedTime = 0;

var startIndicator = 0;

const start = document.querySelector(".start-button");

start.addEventListener("mouseenter", function () {
  const audio = document.getElementById("hoverAudio");
  audio.play();
});

start.addEventListener("click", function () {
  const audio = document.getElementById("clickAudio");
  audio.play();
});

function countTimer() {
  if (startIndicator == 1) {
    ++totalSeconds;
    console.log(totalSeconds);
  }
}

function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateButtonTimer(seconds) {
  const startButton = document.querySelector(".start-button");
  startButton.innerHTML = formatTime(seconds);
}

function updateText() {
  const startButton = document.querySelector(".start-button");
  startButton.innerHTML = '<i class="fa fa-play icon" aria-hidden="true"></i>';
}

function countTimer() {
  if (startIndicator == 1) {
    ++totalSeconds;
    console.log(totalSeconds);
    updateButtonTimer(totalSeconds);
  }
}

function startClick() {
  const startButton = document.querySelector(".start-button");
  if (startIndicator == 0) {
    ++startIndicator;
    console.log("Timer Start");
    const audio = document.getElementById("alarmAudio");
    audio.pause();
    audio.currentTime = 0;
  } else {
    --startIndicator;
    console.log("Timer End");
    dividedTime = Math.floor(totalSeconds / 4);
    console.log(dividedTime);
    totalSeconds = 0;
    startButton.disabled = true;
    startButton.classList.add("button-pause");

    if (dividedTime >= 0) {
      startButton.innerHTML = formatTime(dividedTime);
      const countdownInterval = setInterval(() => {
        dividedTime--;
        startButton.innerHTML = formatTime(dividedTime);
        console.log("Counting down:", dividedTime);

        if (dividedTime <= 0) {
          const audio = document.getElementById("alarmAudio");
          clearInterval(countdownInterval);
          audio.play();
          startButton.disabled = false;
          startButton.classList.remove("button-pause");
          updateText();
          console.log("Button enabled again");
        }
      }, 1000);
    } else {
      startButton.disabled = false;
      startButton.classList.remove("button-pause");
      console.log("Button enabled again");
    }
  }
}
