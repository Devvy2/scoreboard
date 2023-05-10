var homes = 0;
var guests = 0;
var round = 0;
const startingminutes = 12;
let time = startingminutes * 60;
let countdown = null;

const timer = document.getElementById("timer");

btnh1.addEventListener("click", update);
btng1.addEventListener("click", update);
btnh2.addEventListener("click", update);
btng2.addEventListener("click", update);
btnh3.addEventListener("click", update);
btng3.addEventListener("click", update);
next_round.addEventListener("click", update);

function update() {
  if (this.id === "btnh1") {
    homes += 1;
    document.getElementById("home").innerHTML = homes;
  } else if (this.id === "btng1") {
    guests += 1;
    document.getElementById("guest").innerHTML = guests;
  } else if (this.id === "btnh2") {
    homes += 2;
    document.getElementById("home").innerHTML = homes;
  } else if (this.id === "btng2") {
    guests += 2;
    document.getElementById("guest").innerHTML = guests;
  } else if (this.id === "btnh3") {
    homes += 3;
    document.getElementById("home").innerHTML = homes;
  } else if (this.id === "btng3") {
    guests += 3;
    document.getElementById("guest").innerHTML = guests;
  } else if (this.id === "next_round") {
    round += 1;
    document.getElementById("period").innerHTML = round;
    if (countdown !== null) {
      clearInterval(countdown);
    }
    time = startingminutes * 60;
    updatetimer();
    countdown = setInterval(updatetimer, 1000);
  }
}

function resettimer() {
  clearInterval(countdown);
  countdown = null;
  timer.innerHTML = "12:00";
}

function updatetimer() {
  time--;

  if (time < 0) {
    clearInterval(countdown);
  } else {
    const minutes = Math.floor(time / 60).toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });
    const seconds = (time % 60).toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

    if (timer) {
      timer.innerText = `${minutes}:${seconds}`;
    }
  }
}

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", reset);

function reset() {
  homes = 0;
  guests = 0;
  round = 0;
  time = startingminutes * 60;
  clearInterval(countdown);
  countdown = null;
  document.getElementById("home").innerHTML = homes;
  document.getElementById("guest").innerHTML = guests;
  document.getElementById("period").innerHTML = round;
  timer.innerHTML = "12:00";
}
