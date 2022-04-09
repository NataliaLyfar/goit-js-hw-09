const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute("disabled", "disabled");
let timerId = null;

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    }, 1000);
    startBtn.setAttribute("disabled", "disabled"); 
    stopBtn.removeAttribute("disabled", "disabled"); 
});
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

