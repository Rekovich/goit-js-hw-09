// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною (disabled).

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timer = null;
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timer = setInterval(onBodyColor, 1000);
};

function onStopBtnClick() {
    startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timer);
}
