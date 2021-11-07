function show() {
  var p = document.getElementById("p1");
  p.setAttribute("type", "text");
  document.getElementById("show").style.display = "none";
  document.getElementById("hide").style.display = "inline";
}

function hide() {
  var p = document.getElementById("p1");
  p.setAttribute("type", "password");
  document.getElementById("show").style.display = "inline";
  document.getElementById("hide").style.display = "none";
}

function show1() {
  var p = document.getElementById("p2");
  p.setAttribute("type", "text");
  document.getElementById("show1").style.display = "none";
  document.getElementById("hide1").style.display = "inline";
}

function hide1() {
  var p = document.getElementById("p2");
  p.setAttribute("type", "password");
  document.getElementById("show1").style.display = "inline";
  document.getElementById("hide1").style.display = "none";
}
