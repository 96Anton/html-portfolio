function handleInput() {
  let pick = document.getElementById("userInput").value.trim().toLowerCase();
  let message = "";

  switch (pick) {
    case "cheetah":
    case "gepard":
      message = "The fastest in the world! (For a short duration)";
      break;

    case "elephant":
      message = "The largest land mammal in the world! (It was probably because of the trunk, right?)";
      break;
    case "elefant":
      message = "Det största landdäggdjuret i världen! (Du valde den pga snabeln, eller hur?)";
      break;

    case "saiga":
      message = "The weirdest animal of this page! I bet you haven't heard of it before, right?";
      break;

    default:
      message = "I don't believe that animal was on the page.. Did it hide in a tree somewhere?";
      break;
  }

  document.getElementById("result").innerText = message;
}
