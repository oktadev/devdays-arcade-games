// const { ipcRenderer } = require("electron");

// // Add event listeners to the buttons
// const button1 = document.getElementById("lockman-btn");
// button1.addEventListener("click", () => {
//   ipcRenderer.send("navigate", "lockman/lockman.html"); // Send a message to the main process to navigate to page1.html
// });

// const button2 = document.getElementById("invader-btn");
// button2.addEventListener("click", () => {
//   ipcRenderer.send("navigate", "page2.html"); // Send a message to the main process to navigate to page2.html
// });

const buttons = document.querySelectorAll(".square-button");
let currentIndex = 0;

const KEY_CODE_ENTER = "Enter";
const KEY_CODE_ENTER_TEXT = "Blue button";
const KEY_CODE_LEFT = "ArrowLeft";
const KEY_CODE_LEFT_TEXT = "Left";
const KEY_CODE_RIGHT = "ArrowRight";
const KEY_CODE_RIGHT_TEXT = "Right";

// Add event listener for arrow keys
document.addEventListener("keydown", (event) => {
  const key = event.code;
  if (key === KEY_CODE_RIGHT) {
    currentIndex = (currentIndex + 1) % buttons.length;
    buttons[currentIndex].focus();
  } else if (key === KEY_CODE_LEFT) {
    currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    buttons[currentIndex].focus();
  } else if (key === KEY_CODE_ENTER) {
    buttons[currentIndex].click();
  }
});

document.getElementById("key-left").innerText = KEY_CODE_LEFT_TEXT;
document.getElementById("key-right").innerText = KEY_CODE_RIGHT_TEXT;
document.getElementById("key-enter").innerText = KEY_CODE_ENTER_TEXT;

// Set initial focus on the first button
buttons[currentIndex].focus();
