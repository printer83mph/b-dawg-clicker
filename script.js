var clicks = 0;
var clks,bball;

window.onload = function() {
  clks = document.getElementById("clks");
  bball = document.getElementById("bball");
}

function bclick() {
  clicks++;
  clks.innerHTML = clicks;
  bball.classList.remove("animate");
  void bball.offsetWidth;
  bball.classList.add("animate");
}
