const mainCookie = (document.getElementById("cookie").style.cursor = "pointer");
// https://www.w3schools.com/jsref/prop_style_cursor.asp
// Cursor style info

const mCookieBtn = document.querySelector("#mainCookie");
const mCount = document.querySelector("#mainCount");
const save = document.querySelector("#save");
const load = document.querySelector("#load");
const cookieLvl = document.querySelector("#cookieLvl");

let mainvalue = 0;
let store01 = 0;
let store02 = 0;

save.addEventListener("click", function () {
  localStorage.setItem("mainvalue", mainvalue);
  localStorage.setItem("store01", store01);
  localStorage.setItem("store02", store02);
});

load.addEventListener("click", function () {
  mainvalue = localStorage.getItem("mainvalue");
  store01 = localStorage.getItem("store01");
  store02 = localStorage.getItem("store02");
});

mCookieBtn.addEventListener("click", function () {
  if (store01 == 0) {
    mainvalue++;
    mCount.textContent = mainvalue;
  } else if (store01 == 1) {
    mainvalue += 2;
    mCount.textContent = mainvalue;
  } else if (store01 == 2) {
    mainvalue += 4;
    mCount.textContent = mainvalue;
  } else if (store01 == 3) {
    mainvalue += 8;
    mCount.textContent = mainvalue;
  } else if (store01 == 4) {
    mainvalue += 16;
    mCount.textContent = mainvalue;
  }
});

setInterval(function () {
  if (store02 == 0) {
    mainvalue++;
    mCount.textContent = mainvalue;
  } else if (store02 == 1) {
    mainvalue += 2;
    mCount.textContent = mainvalue;
  } else if (store02 == 2) {
    mainvalue += 4;
    mCount.textContent = mainvalue;
  } else if (store02 == 3) {
    mainvalue += 8;
    mCount.textContent = mainvalue;
  } else if (store02 == 4) {
    mainvalue += 16;
    mCount.textContent = mainvalue;
  }
}, 1000);

// mCookieBtn.addEventListener("click", function () {
//   if (store01 == 0) {
//     mainvalue++;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store01 == 1) {
//     mainvalue += 2;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store01 == 2) {
//     mainvalue += 4;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store01 == 3) {
//     mainvalue += 8;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store01 == 4) {
//     mainvalue += 16;
//
//     mCount.textContent = mainvalue;
//
//   }
// });

// setInterval(function () {
//   if (store02 == 0) {
//     mainvalue++;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store02 == 1) {
//     mainvalue += 2;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store02 == 2) {
//     mainvalue += 4;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store02 == 3) {
//     mainvalue += 8;
//
//     mCount.textContent = mainvalue;
//
//   } else if (store02 == 4) {
//     mainvalue += 16;
//
//     mCount.textContent = mainvalue;
//
//   }
// }, 1000);
