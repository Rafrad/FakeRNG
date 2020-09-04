import "./styles.css";

var interval;
var indx = 0;
var first = new Date().getHours();

const number_popup =
  '<div id="popup">' +
  '  <div class="popup-box">' +
  '    <div class="popup-header"><p>Wow your number is</p></div>' +
  '    <div id="pop-number"></div>' +
  '    <button id="btn-close-popup" onclick="closePopup()">CLOSE</button>' +
  "  </div>" +
  "</div>";

const genRand = (n) => (Math.random() * n).toFixed(0);
const nextRand = () => {
  interval = setInterval(() => {
    document.getElementById("number").innerHTML = genRand(100);
  }, 50);
};

const nextFake = () => {
  indx += 1;
  console.log((first + indx * indx * 64) % 100);
  return (first + indx * indx * 64) % 100;
};

const closePopup = () => {
  document.getElementById("place").innerHTML = "";
};

const setFakeRand = () => {
  document.getElementById("number").innerHTML = nextFake();
  document.getElementById("place").innerHTML = number_popup;
  document.getElementById("btn-close-popup").onclick = closePopup;
  document.getElementById("pop-number").innerHTML = document.getElementById(
    "number"
  ).innerHTML;
};

const slowedCountDown = (milisec) => {
  setTimeout(() => {
    console.log(milisec);
    document.getElementById("number").innerHTML = genRand(100);
    if (milisec < 350) slowedCountDown(milisec + Math.pow(milisec * 0.04, 2));
    else {
      document.getElementById("btn-stop").hidden = true;
      document.getElementById("btn-stop").disabled = false;
      document.getElementById("btn-gen").hidden = false;
      setFakeRand();
    }
  }, milisec);
};

document.getElementById("number").innerHTML = `ε(´סּ︵סּ\`)з`;
document.getElementById("btn-gen").onclick = function () {
  this.hidden = true;
  document.getElementById("btn-stop").hidden = false;
  nextRand();
};
document.getElementById("btn-stop").onclick = function () {
  this.disabled = true;
  clearInterval(interval);
  slowedCountDown(50);

  //setFakeRand()
};
