const mainCookie = (document.getElementById("cookie").style.cursor = "pointer");
// https://www.w3schools.com/jsref/prop_style_cursor.asp
// Cursor style info

const mCookieBtn = document.querySelector("#mainCookie");

const mCount = document.querySelector("#mainCount");
const cCount = document.querySelector("#clickCount");

let clickCounter = 0;
let timeCounter = 0;

mCookieBtn.addEventListener("click", function () {
  clickCounter++;
  cCount.textContent = clickCounter;
  mCount.textContent = clickCounter + timeCounter;
});

setInterval(function () {
  const nmbr = document.querySelector("#timerCount");
  timeCounter++;
  nmbr.textContent = timeCounter;
  mCount.textContent = clickCounter + timeCounter;
}, 1000);
