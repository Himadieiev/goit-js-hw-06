const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numberOfCategories.length);


const array = Array.from(document.querySelector('#categories').children);
for (const element of array) {
  const nameOfCaterory = element.firstElementChild.textContent;   
  const numberOfElements = element.lastElementChild.children.length;
  console.log(`Category: ${nameOfCaterory}
  Elements: ${numberOfElements}`);
};