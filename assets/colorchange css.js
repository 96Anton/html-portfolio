

let button = document.getElementById("colorButton");
let body = document.body;   

let colors = [
    "#faa28eff", 
    "#fb99f9ff", 
    "#a9f8dfff", 
    "#48E4CB", 
    "#e8efeeff", 
    "#f4f89eff", 
    "#a5a5a5bf",
     document.body.style.backgroundColor];

     let currentColorIndex = 0;
button.addEventListener("click", function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
}
);
