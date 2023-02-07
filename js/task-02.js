const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
  const elementOfIngredients = document.createElement('li');
  elementOfIngredients.textContent = ingredient;
  elementOfIngredients.classList.add('item');
  
  return elementOfIngredients;
})

console.log(elements);

list.append(...elements);