let intervalId;
let counter = 0;
var limit = 250;

const counterElement = document.getElementById("speed");

const audio = document.getElementById("encendido");
const button = document.getElementById("myButton");

const audio2 = document.getElementById("acelerando");
const button2 = document.getElementById("btn-increase");

const audio3 = document.getElementById("frenando");
const button3 = document.getElementById("btn-decrease");

button.addEventListener("click", function () {
  audio.play();
  document.getElementById("speedometer").style.background = "#ffa300";
  document.getElementById("tailLightR").style.background = "#ffa300";
  document.getElementById("tailLightL").style.background = "#ffa300";
});

button2.onclick = () => {
  audio2.play();
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
  document.getElementById("tailLightR").style.background = "#ff0534";
  document.getElementById("tailLightL").style.background = "#ff0534";

  intervalId = setInterval(function () {
    if (counter > 0) {
      counter-=5;
      counterElement.innerHTML = counter;
    }
  }, 100);
}

function stopDecrement() {
  clearInterval(intervalId);
  document.getElementById("tailLightR").style.background = "#ffa300";
  document.getElementById("tailLightL").style.background = "#ffa300";
}