
const userColor = document.getElementById("color1");
userColor.addEventListener("change", () => backgroundColor(userColor.value));

const userColor2 = document.getElementById("color2");
userColor2.addEventListener("change", () => headingcolor(userColor2.value));

const userColor3 = document.getElementById("color2");
userColor3.addEventListener("change", () => paragraphcolor(userColor3.value));

function backgroundColor(color) {
  document.getElementById("container").style.backgroundColor = color;
}

function headingcolor(color) {
  document.getElementById("heading").style.color = color;

}


function paragraphcolor(color) {
  document.getElementById("para").style.color = color;
}