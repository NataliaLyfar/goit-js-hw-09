const startDate = document.querySelector('.startDate')
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
let timerId;

const deadlineDate = new Date('2022-05-22');
const options = {
    // era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
startDate.textContent = deadlineDate.toLocaleString('en-US', options);
    
const timer = () => {
    const today = new Date();
    const delta = deadlineDate - today;
    const seconds = Math.floor(delta / 1000 % 60);
    const minutes = Math.floor(delta / 1000 / 60 % 60);
    const hours = Math.floor(delta / 1000 / 60 / 60 % 24);
    const days = Math.floor(delta / 1000 / 60 / 60 / 24);

    const formatedSeconds = seconds >= 9 ? seconds : `0${seconds}`;
    const formatedMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const formatedHours = hours > 9 ? hours : `0${hours}`;
    const formatedDays = days > 9 ? days : `0${days}`;

    dataHours.textContent = formatedHours;
    dataMinutes.textContent = formatedMinutes;
    dataDays.textContent = formatedDays;
    dataSeconds.textContent = formatedSeconds;
};

startBtn.addEventListener('click', () => {
    timerId = setInterval(timer, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});


