"use strict";
document.getElementById("welcomeH1").innerHTML = "Hello World Wide Web";

var myDiv = document.getElementById("myDiv");

myDiv.innerHTML = "";

var myBody = document.getElementsByTagName("body")[0];

myBody.style.backgroundColor = "lightgray";

console.log(myDiv);

myDiv.style.width = "300px";
myDiv.style.height = "300px";
myDiv.style.backgroundColor = "lightgreen";

var chessToggle = true;
var player = "X";

for (let y = 1; y <= 3; y++) {
  for (let x = 1; x <= 3; x++) {
    const element = document.createElement("div");
    element.className = "divBox";

    if (chessToggle) {
      element.classList.add("blackBox");
    } else {
      element.classList.add("whiteBox");
    }
    chessToggle = !chessToggle;
    element.id = "x" + x + "y" + y;
    element.addEventListener("click", playerMove);
    myDiv.appendChild(element);
  }
  //logic if needed between rows
}

function playerMove(event) {
  console.log(event);
  event.target.innerHTML = player;

  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}
