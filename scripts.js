const mainCookie = (document.getElementById("cookie").style.cursor = "pointer");
// https://www.w3schools.com/jsref/prop_style_cursor.asp
// Cursor style info

const mCookieBtn = document.querySelector("#mainCookie");

const mCount = document.querySelector("#mainCount");
const cCount = document.querySelector("#clickCount");
const tCount = document.querySelector("#timerCount");
const save = document.querySelector("#save");
const load = document.querySelector("#load");

let clickCounter = 0;
let timeCounter = 0;
let store01 = 0;
let store02 = 0;

mCookieBtn.addEventListener("click", function () {
  if (store01 == 0) {
    clickCounter++;
    let mainCounter = clickCounter + timeCounter;
    cCount.textContent = clickCounter;
    mCount.textContent = mainCounter;
  } else if (store01 == 1) {
    clickCounter += 2;
    let mainCounter = clickCounter + timeCounter;
    cCount.textContent = clickCounter;
    mCount.textContent = mainCounter;
  } else if (store01 == 2) {
    clickCounter += 4;
    let mainCounter = clickCounter + timeCounter;
    cCount.textContent = clickCounter;
    mCount.textContent = mainCounter;
  } else if (store01 == 3) {
    clickCounter += 8;
    let mainCounter = clickCounter + timeCounter;
    cCount.textContent = clickCounter;
    mCount.textContent = mainCounter;
  } else if (store01 == 4) {
    clickCounter += 16;
    let mainCounter = clickCounter + timeCounter;
    cCount.textContent = clickCounter;
    mCount.textContent = mainCounter;
  }
});

setInterval(function () {
  if (store02 == 0) {
    timeCounter++;
    let mainCounter = clickCounter + timeCounter;
    tCount.textContent = timeCounter;
    mCount.textContent = mainCounter;
  } else if (store02 == 1) {
    timeCounter += 2;
    let mainCounter = clickCounter + timeCounter;
    tCount.textContent = timeCounter;
    mCount.textContent = mainCounter;
  } else if (store02 == 2) {
    timeCounter += 4;
    let mainCounter = clickCounter + timeCounter;
    tCount.textContent = timeCounter;
    mCount.textContent = mainCounter;
  } else if (store02 == 3) {
    timeCounter += 8;
    let mainCounter = clickCounter + timeCounter;
    tCount.textContent = timeCounter;
    mCount.textContent = mainCounter;
  } else if (store02 == 4) {
    timeCounter += 16;
    let mainCounter = clickCounter + timeCounter;
    tCount.textContent = timeCounter;
    mCount.textContent = mainCounter;
  }
}, 1000);
