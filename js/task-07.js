const input = document.querySelector('input');
const text = document.querySelector('span');

const changeText = () => {
  text.style.fontSize = input.value + 'px';
}

input.addEventListener('input', changeText);