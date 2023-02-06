const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numberOfCategories.length);

const nameOfCateroryOne = document.querySelectorAll('h2');
console.log(`Category:`, nameOfCateroryOne[0].textContent);

const numberOfFirstElements = document.querySelector('ul ul');
console.log(`Elements:`, numberOfFirstElements.children.length);

const nameOfCateroryTwo = document.querySelectorAll('h2');
console.log(`Category:`, nameOfCateroryTwo[1].textContent);

const numberOfSecondElements = document.querySelector('ul');
console.log(`Elements:`, numberOfSecondElements.children[1].lastElementChild.children.length);

const nameOfCateroryThree = document.querySelectorAll('h2');
console.log(`Category:`, nameOfCateroryThree[2].textContent);

const numberOfThirdElements = document.querySelector('ul');
console.log(`Category:`, numberOfThirdElements.children[2].lastElementChild.children.length);
