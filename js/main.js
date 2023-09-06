function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  let clock = document.getElementById("clock");
  clock.innerHTML = h + ":" + +m;
}
setInterval(time, 1000);
let body = document.querySelector("body");
let Dark = document.getElementById("Dark");
let Light = document.getElementById("Light");
let footer = document.querySelector("footer");
let input = document.querySelector("input");
let iphone = document.querySelector(".iphone");
let header = document.querySelector(".header");

Dark.onclick = function () {
  footer.style.backgroundColor = "black";
  input.style.backgroundColor = "black";
  input.style.color = "white";
  iphone.style.backgroundColor = "black";
  header.style.backgroundColor = "rgb(54, 54, 54)";
  body.style.color = "white";
};

Light.onclick = function () {
  footer.style.backgroundColor = "white";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  iphone.style.backgroundColor = "white";
  header.style.backgroundColor = "#e6e6e9";
  body.style.color = "black";
};
