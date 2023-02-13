function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const span = document.querySelector('span');

const changeBgColorBody = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}

button.addEventListener('click', changeBgColorBody);