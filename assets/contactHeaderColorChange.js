let button = document.getElementById("colorButton");
let header = document.getElementById("card");
let H1 = document.querySelector("h1");
let secondary = document.querySelector(".secondary");
let h2 = document.querySelector("h2");
let buttonHeader = document.querySelector(".buttonHeader");
let headerButton = document.getElementById("headerButton");



let colors = [
  "#ff701dff",
  "#fc444aff",
  "#c1c91fff",
  "#82c853ff",
  "#2cc784ff",
  "#e85f93ff",
  headerButton.style.backgroundColor // keeps the original header bg
];


let currentColorIndex = 0;

function changeColors() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  buttonHeader.style.backgroundColor = colors[(currentColorIndex + 1) % colors.length];
  headerButton.style.backgroundColor = colors[(currentColorIndex + 1) % colors.length];
  header.style.backgroundColor = colors[(currentColorIndex +2) % colors.length];
}

header.addEventListener("click", changeColors);
h2.addEventListener("click", changeColors);
secondary.addEventListener("click", changeColors);
