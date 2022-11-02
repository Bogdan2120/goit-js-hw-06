const numberOfCategoris = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${numberOfCategoris.length}`);

const itemsList = document.querySelectorAll('li.item');
itemsList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
