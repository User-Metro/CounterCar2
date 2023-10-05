let intervalId;
let counter = 0;
var limit   = 250;

const counterElement  = document.getElementById("speed");

const audio           = document.getElementById("encendido");
const button          = document.getElementById("myButton");

const audio2          = document.getElementById("acelerando");
const button2         = document.getElementById("btn-increase");

const audio3          = document.getElementById("frenando");
const button3         = document.getElementById("btn-decrease");

const video           = document.getElementById("runaway");

button.addEventListener("click", function () {
  audio.play();
  document.getElementById("speedometer").style.background = "#ffa300";
  document.getElementById("tablero")    .style.background = "#ffa300";
  document.getElementById("tablero")    .style.background = "#ffa300";
});

button2.onclick = () => {
  audio2.play();
  video .play();
};

button3.onclick = () => {
  audio3.play();
  audio2.onpause();
};

function startIncrement() {
  intervalId = setInterval(function () {
    if (counter < limit) {
      counter ++;
      counterElement.innerHTML = counter;
    }
  }, 100);
}

function stopIncrement() {
  clearInterval(intervalId);
}

function startDecrement() {
  document.getElementById("tablero").style.background = "#ff0534";
  document.getElementById("tablero").style.background = "#ff0534";

  intervalId = setInterval(function () {
    if (counter > 0) {
      counter-=5;
      counterElement.innerHTML = counter;
    }
  }, 100);
}

function stopDecrement() {
  clearInterval(intervalId);
  document.getElementById("tablero").style.background = "#ffa300";
  document.getElementById("tablero").style.background = "#ffa300";
}