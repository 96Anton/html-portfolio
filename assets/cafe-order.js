

document.addEventListener("DOMContentLoaded", function() {
  let order = document.getElementById("order");
  let form = document.getElementById("cafeForm");
  
  form.onsubmit = function(e) {
  
    e.preventDefault();
    const kaka = document.getElementById("kaka").value;
    const antal = document.getElementById("antal").value;
    const kaffe = document.getElementById("kaffe").value;
    const newOrder = `Ny beställning mottagen: ${antal} ${kaka}kakor ${kaffe === "ja" ? "med" : "utan"} kaffe`;
    const li = document.createElement("li");
    li.textContent = newOrder;
    order.appendChild(li);
    form.reset();
  };
});
