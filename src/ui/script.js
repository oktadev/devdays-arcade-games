// const { ipcRenderer } = require("electron");

// // Add event listeners to the buttons
// const button1 = document.getElementById("pacman-btn");
// button1.addEventListener("click", () => {
//   ipcRenderer.send("navigate", "pacman/pacman.html"); // Send a message to the main process to navigate to page1.html
// });

// const button2 = document.getElementById("space-btn");
// button2.addEventListener("click", () => {
//   ipcRenderer.send("navigate", "page2.html"); // Send a message to the main process to navigate to page2.html
// });

const buttons = document.querySelectorAll(".square-button");
let currentIndex = 0;

// Add event listener for arrow keys
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % buttons.length;
    buttons[currentIndex].focus();
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    buttons[currentIndex].focus();
  } else if (event.key === "Enter") {
    buttons[currentIndex].click();
  }
});

// Set initial focus on the first button
buttons[currentIndex].focus();
