var clks, clicks, clickval, bball, bounce, bdawg, tslick, tawesome, bossmoney, bdprice, tsprice, taprice, bmprice, bdawgs, tslicks;

window.onload = function() {
  clicks = 0;
  clks = document.getElementById("clks");
  clickval = 1;
  bball = document.getElementById("bball");
  bdawg = document.getElementById("bdawg");
  tslick = document.getElementById("tslick");
  tawesome = document.getElementById("tawesome");
  bossmoney = document.getElementById("bossmoney");
  bdprice = 25;
  tsprice = 50;
  taprice = 1000;
  bmprice = 50000;
  bdawgs = 0;
  tslicks = 0;
}

function bclick() {
  setClicks(clicks + clickval);
  var newball = bball.cloneNode(true);
  bball.parentNode.replaceChild(newball, bball);
  bball = newball;
  (new Audio("audio/bounce.mp3")).play();
}

function buybdawg() {
  setClicks(clicks - bdprice);
  bdawgs++;
  document.body.style.backgroundImage = "url(media/bdbg.PNG)";
  document.body.style.backgroundSize = "" + (80 / bdawgs) + "px " + (80 / bdawgs) + "px";
  bdprice *= 2;
  if (bdawgs == 1) {
    // first time setup
    document.getElementById("bdawg").src = "media/bdawg.png";
    document.getElementById("container").style.boxShadow = "0 0 5px black";
    setTimeout(bdawgloop, 4000);
  }
}

function buytslick() {
  setClicks(clicks - tsprice);
  tslicks++;
  document.body.style.backgroundImage = "url(media/tsbg.PNG)";
  document.body.style.backgroundSize = "" + (80 / bdawgs) + "px " + (80 / bdawgs) + "px";
  // mess with the page to make tslick do something
  tsprice *= 2;
  if (tslicks == 1) {
    // first time setup
    document.getElementById("tslick").src = "media/tslick.png";
    clickval++;
    // increase click value
  }
}

function bdawgloop() {
  setClicks(clicks + clickval);
  setTimeout(bdawgloop,4000/(2**(bdawgs-1)));
}

function setClicks(n) {
  clicks = n;
  clks.innerHTML = clicks;
  bdawg.style.width = (clicks < bdprice ? 0 : "140px");
  tslick.style.width = (clicks < tsprice ? 0 : "140px");
  tawesome.style.width = (clicks < taprice ? 0 : "140px");
  bossmoney.style.width = (clicks < bmprice ? 0 : "140px");
}
