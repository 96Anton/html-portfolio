
let button = document.getElementById("colorButton");
let header = document.getElementById("pageHeader");

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

button.addEventListener("click", function() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  header.style.backgroundColor = colors[currentColorIndex];
});
