var clicks = 0;
var clks,bball;

window.onload = function() {
  clks = document.getElementById("clks");
  bball = document.getElementById("bball");
}

function bclick() {
  clicks++;
  clks.innerHTML = clicks;
  var newball = bball.cloneNode(true);
  bball.parentNode.replaceChild(newball, bball);
  bball = newball;
}
