// 1 - связать элементы с жс
// 2 - сделать функцию на проверку кол-ва введенных символов при потере фокуса
// 3 - если <= 6, то добавляем класс валид, иначе - класс инвалид
// 4 - добавить слушателя на инпут

const input = document.querySelector('input');

const checkLengthOfInput = () => {
  if (input.value.length <= 6) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
}

input.addEventListener('blur', checkLengthOfInput);

