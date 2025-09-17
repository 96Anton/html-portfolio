function youAreHere() {
  const pages = {
    "Startsida": "./index.html",
    "Anton Ahlm CV": "./public/about.html",
    "Kontakt": "./public/contact.html",
    "Parkour": "./public/parkour.html",
    "Savanna": "./public/sunnySavanna.html"
  };

  const currentTitle = document.title;

  let html = "<ul>";
  for (const [title, url] of Object.entries(pages)) {
    if (title === currentTitle) {
      html += `<li class="current"><a href="${url}">${title}</a></li>`;
    } else {
      html += `<li><a href="${url}">${title}</a></li>`;
    }
  }
  html += "</ul>";

  document.getElementById("here").innerHTML = html;
}

youAreHere();


