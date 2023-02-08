const counter = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action = "decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

const onBtnDecrementClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const onBtnIncrementClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);



