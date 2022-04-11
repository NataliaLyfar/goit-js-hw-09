import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
let intervalId = null;


startBtn.addEventListener('click', onStartBtnClick);
const disactiveStartBtn = () => startBtn.setAttribute("disabled", "disabled");
disactiveStartBtn();
const activateStartBtn = () => startBtn.removeAttribute("disabled", "disabled");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
        if(selectedDates[0].getTime() < date.getTime()){
            return Notiflix.Notify.warning("Please choose a date in the future");
        } else {activateStartBtn()};
    },
  };
const fp = flatpickr(input, options);
function onStartBtnClick() {
    intervalId = setInterval(() => {
        const newDate = new Date();
        const selectedData = fp.selectedDates[0];
        const timerData = selectedData.getTime() - newDate.getTime();
        if (timerData < 0) {
            clearInterval(intervalId);
            return;
        }
        const convertedData = convertMs(timerData);
        populateDate(convertedData);
        disactiveStartBtn();
    }, 1000)
}

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function populateDate(config) {
  dataDays.textContent = addLeadingZero(config.days);
  dataHours.textContent = addLeadingZero(config.hours);
  dataMinutes.textContent = addLeadingZero(config.minutes);
  dataSeconds.textContent = addLeadingZero(config.seconds);
} 
