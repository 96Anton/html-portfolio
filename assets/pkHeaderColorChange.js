let button = document.getElementById("colorButton");
let header = document.getElementById("pageHeader");
let H1 = document.querySelector("h1");
let secondary = document.querySelector(".secondary");
let h2 = document.querySelector("h2");

let colors = [
  "#E8B89D",
  "#D49A9C",
  "#C9826B",
  "#D9B673",
  "#A8A77A",
  "#d1a3a0ff",
  "#AD7C65",
  header.style.backgroundColor // keeps the original header bg
];


let currentColorIndex = 0;

function changeColors() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  header.style.backgroundColor = colors[currentColorIndex];
  h2.style.backgroundColor = colors[(currentColorIndex + 1) % colors.length];
  secondary.style.backgroundColor = colors[(currentColorIndex - 1 + colors.length) % colors.length];
}

header.addEventListener("click", changeColors);
h2.addEventListener("click", changeColors);
secondary.addEventListener("click", changeColors);
