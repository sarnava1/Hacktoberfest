'use strict';

/* colors */
const YELLOW = "#FFFF00";

var button = document.getElementById("changerBt");
button.addEventListener("click", function() {
  document.body.style.backgroundColor = YELLOW;
});
