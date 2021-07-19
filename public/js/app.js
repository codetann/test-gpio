const switchBtn = document.getElementById("switch");
const circle = document.querySelector(".circle");
const p = document.querySelector("p");
const socket = io();

switchBtn.addEventListener("click", () => {
  circle.classList.toggle("circle-off");
  circle.classList.toggle("circle-on");

  p.classList.toggle("p-off");
  p.classList.toggle("p-on");

  if (p.textContent === "off") {
    p.textContent = "on";
  } else {
    p.textContent = "off";
  }

  switchBtn.classList.toggle("switch-on");

  // socket io
  socket.emit("blink");
});
